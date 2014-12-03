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

app.use('/api', usersAPI);
app.use('/todos', todosAPI);


app.get('/', function(req, res) {
	res.render(publicFolder + '/index.html');
});


/**
 * Export the app
 */
module.exports = app;