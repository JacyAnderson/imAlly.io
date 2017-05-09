var db = require('../models');


function index(req, res) {
	Resource.findAll().then(function(resources){
		res.json(resources);
	});
}

function show(req, res) {
	Resource.findById(req.params.id)
	.then(function(resource){
		if(!resource) return error(res , "not found");
		res.json(resource);
	});
}

function create(req, res) {
	Resource.create(req.body).then(function(resource){
		if(!resource) return error(res, "not saved");
		res.json(resource);
	});
}

function update(req, res) {
	Resource.findById(req.params.id)
	.then(function(resource){
		if(!resource) return error(res, "not found");
		return resource.updateAttributes(req.body);
	})
	.then(function(resource){
		res.json(resource);
	});
}

function destroy(req, res) {
	Resource.findById(req.params.id)
	.then(function(resource){
		if(!resource) return error(res, "not found");
		return resource.destroy();
	})
	.then(function(){
		res.redirect("/resources");
	});
}

module.exports.index = index;
module.exports.show = show;
module.exports.create = create;
module.exports.update = update;
module.exports.destroy = destroy;