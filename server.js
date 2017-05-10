// require express and other modules
var express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    mongoose = require('mongoose'),
    auth = require('./resources/auth');

// require and load dotenv
require('dotenv').load();

// configure bodyParser (for receiving form data)
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// serve static files from public folder
app.use(express.static(__dirname + '/public'));

// require SQL User
var User = require('./models/user');

/* API Routes */

app.get('/api/me', auth.ensureAuthenticated, function (req, res) {
  console.log(req.user);
  User.findById(req.user).then(function (user) {
    if (!user) {
      return res.status(400).send({ message: 'User not found.' });
    }
    res.send(user);
  });
});

app.put('/api/me', auth.ensureAuthenticated, function (req, res) {
  User.findById(req.user).then(function (user) {
    if (!user) {
      return res.status(400).send({ message: 'User not found.' });
    }
    user.displayName = req.body.displayName || user.displayName;
    user.username = req.body.username || user.username;
    user.email = req.body.email || user.email;
    user.save().then(function(result) {
      if (!result) {
        res.status(500).send({ message: "Oh noes an error!" });
      }      
      res.send(result);
    });
  });
});

/* Auth Routes */

app.post('/auth/signup', function (req, res) {
  User.findOne({where: { email: req.body.email }}).then(function (existingUser) {
    if (existingUser) {
      return res.status(409).send({ message: 'Email is already taken.' });
    }
    var user = User.build({
      displayName: req.body.displayName,
      username: req.body.username,
      email: req.body.email,
      password: req.body.password
    });
    user.save().then(function (result) {
      if (!result) {
        res.status(500).send({ message: "Oh noes an error!" });
      }
      res.send({ token: auth.createJWT(result) });
    });
  });
});

app.post('/auth/login', function (req, res) {
  User.findOne({where: { email: req.body.email }}).then(function (existingUser) {
    if (!existingUser) {
      return res.status(401).send({ message: 'Invalid email or password.' });
    }
    var validPassword = existingUser.comparePassword(req.body.password);
    if (!validPassword) {
      return res.status(401).send({ message: 'Invalid email or password.' });
    }
    res.send({ token: auth.createJWT(existingUser) });
  });
});

/*
 * Catch All Route
 */
app.get(['/', '/signup', '/login', '/profile'], function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});


/*
 * Listen on localhost:9000
 */
app.listen(9000, function() {
  console.log('server started');
});