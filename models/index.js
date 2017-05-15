//Connect
var Sequelize = require('sequelize');
require('dotenv').config();

var sequelize = new Sequelize('postgres://' + process.env.USERNAME + '@localhost:5432/ally');
//kj

//Export models and Sequelize for seed and dbSetup
module.exports.Sequelize = Sequelize;
module.exports.sequelize = sequelize;

var User = sequelize.import("./user");
var Resource = sequelize.import("./resource");

module.exports.models = {
	User: User,
	Resource: Resource
};