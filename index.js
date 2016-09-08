var express = require('express')

var app = express()

var port = process.env.PORT


app.get('/', function (req, res) {

  res.send('home page')
})


app.get('/cats', function (req, res) {

  res.send('some cats!!!')
})

app.listen(port)

