var DB = require("../models").models;

var resources = [
	{
		title: 'Rainn',
		catagory: 'general',
		resource_url: 'www.rainn.org/national-resources-sexual-assault-survivors-and-their-loved-ones'
	},
	{
		title: 'SAVA',
		catagory: 'general',
		resource_url: 'www.savacenter.org'
	},
	{
		title: 'National Hotline',
		catagory: 'Contact Someone',
		resource_url: 'www.rainn.org/about-national-sexual-assault-telephone-hotline'
	},
	{
		title: 'Chat with Someone',
		catagory: 'Chat',
		resource_url: 'hotline.rainn.org/online/terms-of-service.jsp'
	},
	{
		title: 'Be Heard',
		catagory: 'Testimonials',
		resource_url: 'www.b-heard.org'
	}
];

var resourceCreate = function() {
	return DB.resource.create({
		title: '',
		catagory: '',
		resource_url: ''
	});
};

resourceCreate()
.then(function(resource){
	resources.forEach(function(source){
		source.resourceId = resource.id;
	});
	DB.Resource.bulkCreate(resources);
})
.then(function(){
	process.exit();
});