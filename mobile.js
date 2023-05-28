var tall = window.innerHeight;
var wide = window.innerWidth;
var a = document.getElementById("mb");
var x = 730;
var y = 1280;
if (wide <= x && tall <= y) {
	a.innerHTML = '<div class="stopmobileuser"><h1>this website is not made for mobile users only pc or tablet</h1></div>';
}