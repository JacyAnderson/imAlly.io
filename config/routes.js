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
router.get('/api/admin', adminController.index);

// create
router.post('/api/admin', adminController.create);

// show
router.get('/api/admin/:id', adminController.show);

// update
router.put('/api/admin/:id', adminController.update);

// destroy
router.delete('/api/admin/:id' , adminController.destroy);

module.exports = router;