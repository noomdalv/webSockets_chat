// Make connection
const socket = io.connect("http://localhost:4000");

// Query DOM
const message = document.getElementById('message');
const nickname = document.getElementById('nickname');
const btn = document.getElementById('btn');
const output = document.getElementById('output');
const feedback = document.getElementById('feedback');

// Emit Events
btn.addEventListener("click", () => {
	socket.emit("chat", {
		message: message.value,
		nickname: nickname.value
	})
})

message.addEventListener("keypress", () => {
	socket.emit("typing", nickname.value);
})

// Listen for Events
socket.on("chat", data => {
	output.innerHTML += "<p><strong>" + data.nickname + ":</strong> " + data.message + "</p>";
	message.value = "";
})

socket.on("typing", data => {
	feedback.innerHTML = "<p><em>" + data + " is typing a message...</em></p>";
})
