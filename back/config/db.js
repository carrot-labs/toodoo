/**
 * Require the needed modules
 */
var mongoose = require('mongoose');


/**
 * Build the connection string
 */
var dbURI = 'mongodb://localhost/toodoo';


/**
 * Create the database connection
 */
mongoose.connect(dbURI);