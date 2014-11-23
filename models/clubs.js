var mongoose = require('mongoose');
var Schema	= mongoose.Schema;
var Post = require('./posts');

var clubSchema = new Schema({
	name: {
		type: String,
		required: true,
		unique: true
	},
	abbreviation: {
		type: String,
		required: true,
		unique: true
	},
	followers: {
		type: Number,
		default: 0
	},
	posts: [Post.schema]
});

module.exports = mongoose.model('Club', clubSchema);