var express = require("express");

// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;
// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// //for styling:
// app.use(express.static(__dirname + '/public'));
require('./app/routing/htmlRoutes.js')(app);
require('./app/routing/apiRoutes.js')(app);

// //===========================================================
// Starts the server to begin listening
// =============================================================
app.listen(PORT, function()
{
  console.log("App listening on PORT " + PORT);
});
