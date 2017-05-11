var db = require('../models');

//index
function index(req, res){
	User.findById(req.user).then(function (user) {
    if (!user) {
      return res.status(400).send({ message: 'User not found.' });
    }
    res.send(user);
  });
}

// update
function update(req, res) {
	 User.findById(req.user).then(function (user) {
    if (!user) {
      return res.status(400).send({ message: 'User not found.' });
    }
    user.displayName = req.body.displayName || user.displayName;
    user.username = req.body.username || user.username;
    user.email = req.body.email || user.email;
    user.save().then(function(result) {
      if (!result) {
        res.status(500).send({ message: "Oh noes an error!" });
      }      
      res.send(result);
    });
  });
}

// create
function create(req, res) {
	User.findOne({where: { email: req.body.email }}).then(function (existingUser) {
    if (existingUser) {
      return res.status(409).send({ message: 'Email is already taken.' });
    }
    var user = User.build({
      displayName: req.body.displayName,
      email: req.body.email,
      password: req.body.password
    });
    user.save().then(function (result) {
      if (!result) {
        res.status(500).send({ message: "Oh noes an error!" });
      }
      res.send({ token: auth.createJWT(result) });
    });
  });
}


// login
function login(req, res) {
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

// grabAll
function grab(req, res) {
	 res.sendFile(__dirname + '/views/admin.html');
}

module.exports.index = index;
module.exports.update = update;
module.exports.create = create;
module.exports.login = login;
module.exports.grab = grab;
