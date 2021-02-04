var data = require("../data.json");

exports.addFriend = function(request, response) {
	// Your code goes here
  response.render('index.handlebars', data);

  var newFriend =
  	{
  		"name": request.query.name,
  		"description": request.query.description,
  		"imageURL": "https://i.picsum.photos/id/1025/500/500.jpg?hmac=-8oa3YhiI2vz-AJSkoxWl_7uP0QpVYMmQabi48iqMHM"
  	};

  data.friends.push(newFriend);

}
