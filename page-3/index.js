var h1 = document.getElementById('h1')
var answer = document.getElementById('answer')

answer.addEventListener('click', change)

function change(){
  var x = prompt('Enter a value');
  document.getElementById('h1').innerHTML = x;
}
