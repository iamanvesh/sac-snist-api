var Post = require('../models/posts');
var Club = require('../models/clubs');
var Comment = require('../models/comments');

module.exports = function(app) {

	app.post("/add_comment/:id", function(req, res) {
		var new_comment = new Comment({
			head: req.body.head,
			content: req.body.content
		});

		Club.findById(req.params.id, function(err, club) {
			console.log(club);
			console.log("\n");
			var posts = club.posts;
			for(i in posts) {
				if(posts[i]._id == req.body.id) {
					console.log(posts[i]);
					posts[i].comments.push(new_comment);
					// posts[i].save(function(err) {
					// 	if(err)
					// 		console.log(err);
					// });
					club.save(function(err) {
						if(err)
							console.log(err);
						else
							res.send("Successful");
					});
					console.log(club);
				}
			}
		});
	});

	app.get("/get_all_comments/:id", function(req, res) {
		Club.findById(
			req.params.id,
			function(err, club) {
				var posts = club.posts;
				if(i in posts) {
					if(posts[i] == req.body.id) {
						res.send(posts[i].comments);
					}
				}
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
				res.send("Fail");
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