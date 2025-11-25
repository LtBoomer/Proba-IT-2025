const express = require('express')
const mongoose = require('mongoose')
const app = express()
const port = 3000

mongoose.connect("mongodb+srv://admin:admin@pimp-your-grill.jgjtq6t.mongodb.net/")

//app.get('/', (req, res) => {
//  res.send('Hello World!')
//})

const schemaTest = new mongoose.Schema({
  nume: String,
  numar: Number
});
const testModel = mongoose.model('test', schemaTest);

app.post('/', (req ,res) =>{
  res.send("Something");
  testModel.create({nume: 'blabla', numar: 15})
})

app.get('/testget', (req, res) =>{
  res.send('macar asta merge')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
