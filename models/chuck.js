var mongoose = require('mongoose');

// SCHEMAS
var quotesSchema = new mongoose.Schema({
	type: String,
	value: Array
 });

// Map it through Mongoose
var Quotes = mongoose.model('Quotes', quotesSchema);

module.exports = Quotes;