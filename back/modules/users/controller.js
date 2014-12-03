/**
 * Require the model
 */
var User = require('./model');


/**
 * Export the functions
 */
module.exports = {

	/**
	 * Create a new user
	 */
	create: function(req, res, cb) {
		var user = new User(req.body);

		user.save(function(err, data) {
			cb(err, data, res);
		});
	},


	/**
	 * Retrieve all the users
	 */
	retrieve: function(req, res, cb) {
		User.find({}, function(err, data) {
			cb(err, data, res);
		});
	},


	/**
	 * Find a user by _id
	 */
	findOneBy_Id: function(req, res, cb) {
		var id = req.params.id;
		var query = {_id: id};

		User.findOne(query, function(err, data) {
			cb(err, data, res);
		});
	},


	/**
	 * Find a user by id
	 */
	findOneById: function(req, res, cb) {
		var id = req.params.id;
		var query = {id: id};

		User.findOne(query, function(err, data) {
			cb(err, data, res);
		});
	},


	/**
	 * Find a user by username
	 */
	findOneByUsername: function(req, res, cb) {
		var username = req.params.username;
		var query = {username: username};

		User.findOne(query, function(err, data) {
			cb(err, data, res);
		});
	},


	/**
	 * Update a user
	 */
	update: function(req, res, cb) {
		var id = req.params.id;
		var query = {_id: id};
		var mod = req.body;

		delete mod._id;

		User.update(query, mod, function(err, data) {
			cb(err, data, res);
		});
	},


	/**
	 * Delete a user
	 */
	delete: function(req, res, cb) {
		var id = req.params.id;
		var query = {_id: id};

		User.remove(query, function(err, data) {
			cb(err, data, res);
		});
	}
};