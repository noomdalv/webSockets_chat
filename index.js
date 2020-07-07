var express = require("express");


// App Setup
var app = express();
var server = app.listen(4000, function() {
	console.log("Listening to requests on PORT 4000");
});

// Static Files
app.use(express.static("public"));
