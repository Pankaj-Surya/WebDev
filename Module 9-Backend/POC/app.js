const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World')
})


app.get('/about', function (req, res) {
    res.send('<h1>About Page</h1>')
  })


app.get('/my', function (req, res) {
  res.sendFile("./views/my.html",{root:__dirname })
});


app.listen(3000)