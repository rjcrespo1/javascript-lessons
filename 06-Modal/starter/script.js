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

// function for closing the modal with the "escape" key
document.addEventListener('keydown', function (e) {
  // we give the function a parameter of "e"(event) because keydown by itself doesn't specify a single key. It registers all keys being pressed. And as this event occurs, JS calls this function with the event object as an argument
  // console.log('a key was pressed');
  // since we have the event listener on a document, it is global. Meaning that it is listening for this event everywhere
  // We are not calling this function, we only define it. ==> ("HEY JAVASCRIPT, CALL THIS FUNCTION WHEN A KEYDOWN EVENT HAPPENS. WHEN YOU DO SO, PASS IN THE EVENT OBJECT AS AN ARGUMENT")
  //   console.log(e.key);

  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    // if the pressed key is "escape" AND if the modal class DOES NOT contain the class "hidden"
    console.log('=== esc was pressed ===');
    // if (!modal.classList.contains('hidden')) {
    closeModal();
    // }
  }
});
