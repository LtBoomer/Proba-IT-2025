const express = require("express");
const mongoose = require("mongoose");
const app = express();
const port = 3000;
const cors = require("cors");

app.use(
  cors({
    origin: "http://localhost:5173",
  })
);
app.use(express.json());

mongoose.connect(
  "mongodb+srv://admin:admin@pimpgrill.w9atftp.mongodb.net/?appName=PimpGrill"
);

const Schema = new mongoose.Schema({
  name: String,
  number: Number,
});
const UserSchema = new mongoose.Schema({
  name: String,
  telephoneNumber: Number,
  email: String,
  password: String,
});

const user = mongoose.model("user", UserSchema);

const test = mongoose.model("test", Schema);

app.post("/post", (req, res) => {
  user.create({
    name: req.body.name,
    telephoneNumber: req.body.number,
    email: req.body.email,
    password: req.body.pass,
  });
  res.status(200).send("A mers");
});

app.get("/ceva", async (req, res) => {
  const valoare = await test.find();
  console.log(valoare);
  res.send(valoare).status(200);
});

app.get("/cautare-filtru", async (req, res) => {
  const user = await user
    .find()
    .sort({ email: req.body.email, password: req.body.password });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
