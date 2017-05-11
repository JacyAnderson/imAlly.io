var express = require('express');
var router = express.Router();
var resourceController = require('../controllers/resources.js');
var adminController = require('../controllers/admin.js');

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

// Admin Routes 

// index 
router.get('/api/me', adminController.index);


// update
router.put('/api/me', adminController.update);

// create
router.post('/auth/signup', adminController.create);

// login
router.post('/auth/login', adminController.login);

// get all
router.get('/admin', '/admin/signup', '/admin/login', '/admin/profile', adminController.grab);


// destroy
router.delete('/api/admin/:id' , adminController.destroy);

module.exports = router;