/**
 * Require the needed modules
 */
var mongoose = require('mongoose');


/**
 * Create the Schema object
 */
var Schema = mongoose.Schema();


/**
 * Create the model Schema
 */
var TodoSchema = new Schema({
	id: { type: Number, min: 0 },
	description: { type: String, default: '' },
	done: { type: Boolean, default: false },
	_userId: { type: Number, ref: 'User' }
});


/**
 * Export the model
 */
module.exports = mongoose.model('Todo', TodoSchema);