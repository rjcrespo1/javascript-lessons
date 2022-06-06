'use strict';
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsShowModal = document.querySelectorAll('.show-modal');

function showModal() {
  // console.log('modal button clicked'); // added an event listener to respnd to clicks. console log tells us if the clicks are working
  modal.classList.remove('hidden'); // here we just used the variable "modal" and are accessing its class list and removing the hidden class. in this case we dpn't need to add the "." before the class name
  overlay.classList.remove('hidden');
}

function closeModal() {
  //   console.log('button clicked');
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
} // this function is simply to close out the modal window

for (let i = 0; i < btnsShowModal.length; i++)
  // console.log(btnsShowModal[i].textContent); // display the current 'show-modal' text content (show modal 1, show modal 2...)
  btnsShowModal[i].addEventListener('click', showModal); // because there is only one line of code if the loop, we don't need the curly braces {} after the for loop

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);
