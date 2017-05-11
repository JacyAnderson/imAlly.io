var db = require('../models');
var User = db.models.User;
var auth = require('../resources/auth');


function login (req, res) {
  User.findOne({where: { email: req.body.email }}).then(function (existingUser) {
    if (!existingUser) {
      return res.status(401).send({ message: 'Invalid email or password.' });
    }
    var validPassword = existingUser.comparePassword(req.body.password);
    if (!validPassword) {
      return res.status(401).send({ message: 'Invalid email or password.' });
    }
    res.send({ token: auth.createJWT(existingUser) });
  });
}

module.exports = {
  login: login
}