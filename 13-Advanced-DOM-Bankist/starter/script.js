'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn=>btn.addEventListener('click',openModal))

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
const header = document.querySelector('.header');
//* HERE we are using different Dom elements selection methods
document.getElementById('section--1'); //?? This is a Dom selection method to get element by ID
const allButtons=document.getElementsByTagName('button')
//? This is a Dom selection Method to get element by TagName
/*console.log(allButtons)*/; //? This'll give a HTML Collection of all Buttons

//# This method below helps to create the cookie popup
const message = document.createElement('div')
message.classList.add('cookie-message');
message.innerHTML = 'We Use Cookies for improved functionality and Analytics.  , <button class  ="btn  btn--close-cookie">Got it ! </button> ';
header.prepend(message);
header.append(message);

///# This method below is responsible for clearing Cookie Message
document.querySelector('.btn--close-cookie').addEventListener('click',function(){
  message.remove()
})

////////////Below Here we Start the Styles Section /////////




message.style.backgroundColor='#37383d'
message.style.width='120%';
/*console.log(message.style.color); *////? This'll give us the message color
/*console.log(message.style.backgroundColor)*/ //? This'll give us the message bacground color
/*console.log(getComputedStyle(message).color)
console.log(getComputedStyle(message).height)*/


message.style.height= Number.parseFloat(getComputedStyle(message).height,10)+30+'px';  //? This'll give us the message height , the 10 is the base of the number by base we mean the radix of the number
//?  .parseFloat() is used to convert a string to a number then we add 30 to it and add 'px' to it to make it a string because the height property is a string
console.log(message.style.height);