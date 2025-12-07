require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const app = express();
const port = 3000;
const cors = require("cors");
const jwt = require("jsonwebtoken");
const auth = require("./auth");
const uploadImage = require("./fileUpload");

app.use(
  cors({
    origin: "http://localhost:5173",
  })
);
app.use(express.json());

mongoose.connect(
  "mongodb+srv://admin:admin@pimpgrill.w9atftp.mongodb.net/?appName=PimpGrill"
);

const UserSchema = new mongoose.Schema({
  name: String,
  telephoneNumber: Number,
  email: String,
  password: String,
  likedGrills: Array,
  likesGiven: Number,
});

const GrillSchema = new mongoose.Schema({
  grillName: String,
  grillOwner: String,
  emailOfOwner: String,
  likes: Number,
  photo: String,
  description: String,
});

const grill = mongoose.model("grill", GrillSchema);

const user = mongoose.model("user", UserSchema);

app.post("/post", (req, res) => {
  user.create({
    name: req.body.name,
    telephoneNumber: req.body.number,
    email: req.body.email,
    password: req.body.pass,
    likedGrills: [],
    likesGiven: 0,
  });
  res.status(200).send("A mers");
});

app.get("/fetch-own-grills", auth, async (req, res) => {
  const emailOfOwner = req.email.email;
  console.log(emailOfOwner);
  const ownedGrills = await grill.find({ emailOfOwner });
  res.send(ownedGrills).status(200);
});

app.post("/post-grill", (req, res) => {
  console.log(req.body);
  grill.create({
    grillName: req.body.name,
    grillOwner: req.body.owner,
    emailOfOwner: req.body.email,
    likes: req.body.likes,
    photo: req.body.photo,
    description: req.body.description,
  });
  res.status(200).send("A mers");
});

app.get("/login-user", async (req, res) => {
  const { email } = req.query;
  const userInfo = await user.findOne({ email });
  console.log(userInfo);
  if (userInfo != null) {
    res.send(userInfo).status(200);
  } else {
    res.send({}).status(404);
  }
});
app.get("/all-users", async (req, res) => {
  const { email } = req.query;
  const userExistsAlready = await user.findOne({ email });
if(userExistsAlready == null){
  res.send(0).status(200);
}
else{
  res.send(1).status(200);
}
});

app.post("/login-token", (req, res) => {
  const { email } = req.body;
  const token = jwt.sign({ email }, process.env.AUTH_CODE, {
    expiresIn: "15m",
  });
  res.json(token);
});

app.get("/profile", auth, (req, res) => {
  res.json(req.email.email);
});

app.post("/upload-grill-photo", uploadImage.single("image"), (req, res) => {
  res.json(req.file.filename);
});

app.patch("/like-grill", async (req, res) => {
  const { grillId, grillLikes } = req.body;
  const countLike = await grill.updateOne(
    { _id: grillId },
    { $set: { likes: grillLikes } }
  );
  res.status(200);
});

app.get("/fetch-grills", async (req, res) => {
  console.log(req.query);
  const { number } = req.query;
  const grills = await grill.find().limit(number);
  res.send(grills);
});

app.get("/best-grills", async (req, res) => {
  const bestGrills = await grill.find().sort({ likes: -1 }).limit(3);
  console.log(bestGrills);
  res.send(bestGrills);
});

app.patch("/update-user-likes", async (req, res) => {
  const { userEmail, likes, grillId } = req.body;
  console.log(grillId);
  const likeUpdate = await user.updateOne(
    { email: userEmail },
    { $set: { likesGiven: likes } }
  );
  const likedGrillsUpdate = await user.updateOne(
    { email: userEmail },
    { $push: { likedGrills: grillId } }
  );
  res.send(200);
});

app.patch("/remove-grill-like", async (req, res) => {
  const { userEmail, likes, grillId } = req.body;
  console.log(grillId);
  const likeUpdate = await user.updateOne(
    { email: userEmail },
    { $set: { likesGiven: likes } }
  );
  const likedGrillsUpdate = await user.updateOne(
    { email: userEmail },
    { $pull: { likedGrills: grillId } }
  );
  res.send(200);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
