var friends = require("../app/data/friends");

module.exports = function (app) {
    app.get("/api/friends", function(req, res) {
        return res.json(friends);
      });

    app.post("/api/friends", function(req,res) {
        console.log(req.body.scores);
        // return res.json({})
        // take in user input
        var user = req.body;

        // present scores as intergers
        for(var i = 0; i < user.scores.length; i++) {
            user.scores[i] = parseInt(user.scores[i]);
          }

          var bestMatch = 0;
          var minimumDifference = 40;
      
        for(var i = 0; i < friends.length; i++) {
        var totalDifference = 0;


        for(var j = 0; j < friends[i].scores.length; j++) {
            var difference = Math.abs(user.scores[j] - friends[i].scores[j]);
            totalDifference += difference;
        }

        if(totalDifference < minimumDifference) {
            bestMatch = i;
            minimumDifference = totalDifference;
          }
        }
    // add to api, data from survey input
    friends.push(user);

    res.json(friends[bestMatch]);
    });  
}