console.log('hi')

var button = document.body.querySelector("button");
var totalNotes = document.querySelector("input");

var addNote = function() {
  var main = document.querySelector('#main');
  var newDiv = document.createElement('div');
  var span = document.createElement('span');
  newDiv.classList.add('card');
  span.classList.add('exit');
  newDiv.textContent = "click to edit";
  span.textContent = 'x';
  main.appendChild(newDiv).contentEditable = true;
  newDiv.appendChild(span);

  updateTotal();
  }

button.addEventListener("click", addNote);

var updateTotal = function() {
  totalNotes.value = document.querySelectorAll('.card').length
}

// button.addEventListener('click', #)
//function to click x to close box

// var exit = function() {
//   if (span.classList.contains('exit') {
//     span.parentNode.remove();
//   }
// }

// span.addEventListener("click", exit);


