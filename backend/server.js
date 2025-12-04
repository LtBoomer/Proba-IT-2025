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
  res.send(userInfo).status(200);
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

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
