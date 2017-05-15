var DB = require("../models").models;

var resources = [
	{
		logo: 'https://www.rainn.org/sites/all/themes/rainn/logo.svg',
		title: 'The Rape, Abuse & Incest National Network (RAINN)',
		description: 'The Rape, Abuse & Incest National Network (RAINN) is an American anti-sexual assault organization, the largest in the United States. RAINN operates the National Sexual Assault Hotline and carries out programs to prevent sexual assault, help victims, and to ensure that rapists are brought to justice.',
		url: 'https://www.rainn.org/about-national-sexual-assault-telephone-hotline',
		type: "Hotline"
	},
	{
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
		title: 'Suicide Prevention Lifeline',
		description: 'The National Suicide Prevention Lifeline is a national network of local crisis centers that provides free and confidential emotional support to people in suicidal crisis or emotional distress 24 hours a day, 7 days a week.',
		url: 'https://suicidepreventionlifeline.org/',
		type: "Hotline"
	},
	{
		logo: 'http://www.wyomingequality.org/wp-content/uploads/2014/03/Screen-Shot-2015-12-30-at-7.07.00-AM.png',
		title: 'LGBT National Help Center',
		description: 'The Lesbian, Gay, Bisexual and Transgender (LGBT) National Help Center, founded in 1996, is a non-profit, tax-exempt organization that provides vital peer-support, community connections and resource information to people with questions regarding sexual orientation and/or gender identity.',
		url: 'http://www.glbthotline.org/',
		type: "Hotline"
	},
	{
		logo: 'https://rlv.zcache.com/stop_street_harassment_stickers_large-rf7e3c044013a4e1aac205cd25b464792_v9i40_8byvr_324.jpg',
		title: 'Stop Street Harrassment Hotline',
		description: 'Stop Street Harassment (SSH) is a nonprofit organization dedicated to documenting and addressing and ending gender-based street harassment worldwide.',
		url: 'http://www.stopstreetharassment.org/our-work/nationalshhotline/',
		type: "Hotline"
	}
];

var resourceCreate = function() {
	return DB.Resource.bulkCreate(resources );

	// return DB.Resource.create({
	// 	logo: 'https://www.rainn.org/sites/all/themes/rainn/logo.svg',
	// 	title: 'The Rape, Abuse & Incest National Network (RAINN)',
	// 	description: 'The Rape, Abuse & Incest National Network (RAINN) is an American anti-sexual assault organization, the largest in the United States. RAINN operates the National Sexual Assault Hotline and carries out programs to prevent sexual assault, help victims, and to ensure that rapists are brought to justice.',
	// 	url: 'https://www.rainn.org/about-national-sexual-assault-telephone-hotline',
	// 	type: "Hotline"
	// });
}

resourceCreate()
// .then(function(resource){
// 	resources.forEach(function(source){
// 		source.resourceId = resource.id;
// 	});
// 	DB.Resource.bulkCreate(resources);
// })
.then(function(){
	process.exit();
});