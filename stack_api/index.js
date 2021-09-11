require('./db.js')
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

var roomRoutes = require('./controllers/roomController')

var app = express()
app.use(bodyParser.json())
app.use(cors({origin:'http://localhost:3000'}))
app.listen(3500,()=>console.log('Server started at : 3500'))

app.use('/room',roomRoutes)
app.use(express.static('public'))