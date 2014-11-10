var Club = require('../models/clubs');
var successful = "Club has been added to SAC!"

module.exports = function(app) {
	app.get('/all_clubs', function(req, res){
		Club.find(function(err, clubs){
			if(err)
				console.log(err);
			else{
				res.writeHead(200, {
					"Content-Type": "application/json",
					"Access-Control-Allow-Origin": "*"
				});
				res.end(JSON.stringify(clubs));
			}
		});
	});

	app.get('/club/:abbreviation', function(req, res){
		Club.findOne({
			abbreviation: req.params.abbreviation
		}, function(err, club){
			if(err)
				console.log(err);
			else{
				res.writeHead(200, {
					"Content-Type": "application/json",
					"Access-Control-Allow-Origin": "*"
				});
				res.end(JSON.stringify(club));
			}				
		});
	});

	app.post('/add_new_club', function(req, res){
		var new_club = new Club({
			name: req.body.name,
			abbreviation: req.body.abbreviation
		});
		new_club.save(function(err) {
			if(err)
				console.log(err);
			else{
				res.writeHead(200, {
					"Content-Type": "application/json",
					"Access-Control-Allow-Origin": "*"
				});
				res.end(successful);
			}
		});
	});
}