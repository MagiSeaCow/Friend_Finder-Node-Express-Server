var friends = require("../data/friends.js");

module.exports = function(app)
{
  // ===================apiRoutes.js==========================
  app.get("/api/friends", function(req, res)
  {
    res.json(friends);
  });

  //=======================Post==========================
  app.post("/api/friends", function(req, res) 
  {
    // req.body hosts is equal to the JSON post sent from the user
    // This works because of our body parsing middleware
    var addFriend = req.body; //
    // Using a RegEx Pattern to remove spaces from newCharacter
    // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
    addFriend.name = addFriend.name.charAt(0).toUpperCase() + addFriend.name.slice(1);
    friends.push(addFriend);
    res.json(friends);
  });

  // $.get("/api/friends/",function(apiData) {
  //   console.log(JSON.stringify(apiData)); });
  // -------

};
