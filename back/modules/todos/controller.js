/**
 * Require the model
 */
var Todo = require('./model');


/**
 * Export the functions
 */
module.exports = {

	/**
	 * Create a new todo
	 */
	create: function(req, res, cb) {
		var todo = new Todo(req.body);

		todo.save(function(err, data) {
			cb(err, data, res);
		});
	},


	/**
	 * Retrieve all the todos
	 */
	retrieve: function(req, res, cb) {
		Todo.find({}, function(err, data) {
			cb(err, data, res);
		});
	},


	/**
	 * Find a todo by _id
	 */
	findOneBy_Id: function(req, res, cb) {
		var id = req.params.id;
		var query = {_id: id};

		Todo.findOne(query, function(err, data) {
			cb(err, data, res);
		});
	},


	/**
	 * Find a todo by id
	 */
	findOneById: function(req, res, cb) {
		var id = req.params.id;
		var query = {id: id};

		Todo.findOne(query, function(err, data) {
			cb(err, data, res);
		});
	},


	/**
	 * Update a todo
	 */
	update: function(req, res, cb) {
		var id = req.params.id;
		var query = {_id: id};
		var mod = req.body;

		delete mod._id;

		Todo.update(query, mod, function(err, data) {
			cb(err, data, res);
		});
	},


	/**
	 * Delete a todo
	 */
	delete: function(req, res, cb) {
		var id = req.params.id;
		var query = {_id: id};

		Todo.remove(query, function(err, data) {
			cb(err, data, res);
		});
	}
};