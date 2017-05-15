module.exports = function(sequelize, Sequelize){
	var model = sequelize.define("resource", {
		logo: Sequelize.STRING,
		title: Sequelize.STRING,
		description: Sequelize.TEXT,
		url: Sequelize.STRING,
		type: Sequelize.STRING
	});

	return model;
};