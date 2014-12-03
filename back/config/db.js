/**
 * Require the needed modules
 */
var mongoose = require('mongoose');


/**
 * Build the connection string
 */
var dbURI = 'mongodb://localhost/toodoo';
var dbURI = 'mongodb://gui:123456@ds051960.mongolab.com:51960/toodoo';


/**
 * Create the database connection
 */
mongoose.connect(dbURI);


/**
 * Set the connection events
 */

// If the connection is successful
mongoose.connection.on('connected', function () {
  console.log('Mongoose default connection open to ' + dbURI);
});

// If the connection throws an error
mongoose.connection.on('error',function (err) {
  console.log('Mongoose default connection error: ' + err);
});

// If the connection is disconnected
mongoose.connection.on('disconnected', function () {
  console.log('Mongoose default connection disconnected');
});

// When the connection is open
mongoose.connection.once('open', function () {
  console.log('Mongoose default connection is open');
});

// If the Node process ends, close the Mongoose connection
process.on('SIGINT', function() {
  mongoose.connection.close(function () {
    console.log('Mongoose default connection disconnected through app termination');
    process.exit(0);
  });
});
