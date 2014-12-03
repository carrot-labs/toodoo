/**
 * Require the needed modules
 */
var express        = require('express');
var bodyParser     = require('body-parser');
var methodOverride = require('method-override');
var errorHandler   = require('errorhandler');
var lodash         = require('lodash');
var morgan         = require('morgan');
var http           = require('http');
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
app.set('views', __dirname + '/modules');
app.set('view engine', 'jade')/


/**
 * Configure middlewares
 */
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(methodOverride());
app.use(express.static(path.join(__dirname, '../front')));


/**
 * Configure development environment
 */
var env = process.env.NODE_ENV || 'development';

if(env === 'development') {
	app.use(errorHandler());
}


/**
 * Export the app
 */
module.exports = app;