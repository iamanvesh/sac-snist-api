var mongoose = require('mongoose');
var Schema	= mongoose.Schema;
var Comment = require('./comments');

var postSchema = new Schema({
	title: {
		type: String,
		required: true
	},
	content: {
		type: String,
		required: true
	},
	createdBy: {
		type: String,
		required: true
	},
	date: {
		type: Date,
		default: Date.now
	},
	comments: [Comment.schema],
	votes: {
		type: Number,
		default: 0
	}
});

module.exports = mongoose.model('Post', postSchema);