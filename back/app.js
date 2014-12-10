/**
 * Require the needed modules
 */
var bodyParser     = require('body-parser');
var errorHandler   = require('errorhandler');
var express        = require('express');
var expressJwt     = require('express-jwt');
var http           = require('http');
var jwt            = require('jsonwebtoken');
var lodash         = require('lodash');
var methodOverride = require('method-override');
var morgan         = require('morgan');
var path           = require('path');

// Instantiate the express app
var app = module.exports = express();


/**
 * Require the database config and connection
 */
var db = require('./config/db');


/**
 * Configure defaults
 */
app.set('port', process.env.PORT || 3000);
app.set('view engine', 'jade');

var publicFolder = path.join(__dirname, '../public');


/**
 * Configure middlewares
 */
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(methodOverride());
app.use(express.static(path.join(__dirname, '../public')));


/**
 * Configure development environment
 */
var env = process.env.NODE_ENV || 'development';

if(env === 'development') {
	app.use(errorHandler());
}


/**
 * Set up the routes
 */
var usersAPI = require('./modules/users/routes');
var todosAPI = require('./modules/todos/routes');

app.use('/api/users', usersAPI);
app.use('/api/todos', todosAPI);


app.all('*', function(req, res) {
  res.sendFile(publicFolder + '/index.html');
});


/**
 * Export the app
 */
module.exports = app;