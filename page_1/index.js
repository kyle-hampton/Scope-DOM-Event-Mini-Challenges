var button1 = document.getElementById('button1');
var button2 = document.getElementById('button2');
var box = document.getElementById('box');

button1.addEventListener('click', argument1);
button2.addEventListener('click', argument2);

function argument1(){
  box.innerHTML = "Im right"
}
function argument2(){
  box.innerHTML = "No im right"
}
