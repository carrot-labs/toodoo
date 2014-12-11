/**
 * Require the needed modules
 */
var express    = require('express');
var expressJwt = require('express-jwt');
var secret     = require('../../config/secret.js');

/**
 * Create the express router
 */
var router = express.Router();


/**
 * Require the controller
 */
var _todo = require('./controller');


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

router.use('/', expressJwt({secret: secret}));


router.get('/', function(req, res) {
	_todo.retrieve(req, res, cb);
});

router.get('/_id/:id', function(req, res) {
	_todo.findOneBy_Id(req, res, cb);
});

router.get('/id/:id', function(req, res) {
	_todo.findOneById(req, res, cb);
});



/**
 * Create the POST routes
 */
router.post('/', function(req, res) {
	_todo.create(req, res, cb);
});



/**
 * Create the PUT routes
 */
router.put('/_id/:id', function(req, res) {
	_todo.update(req, res, cb);
});



/**
 * Create the DELETE routes
 */
router.delete('/_id/:id', function(req, res) {
	_todo.delete(req, res, cb);
});


/**
 * Export the router
 */
module.exports = router;