// var db = require('../models');
// var Resource = db.models.Resource;
// var auth = require('../resources/auth');

var resObj = [{
	logo: 'https://www.rainn.org/sites/all/themes/rainn/logo.svg',
	title: 'The Rape, Abuse & Incest National Network (RAINN)',
	description: 'The Rape, Abuse & Incest National Network (RAINN) is an American anti-sexual assault organization, the largest in the United States. RAINN operates the National Sexual Assault Hotline and carries out programs to prevent sexual assault, help victims, and to ensure that rapists are brought to justice.',
	url: 'https://www.rainn.org/about-national-sexual-assault-telephone-hotline',
	type: "Hotline"
}, {
	logo: 'https://www.rainn.org/sites/all/themes/rainn/logo.svg',
	title: 'The Rape, Abuse & Incest National Network (RAINN)',
	description: 'The Rape, Abuse & Incest National Network (RAINN) is an American anti-sexual assault organization, the largest in the United States. RAINN operates the National Sexual Assault Hotline and carries out programs to prevent sexual assault, help victims, and to ensure that rapists are brought to justice.',
	url: 'https://www.rainn.org/about-national-sexual-assault-telephone-hotline',
	type: "Hotline"
},
{
	logo: 'https://www.rainn.org/sites/all/themes/rainn/logo.svg',
	title: 'The Rape, Abuse & Incest National Network (RAINN)',
	description: 'The Rape, Abuse & Incest National Network (RAINN) is an American anti-sexual assault organization, the largest in the United States. RAINN operates the National Sexual Assault Hotline and carries out programs to prevent sexual assault, help victims, and to ensure that rapists are brought to justice.',
	url: 'https://www.rainn.org/about-national-sexual-assault-telephone-hotline',
	type: "Hotline"
},
{
	logo: 'https://www.rainn.org/sites/all/themes/rainn/logo.svg',
	title: 'The Rape, Abuse & Incest National Network (RAINN)',
	description: 'The Rape, Abuse & Incest National Network (RAINN) is an American anti-sexual assault organization, the largest in the United States. RAINN operates the National Sexual Assault Hotline and carries out programs to prevent sexual assault, help victims, and to ensure that rapists are brought to justice.',
	url: 'https://www.rainn.org/about-national-sexual-assault-telephone-hotline',
	type: "Hotline"
}];

// index
function index(req, res) {
	console.log("hit");
	res.json(resObj);
	// Resource.findAll().then(function(resources){
	// 	res.json(resources);
	// });
}

// // show
// function show(req, res) {
// 	Resource.findById(req.params.id)
// 	.then(function(resource){
// 		if(!resource) return error(res , "not found");
// 		res.json(resource);
// 	});
// }

// // create
// function create(req, res) {
// 	Resource.create(req.body).then(function(resource){
// 		if(!resource) return error(res, "not saved");
// 		res.json(resource);
// 	});
// }

// // update
// function update(req, res) {
// 	Resource.findById(req.params.id)
// 	.then(function(resource){
// 		if(!resource) return error(res, "not found");
// 		return resource.updateAttributes(req.body);
// 	})
// 	.then(function(resource){
// 		res.json(resource);
// 	});
// }

// // destroy
// function destroy(req, res) {
// 	Resource.findById(req.params.id)
// 	.then(function(resource){
// 		if(!resource) return error(res, "not found");
// 		return resource.destroy();
// 	})
// 	.then(function(){
// 		res.redirect("/resources");
// 	});
// }

module.exports.index = index;
// module.exports.show = show;
// module.exports.create = create;
// module.exports.update = update;
// module.exports.destroy = destroy;