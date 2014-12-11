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
var authRoutes = require('./modules/auth/routes');
var userRoutes = require('./modules/users/routes');
var todoRoutes = require('./modules/todos/routes');

app.use('/auth', authRoutes);
app.use('/api/users', userRoutes);
app.use('/api/todos', todoRoutes);

app.all('*', function(req, res) {
  res.sendFile(publicFolder + '/index.html');
});


/**
 * Export the app
 */
module.exports = app;