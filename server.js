// Dependencies
var express = require("express");

// Initialize Express
var app = express();

// Set the port of our application
var PORT = process.env.PORT || 5000;

// Configure middleware
// Use express.static to serve the public folder as a static directory
app.use(express.static("public"));

// Start the server
app.listen(PORT, function() {
  console.log("App running on port " + PORT + "!");
});

// Export
module.exports = app;