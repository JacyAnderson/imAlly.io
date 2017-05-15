//Connect
var Sequelize = require('sequelize');
require('dotenv').config();

// test if using heroku psql or local
if (process.env.DATABASE_URL) {
  // the application is executed on Heroku ... use the postgres database
  sequelize = new Sequelize(process.env.DATABASE_URL, {
  	dialect: 'postgres',
  	protocol: 'postgres',
  	logging: true
  });
} else {
  // the application is executed on the local machine
  sequelize = new Sequelize('postgres://' + process.env.USERNAME + '@localhost:5432/ally');
}

//Export models and Sequelize for seed and dbSetup
module.exports.Sequelize = Sequelize;
module.exports.sequelize = sequelize;

// import user and resource model
var User = sequelize.import("./user");
var Resource = sequelize.import("./resource");

// export models
module.exports.models = {
	User: User,
	Resource: Resource
};