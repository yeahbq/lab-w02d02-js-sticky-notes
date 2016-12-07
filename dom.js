console.log('hi')

var button = document.body.querySelector("button");
var newDiv = document.createElement('div');
var totalNotes = document.querySelector("input");
var main = document.querySelector('#main');

var addNote = function() {
  console.log('clicked button');
  updateTotal();
  main.appendChild(newDiv).classList.add('card').textContent = "new sticky";
  }
button.addEventListener("click", addNote);

var updateTotal = function() {
  totalNotes.value = document.querySelectorAll('.card').length
}




