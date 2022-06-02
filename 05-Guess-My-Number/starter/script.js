'use strict';

/*
document.querySelector('.message'); // '.message' is a part of DOM manipulation and we use the same property from css to access classes and ids.
console.log(document.querySelector('.message').textContent); // textContent will display only the text within that id or class.
document.querySelector('.message').textContent = '🎉 Correct Number!';
console.log(document.querySelector('.message').textContent); // and now it shows the new content which we added in the line above instead of the original html content

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 25;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/

const secretNum = Math.trunc(Math.random() * 20) + 1; // Math.random() gives us random numbers between 0 and 1 every time we refresh the page. Math.random()*20 gives us a random number between 0 and 20.
// Math.trunc() deletes the decimal and any number that comes after it. It doesn't round at all. So now it will give a random number between 0 and 19...which isn't exactly what we want
// since we are using Math.trunc() we will never get to 20 since we aren't rounding the number. (19.999999 = 19) So we can add +1 to the function and it now gives us a random number between 1 and 20.
let score = 20;

document.querySelector('.number').textContent = secretNum;
console.log(secretNum);

document.querySelector('.check').addEventListener('click', function () {
  // we select the button which has the class name 'check' then added an event listener
  const guess = Number(document.querySelector('.guess').value); // to the event listener we add an event handler which is the function inside the event listener. and all I did was log to the console to see if we get a number when we put it in the box and click the 'check' button
  console.log(guess, typeof guess);

  // When there is no number guessed
  if (!guess) {
    document.querySelector('.message').textContent = '⛔ No Number!';

    // When player wins
  } else if (guess === secretNum) {
    document.querySelector('.message').textContent = '🎉 Correct Number!';
    document.querySelector('body').style.backgroundColor = '#60b347'; // change the background color to green when the correct number is guessed
    document.querySelector('.number').style.width = '30rem'; // widen the white background of the winning number when guessed correctly

    // when the guess is too high
  } else if (guess > secretNum) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📈 Too High!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '❌ You Lost!!';
      document.querySelector('.score').textContent = 0;
    }

    // when the guess is too low
  } else if (guess < secretNum) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📉 Too Low!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '❌ You Lost!!';
      document.querySelector('.score').textContent = 0;
    }
  }
});
