var menu = document.getElementById("a0");
var a = document.getElementById("a1");
var b = document.getElementById("a2");
var c = document.getElementById("a3");
var d = document.getElementById("a4");
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
a.addEventListener('click', () => {
	location.href = 'download.html';
});
b.addEventListener('click', () => {
	location.href = 'about.html';
});
c.addEventListener('click', () => {
	location.href = 'support.html';
});
d.addEventListener('click', () => {
	location.href = 'https://github.com/rocky-devexe/rocky-devexe.github.io';
});
var tall = window.innerHeight;
var wide = window.innerWidth;
var a = document.getElementById("mb");
var x = 720;
var y = 1280;
console.log("Height: ",tall)
console.log("Width: ",wide)
console.log("X: ",x)
console.log("Y: ",y)
if (wide <= x && tall <= y) {
	a.innerHTML = '<div class="a">';
}