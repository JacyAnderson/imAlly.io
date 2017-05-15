var db = require('../models');
var Resource = db.models.Resource;


// index
function index(req, res) {
	console.log("hit");
	// res.json(resObj);
	Resource.findAll().then(function(resources){
		console.log(resources);
		res.json(resources);
	});
}



module.exports.index = index;
