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
			title: req.body.title,
			createdBy: req.body.user_name,
			content: req.body.content
		});

		Club.findByIdAndUpdate(
				req.params.id,
				{$push: { posts: new_post }},
				{safe: true, upsert: true},
				function(err, model) {
					if(err)
						console.log(err)
					else
						res.send(successful);
				}
			);
	});
}