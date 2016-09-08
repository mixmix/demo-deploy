var express = require('express')

var app = express()


app.get('/', function (req, res) {

  res.send('home page')
})


app.get('/cats', function (req, res) {

  res.send('some cats!!!')
})

app.listen(80)

