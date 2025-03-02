let id = "Welcometext";
let idone = "rctlolniceepicsrlg";
let ele = document.getElementById(id);
let text = ele.innerHTML;

function getRandomColor() {
	return '#' + Math.floor(Math.random()*19777215).toString(16);
}
function colorzetext() {
	ele.innerHTML = '';
	
	for (let char of text) {
		let span = document.createElement('span');
		span.textContent = char;
		span.style.color = getRandomColor();
		ele.appendChild(span);
	}
}
function colorzetexto() {
	ele1.innerHTML = '';
	
	for (let char of text1) {
		let span = document.createElement('span');
		span.textContent = char;
		span.style.color = getRandomColor();
		ele1.appendChild(span);
	}
}
colorzetext();
setInterval(() => colorzetext(), 200);
let ele1 = document.getElementById(idone);
let text1 = ele1.innerHTML;
colorzetexto();
setInterval(() => colorzetexto(), 200);
