var menu = document.getElementById("a0");
var balls = document.getElementById("c");
var ball = document.getElementById("d");
menu.addEventListener('click', () => {
	if (balls.style.display === "none") {
		balls.style.display = "block";
	} else {
		 balls.style.display = "none";
	}
});
ball.addEventListener('click', () => {
	balls.style.display = "none";
});