var Promise  = require('bluebird');
var path     = require('path');
var fs       = Promise.promisifyAll(require('fs'));
var dbPath   = path.join(__dirname, '..', 'db', 'users.json');

var User = function(opts){
  this.name = opts.name;
  this.email = opts.email;
  this.id = null;
}

User.prototype.find = function(id){
  var self = this;
  return fs.readFile(dbPath).then(function(users){
    return users[id];
  })
  .then(function(user){
    self.user.name  = user.name;
    self.user.email = user.email;
    self.user.id    = user.id
    return self;
  });
};

User.prototype.create = function(opts){
  this.name  = opts.name;
  this.email = opts.email;
  this.save();
};

User.prototype.set = function(param, value){
  this[param] = value;
}

User.prototype.get = function(param){
  return this[param];
}

User.prototype.save = function(){
  var self = this;
  return fs.readFile(dbPath).then(function(data){
    self.set('id', data.length + 1);
    data[self.get('id')] = self;
    return data;
  })
  .then(function(data){
    return fs.writeFile(dbPath, data);
  });
};

module.exports = User;