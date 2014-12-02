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
var UserSchema = new Schema({
	id: { type: Number, min: 0 },
	name: { type: String, default: '' },
	username: { type: String, default: '' },
	email: { type: String, default: '' },
	password: { type: String, default: '' },
});


/**
 * Export the model
 */
module.exports = mongoose.model('User', UserSchema);