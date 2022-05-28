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

document.querySelector('.check').addEventListener('click', function() { // we select the button which has the class name 'check' then added an event listener
    console.log(document.querySelector('.guess').value); // to the event listener we add an event handler which is the function inside the event listener. and all I did was log to the console to see if we get a number when we put it in the box and click the 'check' button
})