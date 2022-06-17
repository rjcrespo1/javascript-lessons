'use strict';

// Selecting elements
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.querySelector('#score--0'); // get the id by using "#"
const score1El = document.getElementById('score--1'); // another way to get the id
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

let scores, currentScore, activePlayer, playing;

// Starting conditions
function init() {
  scores = [0, 0];
  currentScore = 0; // this variable has to be set outside the function below because if it was in the function, the score would be reset to 0 every time the button is clicked
  activePlayer = 0; // variable for selecting the current player
  playing = true;

  score0El.textContent = 0; // We're just changing the displayed numbers on the page to show "0"
  score1El.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;

  diceEl.classList.add('hidden');
  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');
  player0El.classList.add('player--active');
  player1El.classList.remove('player--active');
}
init();

function switchPlayer() {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0; // if the active player is 0, it then turns to player 1 and vice versa
  player0El.classList.toggle('player--active'); // "toggle" adds the class if it is not there and if it is, it removes the class
  player1El.classList.toggle('player--active');
}

// Rolling the dice functionality
btnRoll.addEventListener('click', function () {
  if (playing) {
    // 1. Generate a random dice roll
    const dice = Math.trunc(Math.random() * 6) + 1; // gives us a random number between 1 and 6
    // console.log(dice);

    // 2. Display the dice
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`; // We take the variable 'dice' that gives us a random number between 1 and 6 and use that to manipulate the src from the dice images to give us a random dice image == 1-6

    // 3. Check for a rolled 1...
    if (dice !== 1) {
      // Add the dice to the current score
      // *** currentScore = currentScore + dice;
      currentScore += dice; // this is a cleaner way of writing the code above
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore; // Here we are updating the current score to the current player{activePlayer}
    } else {
      // Switch to next player
      switchPlayer();
    }
  }
});

// Functionality for holding the current score and adding to the total score
btnHold.addEventListener('click', function () {
  if (playing) {
    // 1. Add current score to active player's score
    // scores[1] = scores[1] + currentScore
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    // 2. Check if player's score is >= 100
    if (scores[activePlayer] >= 100) {
      // 2a. Finish game
      playing = false;
      diceEl.classList.add('hidden');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
    } else {
      // 2b. Switch to the next player
      switchPlayer();
    }
  }
});

// Functionality for the new game(reset) button
btnNew.addEventListener('click', init);
// created a seperate function with the starter code and added that to the event listener
