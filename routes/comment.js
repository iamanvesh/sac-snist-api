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
			var posts = club.posts;
			for(i in posts) {
				if(posts[i]._id == req.body.id) {
					posts[i].comments.push(new_comment);
					
					club.save(function(err) {
						if(err)
							console.log(err);
						else
							res.send("Successful");
					});
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
