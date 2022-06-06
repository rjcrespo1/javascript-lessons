'use strict';

// Selecting elements
const score0El = document.querySelector('#score--0'); // get the id by using "#"
const score1El = document.getElementById('score--1'); // another way to get the id
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

// Starting conditions
score0El.textContent = 0; // We're just changing the displayed numbers on the page to show "0"
score1El.textContent = 0;
diceEl.classList.add('hidden');

let currentScore = 0; // this variable has to be set outside the function below because if it was in the function, the score would be reset to 0 every time the button is clicked

// Rolling the dice functionality
btnRoll.addEventListener('click', function () {
  // 1. Generate a random dice roll
  const dice = Math.trunc(Math.random() * 6) + 1; // gives us a random number between 1 and 6
  console.log(dice);

  // 2. Display the dice
  diceEl.classList.remove('hidden');
  diceEl.src = `dice-${dice}.png`; // We take the variable 'dice' that gives us a random number between 1 and 6 and use that to manipulate the src from the dice images to give us a random dice image == 1-6

  // 3. Check for a rolled 1...
  if (dice !== 1) {
    // Add the dice to the current score
    // *** currentScore = currentScore + dice;
    currentScore += dice; // this is a cleaner way of writing the code above
    current0El.textContent = currentScore; // CHANGE LATER
  } else {
    // Switch to next player
  }
});
