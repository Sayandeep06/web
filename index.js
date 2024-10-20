require('dotenv').config()

const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter', (req,res)=>{
    res.send('sayandeepdotcom')
})

app.get('/login', (req, res)=>{
    res.send('<h1>please login at sayandotcom</h1>')
})

app.get('/github', (req,res)=>{
    res.send('<h2>Sayandeep06</h2>')
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})