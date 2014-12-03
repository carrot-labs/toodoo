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
var _user = require('./controller');


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

router.get('/', function(req, res) {
	_user.retrieve(req, res, cb);
});

router.get('/_id/:id', function(req, res) {
	_user.findOneBy_Id(req, res, cb);
});

router.get('/id/:id', function(req, res) {
	_user.findOneById(req, res, cb);
});

router.get('/username/:username', function(req, res) {
	_user.findOneByUsername(req, res, cb);
});


/**
 * Create the POST routes
 */
router.post('/', function(req, res) {
	_user.create(req, res, cb);
});



/**
 * Create the PUT routes
 */
router.put('/_id/:id', function(req, res) {
	_user.update(req, res, cb);
});



/**
 * Create the DELETE routes
 */
router.delete('/_id/:id', function(req, res) {
	_user.delete(req, res, cb);
});


/**
 * Export the router
 */
module.exports = router;