const button = document.getElementsByClassName('srcbutton');
var input = 0;
var output = 0;
button[0].addEventListener('click',function testfunction(){
    input = Array.from(document.querySelectorAll('.srcinput')).map(input => input.value);
    output = "search.html?input=" + encodeURIComponent(input);
    window.location.href = output;
});

