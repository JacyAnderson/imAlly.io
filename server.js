var express = require('express');
var app = express();
var routes = require('./config/routes.js');

var bodyParser = require('body-parser');
app.use(bodyParser.json());

app.use(function(req, res){
	res.sendFile(__dirname + '/public/index.html');
});



app.listen(3000, function() {
  console.log("Listenig on localhost: 3000");
});