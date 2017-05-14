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
	logo: 'http://savacenter.org/wp-content/uploads/2015/01/SAVA-Logo.jpg',
	title: 'Sexual Assault Viticm Advocate (SAVA)',
	description: 'SAVA’s direct victim services provide a safety net to individuals impacted by sexual violence. SAVA’s services offer accessible, inclusive therapy and support services to victims regardless of income, gender, sexual orientation, immigration status or any other characteristic.',
	url: 'http://savacenter.org/',
	type: "General"
},
{
	logo: 'https://pbs.twimg.com/profile_images/859437344025399297/9pHVtL3l.jpg',
	title: 'Vera House Survivor Stories',
	description: 'It is the mission of Vera House, Inc. to end all domestic and sexual violence, to assist families in crisis, to support those affected by domestic and sexual violence to live safe, self-sufficient lives, to empower women and children, and to promote a culture of equality and respect in all relationships.',
	url: 'http://www.verahouse.org/domestic-violence-sexual-assault/survivors/survivors-stories',
	type: "Survivor Stories"
},
{
	logo: 'https://tvlvmcjg4f-flywheel.netdna-ssl.com/wp-content/uploads/2016/08/Logo-with-ribbon.png',
	title: 'The Rape, Abuse & Incest National Network (RAINN)',
	description: 'The National Suicide Prevention Lifeline is a national network of local crisis centers that provides free and confidential emotional support to people in suicidal crisis or emotional distress 24 hours a day, 7 days a week.',
	url: 'https://suicidepreventionlifeline.org/',
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