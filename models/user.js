
var bcrypt = require('bcryptjs');

// creates model for user
module.exports = function(sequelize, Sequelize) {
  var User = sequelize.define('user', {
    displayName: Sequelize.STRING,
    email: Sequelize.STRING,
    password: Sequelize.STRING
  }, {
    instanceMethods: {
      comparePassword: function(password) {
        return bcrypt.compareSync(password, this.password);
      }
    }  
  });

  // //Only needed for setup
  // User.sync({force: true});

  // salt and hash password
  User.beforeCreate(function(user, options) {
    //Async didn't work with this hook :(
    var salt = bcrypt.genSaltSync(10);
    var hash = bcrypt.hashSync(user.password, salt);
    user.password = hash;
  });
  return User;
}
