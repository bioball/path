var http = require('http');
var app = require('express')();

require('./config/routes')(app);

var server = http.createServer(app);
server.listen(app.get('PORT'));