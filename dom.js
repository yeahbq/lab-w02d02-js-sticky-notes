console.log('hi')

var main = document.querySelector('#main');
var button = document.body.querySelector("button");
var totalNotes = document.querySelector("input");
// var card = document.querySelector("div");


var exit = function(event) {
  event.target.parentNode.remove();
  console.log('clicked on span', event.target)
}

var clickedCard = function(event){
  if (event.target.value === "click to edit") {
  console.log("clicked in card", event)
  event.target.textContent = "";
  }
}

var addNote = function() {
  var newDiv = document.createElement('div');
  var span = document.createElement('span');

  newDiv.classList.add('card');
  span.classList.add('exit');

  span.textContent = 'x';
  newDiv.textContent = "click to edit";

  main.appendChild(newDiv).contentEditable = true;
  newDiv.appendChild(span).contentEditable = false;

  span.addEventListener("click", exit);


  document.querySelector('.card').focus();

  // newDiv.setAttribute('data-ph', 'Write a new note!');
  updateTotal();
  }

button.addEventListener("click", addNote);

// card.addEventListener("click", clickedCard);

var updateTotal = function() {
  totalNotes.value = document.querySelectorAll('.card').length
}

// button.addEventListener('click', #)
//function to click x to close box





