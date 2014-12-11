/**
 * Require the needed modules
 */
var express = require('express');
var jwt     = require('jsonwebtoken');


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

router.post('/loggedin', function(req, res) {
	var token = req.body.token;

	/**
	 * Verify if the token is valid
	 */
	jwt.verify(token, 'secret', function(err, decoded) {
		if(err) res.send(401, 'Invalid token');

		res.send(200);
	});
});


router.post('/login', function(req, res) {
	var username = req.body.username;
	var password = req.body.password;

	var secret = 'secret';


	/**
	 * Verify if the username and password are incorrect
	 */
	if(username !== 'johndoe' || password !== 'foobar') {
		res.send(401, 'Wrong user or password');
	}


	/**
	 * Get the user information
	 */
	var profile = {
		_id: '98390u129uhj1y8312y',
		name: 'John Doe',
		age: 34,
		job: 'Web developer',
		email: 'johndoe@mail.com'
	};


	/**
	 * Generate the token
	 */
	var token = jwt.sign(profile, secret, { expiresInMinutes: 60*24*7 });


	/**
	 * Send the token as json
	 */
	res.json({ token: token});
});



/**
 * Export the router
 */
module.exports = router;