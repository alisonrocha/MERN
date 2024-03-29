const express = require('express')
const cookieParser = require('cookie-parser')
const cors = require('cors')
const path = require('path')
const mongoose = require('mongoose')
const routes = require('./src/routes')

const app = express()
const port = process.env.PORT || 5000

//Conexão MongoDB

mongoose.connect(
  'mongodb://localhost/curso-basico',
  {
    useUnifiedTopology: true,
    useNewUrlParser: true
  },
  function (err) {
    if (err) {
      console.log(err)
    } else {
      console.log('MongoDB Conectado com sucesso!')
    }
  }
)

app.use(cors())

app.use(cookieParser())

app.use(express.json())

app.use(routes)

app.listen(port, function () {
  console.log(`Server running on port ${port}`)
})
