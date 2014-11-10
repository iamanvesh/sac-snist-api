var Post = require('../models/posts');
var Club = require('../models/clubs');

var successful = "Post has been added successfully!"

module.exports = function(app){
	app.get('/get_all_posts/:abbreviation', function(req, res){
		Club.findOne({
			abbreviation: req.params.abbreviation
		}, function(err, club) {
			if(err)
				console.log(err);
			else{
					res.writeHead(200, {
						"Content-Type": "application/json",
						"Access-Control-Allow-Origin": "*"
					});
					res.end(JSON.stringify(club.posts));
			}
		});
	});

	app.post('/add_new_post/:id', function(req, res) {
		var new_post = new Post({
			title: req.params.title,
			createdBy: req.params.user_name,
			content: req.params.content
		});
		// new_post.save(function(err){
		// 	if(err)
		// 		console.log(err);
		// 	else{
		// 		res.writeHead({
		// 			"Content-Type": "application/json",
		// 			"Access-Control-Allow-Origin": "*"
		// 		});
		// 		res.end(successful);
		// 	}
		// });
		Club.update({_id: req.params.id},
			{$push: { "posts" : new_post}},
			{
				safe: true,
				upsert: true
			}, function(err, data) {
				if(err) 
					console.log(err);
				else{
					res.writeHead({
						"Content-Type": "application/json",
						"Access-Control-Allow-Origin": "*"
					});
					res.end(successful);
				}	
			});
	});
}