var User = require('../models/user');

var usersController = {};

usersController.find = function(req, res){
  User.find(req.params.id).then(function(user){
    res.send(200, JSON.stringify(user));
  })
  .catch('Error', function(e){
    res.send(402, e);
  });
};

usersController.create = function(req, res){
  var user = new User({
    name: req.params.name,
    email: req.params.email
  });
  user.save().then(function(user){
    res.send(201, user);
  }, function(err){
    res.send(400, err);
  });
};

module.exports = usersController;