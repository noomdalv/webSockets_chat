var express = require("express");
var socket = require("socket.io");

// App Setup
var app = express();
var server = app.listen(4000, function() {
	console.log("Listening to requests on PORT 4000");
});

// Static Files
app.use(express.static("public"));

// Socket Setup
var io = socket(server);

io.on("connection", function(socket) {
	console.log("Socket connection established");

	socket.on("chat", data => {
		io.sockets.emit("chat", data)
	})

	socket.on("typing", data => {
		socket.broadcast.emit("typing", data);
	})
})
