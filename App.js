
var express = require('express');
var app = express();

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(express.text())

// respond with "hello world" when a GET request is made to the homepage
app.get('/', function(req, res) {
    console.log(req.body)
  res.send('hello world');
});



app.listen(3000)