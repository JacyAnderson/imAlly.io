module.exports = function(sequelize, Sequelize){
	var model = sequelize.define("resource", {
		title: Sequelize.STRING,
		catagory: Sequelize.STRING,
		resource_Url: Sequelize.STRING
	});

	return model;
};