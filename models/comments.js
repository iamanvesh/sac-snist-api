var mongoose = require('mongoose');
var Schema 	= mongoose.Schema;

var commentSchema = new Schema({
	head: {
		type: String,
		required: true
	},
	content: {
		type: String,
		required: true
	}
});

module.exports = mongoose.model('Comment', commentSchema);