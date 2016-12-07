console.log('hi')

var button = document.body.querySelector("button");
var totalNotes = document.querySelector("input");

var addNote = function() {
  var main = document.querySelector('#main');
  var newDiv = document.createElement('div');
  newDiv.classList.add('card');
  newDiv.textContent = "click to edit";
  main.appendChild(newDiv).contentEditable = true;
  updateTotal();
  }

button.addEventListener("click", addNote);

var updateTotal = function() {
  totalNotes.value = document.querySelectorAll('.card').length
}




