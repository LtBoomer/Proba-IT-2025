const express = require('express')
const mongoose = require('mongoose')
const app = express()
const port = 3000
const cors = require('cors')

let variable

app.use(express.json())
app.use(cors({
  origin: "http://localhost:5173"
}));
mongoose.connect("mongodb+srv://admin:admin@pimp-your-grill.jgjtq6t.mongodb.net/")

const Schema = new mongoose.Schema({
  name: String,
  number: Number,
})

const test = mongoose.model("test", Schema)


app.get('/ceva', async (req, res) =>{
  const valoare = await test.find()
  console.log(valoare);
  (res.send(valoare))
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
