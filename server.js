// require express and other modules
var express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    mongoose = require('mongoose'),
    auth = require('./resources/auth');
    route = require('./config/routes.js');
    

// require and load dotenv
require('dotenv').load();

// configure bodyParser (for receiving form data)
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


// serve routes
app.use(route);
// serve static files from public folder
app.use(express.static(__dirname + '/public'));




/*
 * Catch All Route
 */

// app.get(['/admin', '/admin/signup', '/admin/login', '/admin/profile'], function (req, res) {
//   res.sendFile(__dirname + '/views/admin.html');
// });
app.get(['/admin', '/admin-signup', '/admin-login'], function (req, res) {
  res.sendFile(__dirname + '/views/admin.html');
});

// app.get(['/'], function (req, res) {
//   res.sendFile(__dirname + '/views/index.html');
// });


/*
 * Listen on localhost:9000
 */
app.listen(9000, function() {
  console.log('server started');
});