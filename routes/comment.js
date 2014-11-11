var Post = require('../models/posts');
var Club = require('../models/clubs');
var Comment = require('../models/comments');
var club = new Club;

module.exports = function(app) {

	app.post("/all_comments/:id", function(req, res) {
		var new_comment = new Comment({
			head: req.body.head,
			content: req.body.content
		});

	});
}

/*

	// Failed methods.
	
		Club.findOne(
			{"posts._id": req.body.id},
			function(err, club){
				if(err)
					console.log(err);
				else
					console.log(club);
				res.send("Fuck");
		});

		console.log(club);
		var post = club.posts.id(req.body.id);
		console.log(post);

		Club.posts.findByIdAndUpdate(
			req.body.id,
			{$push: {comments: new_comment}},
			{safe: true, upsert:true},
			function(err, model) {
				if(err)
					console.log(err);
				else
					res.send("Successful!");
		});
		
		Club.findOneAndUpdate(
			{"posts._id": req.body.id},
			{$push: {"posts.$.comments": new_comment}},
			{safe: true, upsert: true},
			function(err, model) {
				if(err)
					console.log(err);
				else
					res.send("Successful!")
			});*/