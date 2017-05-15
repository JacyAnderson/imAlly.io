//Connect
var Sequelize = require('sequelize');
require('dotenv').config();

// if (process.env.DATABASE_URL) {
//   // the application is executed on Heroku ... use the postgres database
//   sequelize = new Sequelize(process.env.DATABASE_URL, {
//     dialect:  'postgres',
//     protocol: 'postgres',
//     logging:  true //false
//   });
// } else {
//   // the application is executed on the local machine
//   sequelize = new Sequelize('postgres://' + process.env.USERNAME + '@localhost:5432/ally');
// }
//var sequelize = new Sequelize('postgres://' + process.env.USERNAME + '@localhost:5432/ally');
//kj

pg.defaults.ssl = true;
pg.connect(process.env.DATABASE_URL, function(err, client) {
  if (err) throw err;
  console.log('Connected to postgres! Getting schemas...');

  client
    .query('SELECT table_schema,table_name FROM information_schema.tables;')
    .on('row', function(row) {
      console.log(JSON.stringify(row));
    });
});

//Export models and Sequelize for seed and dbSetup
module.exports.Sequelize = Sequelize;
module.exports.sequelize = sequelize;

var User = sequelize.import("./user");
var Resource = sequelize.import("./resource");

module.exports.models = {
	User: User,
	Resource: Resource
};