// require express and other modules
var express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    mongoose = require('mongoose'),
    auth = require('./resources/auth'),
    userController = require('./controllers/user');

// require and load dotenv
require('dotenv').config({path: __dirname + '/.env'});


// configure bodyParser (for receiving form data)
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// serve static files from public folder
app.use(express.static(__dirname + '/public'));

// require SQL User
var db = require('./models');
var User = db.models.User;

var routes = require('./config/routes');
app.use(routes);


/* API Routes */

// app.get('/api/me', auth.ensureAuthenticated, userController.index);
  

// app.put('/api/me', auth.ensureAuthenticated, userController.update);
  
/* Auth Routes */

// app.post('/auth/signup', userController.create);

// app.post('/auth/login', userController.login);

/*
 * Catch All Route
 */
app.get(['/admin', '/admin-signup', '/admin-login'], function (req, res) {
  res.sendFile(__dirname + '/views/admin.html');
});

app.get(['/', '/next'], function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});


/*
 * Listen on localhost:9000
 */
app.listen(process.env.PORT || 9000, function() {
  console.log('server started');
});