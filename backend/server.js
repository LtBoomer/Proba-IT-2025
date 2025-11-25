const express = require('express')
const mongoose = require('mongoose')
const app = express()
const port = 3000


app.use(express.json())
let chestie = 'bla';
mongoose.connect("mongodb+srv://admin:admin@pimp-your-grill.jgjtq6t.mongodb.net/")

//app.get('/', (req, res) => {
//  res.send('Hello World!')
//})

const schemaTest = new mongoose.Schema({
  nume: String,
  numar: Number
});
const testModel = mongoose.model('test', schemaTest);

app.post('/testamchestii', (req ,res) =>{
  const {nume, numar} = req.body
  console.log(nume, numar)
  if(nume != undefined && numar != undefined){
  testModel.create({nume, numar})
  res.send("da ba").status(200);
  }else{
    res.status(400).send("Empty stuff")
  }
})

app.get('/testget', (req, res) =>{
  res.send('macar asta merge')
})

app.get('/testamchestii', (req,res) =>{
  const data = testModel.find({name: "cevacoaie"})
  console.log(data)
})

const functie = async () => {
  const data = await testModel.find({nume: "uite ba scriu ceva"});
}
functie()
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
