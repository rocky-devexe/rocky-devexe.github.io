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
var tall = window.innerHeight;
var wide = window.innerWidth;
var x = 720;
var y = 1280;
console.log("Height: ",tall)
console.log("Width: ",wide)
console.log("X: ",x)
console.log("Y: ",y)
if (wide <= x && tall <= y) {
	console.log("Decteck Mobile Phone Phone mode Enabled")
}