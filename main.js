var menu = document.getElementById("a0");
//var body = document.getElementById("mb");
var hello = document.getElementById("logos");//.innerHTML = '<div class="menu" id="mu"><div class="ms" id="ms"></div></div>';
hello.innerHTML = '<div class="menu" id="mu"><div class="ms" id="ms"></div></div>'
const a = document.getElementsByClassName("i");
menu.addEventListener('click', () => {
  menu.innerHTML = '<div class="a">Button Clicked!</div>';
  window.setTimeout(() => {
    menu.innerHTML = '<div class="a"><img src="https://cdn-icons-png.flaticon.com/512/7216/7216128.png" alt="download" width="40" height="40"></div>';
  }, 2000);
});