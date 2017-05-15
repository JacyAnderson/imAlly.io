var express = require('express');
var router = express.Router();
var resourceController = require('../controllers/resources.js');
var userController = require('../controllers/user.js');
var auth = require('../resources/auth');

// Resource Routes

// index
router.get('/api/resources', resourceController.index);


// User Routes 

// index 
router.get('/api/me', auth.ensureAuthenticated, userController.index);

// update
router.put('/api/me', auth.ensureAuthenticated, userController.update);

// create
router.post('/auth/signup', userController.create);

// login
router.post('/auth/login', userController.login);



module.exports = router;