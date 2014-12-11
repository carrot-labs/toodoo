/**
 * Require the needed modules
 */
var express = require('express');


/**
 * Create the express router
 */
var router = express.Router();


/**
 * Require the controller
 */
// var _auth = require('./controller');


/**
 * Define the default callback
 */
var cb = function(err, data, res) {
	if(err) throw err;

	res.json(data);
};


/**
 * Create the GET routes
 */

router.post('/login', function(req, res) {
	res.json('hello there');
});



/**
 * Export the router
 */
module.exports = router;