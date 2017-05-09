var express = require('express');
var app = express();
var routes = require('./config/routes.js');

var bodyParser = require('body-parser');
app.use(bodyParser.json());



app.listen(3000, function() {
  console.log("Listenig on localhost: 3000");
});