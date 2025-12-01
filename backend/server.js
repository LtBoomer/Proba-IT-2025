require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const app = express();
const port = 3000;
const cors = require("cors");
const jwt = require("jsonwebtoken");
const auth = require('./auth')
const uploadImage = require("./fileUpload")

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

})

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
  console.log(req.email.email)
  res.json(req.email.email);
});

app.post("/upload-grill-photo", uploadImage.single("image"), (req, res) =>{
  console.log(req.file);
  res.json(req.file)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
