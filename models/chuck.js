var mongoose = require('mongoose');

// SCHEMAS
var quotesSchema = new mongoose.Schema({
	chuck_type: String,
	img: String,
	type: String,
	value: Array
 });

// Map it through Mongoose
var Quotes = mongoose.model('Quotes', quotesSchema);

module.exports = Quotes;