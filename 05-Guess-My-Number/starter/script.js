'use strict';

// document.querySelector('.message'); // '.message' is a part of DOM manipulation and we use the same property from css to access classes and ids.
console.log(document.querySelector('.message').textContent); // textContent will display only the text within that id or class.
document.querySelector('.message').textContent = '🎉 Correct Number!';
console.log(document.querySelector('.message').textContent); // and now it shows the new content which we added in the line above instead of the original html content

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 25;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);