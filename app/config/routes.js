var usersController = require('../controllers/usersController');

module.exports = function(app){
  app.get('users/:id/friends',  usersController.findFriends);
  app.get('users/:id',          usersController.find);
  app.post('users',             usersController.new);
  app.put('users',              usersController.update);
};