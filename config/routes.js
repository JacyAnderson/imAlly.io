var express = require('express');
var router = express.Router();
var resourceController = require('../controllers/resources.js');
var userController = require('../controllers/user.js');

// Resource Routes

// index
router.get('/api/resources', resourceController.index);

// create
router.post('/api/resources', resourceController.create);

// show
router.get('/api/resources/:id', resourceController.show);

// update
router.put('/api/resources/:id', resourceController.update);

// destroy 
router.delete('/api/resources/:id', resourceController.destroy);

// User Routes 

// index 
router.get('/api/me', auth.ensureAuthenticated, userController.index);

// update
router.put('/api/me', auth.ensureAuthenticated, userController.update);

// create
router.post('/auth/signup', userController.create);

// login
router.post('/auth/login', userController.login);

// get all
router.get('/admin', '/admin/signup', '/admin/login', '/admin/profile', userController.grab);



module.exports = router;