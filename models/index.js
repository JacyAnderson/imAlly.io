//Connect
var Sequelize = require('sequelize');
require('dotenv').config();

var sequelize = new Sequelize('postgres://' + process.env.USERNAME + '@localhost:5432/ally' || process.env.DATABASE_URL, {
  logging: false,
  dialectOptions: {
    ssl: true /* for SSL config since Heroku gives you this out of the box */
  }});
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