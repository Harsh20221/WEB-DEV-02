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
/*console.log(allButtons)*/; //? This'll give an HTML Collection of all Buttons

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
/*console.log(message.style.height);*/
////Attributes
const logo = document.querySelector('.nav__logo') //?Here we are using queryselector to select an element
console.log(logo.alt);  //? The next three lines are logging the alt, src, and className properties of the logo element to the console.
// ?The alt property is typically used in <img> elements to specify an alternate text for an image, if the image cannot be displayed.
// ?The src property is used to specify the source URL of an image.
//? The className property returns the class name(s) of an element.
/*console.log(logo.src);
console.log(logo.className)*/
///* set and get Attribute Methods for particular selected s elements of Dom
/*console.log(logo.getAttribute('designer'))*/

logo.setAttribute('company','Bankist') //? This will change the attribute value of the company to Bankist

////// Data Attributes
/*console.log(logo.dataset.versionNumber ) *///? This''ll lo the current version of the logo in the console ,
//?// We have defined this property in the logo attribute in the HTML file
//////Classes

logo.classList.add('c','j');
logo.classList.remove('c','j');
logo.classList.toggle('c');
/*console.log(logo.classList.contains('c'));*/ //? This'll Display true
///# Below this point it Contains the code for Smooth Scrolling
const Buttonscrollto = document.querySelector('.btn--scroll-to')
const section1 = document.querySelector('#section--1') //?we are selecting  the Html elements here
/////When We'll Click Learn More in the webpage  then this will give us the Dom Rectangle Details
Buttonscrollto.addEventListener('click',function(e){
  const s1coords = section1.getBoundingClientRect();
/*  console.log(s1coords)
  console.log(e.target.getBoundingClientRect());
console.log('Current scroll (X/Y)',window.scrollX,scrollY);  //?  This'll list the current x and y coordinated when we click learn more in the webpage
  console.log('height/width viewport ', document.documentElement.clientHeight,document.documentElement.clientWidth)*/
  /////SCROLLING ////
  window.scrollTo({left : s1coords.left + window.scrollX,
   top:  s1coords.top + window.scrollY})  ;
});





