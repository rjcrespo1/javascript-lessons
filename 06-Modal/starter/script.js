'use strict';
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsShowModal = document.querySelectorAll('.show-modal');
console.log(btnsShowModal);

for (let i = 0; i < btnsShowModal.length; i++)
  console.log(btnsShowModal[i].textContent); // display the current 'show-modal' text content (show modal 1, show modal 2...)
// because there is only one line of code if the loop, we don't need the curly braces {} after the for loop