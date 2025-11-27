const express = require('express')
const mongoose = require('mongoose')
const app = express()
const port = 3000
const cors = require('cors')


 app.use(cors({
   origin: "http://localhost:5173"
 }));
 app.use(express.json());

mongoose.connect("mongodb+srv://admin:admin@pimpgrill.w9atftp.mongodb.net/?appName=PimpGrill")

const Schema = new mongoose.Schema({
  name: String,
  number: Number,
})

const test = mongoose.model("test", Schema)

app.post('/post', (req, res) =>{
  console.log(req.body.name, req.body.number)
  test.create({name: req.body.name, number: req.body.number})
  res.status(200).send("A mers")
})

app.get('/ceva', async (req, res) =>{
  const valoare = await test.find()
  console.log(valoare);
  res.send(valoare).status(200);
})



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
