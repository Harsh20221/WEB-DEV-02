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
message.style.height= Number.parseFloat(getComputedStyle(message).height,10)+30+'px';
//? This'll give us the message height , the 10 is the base of the number by base we mean the radix of the number
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
///* Below this point it Contains the code for Smooth Scrolling using the old method
/*const Buttonscrollto = document.querySelector('.btn--scroll-to')
const section1 = document.querySelector('#section--1') //?we are selecting  the Html elements here*/
/////When We'll Click Learn More in the webpage  then this will give us the Dom Rectangle Details
/*Buttonscrollto.addEventListener('click',function(e){
  const s1coords = section1.getBoundingClientRect();*/
/*  console.log(s1coords)
  console.log(e.target.getBoundingClientRect());
console.log('Current scroll (X/Y)',window.scrollX,scrollY);  //?  This'll list the current x and y coordinated when we click learn more in the webpage
  console.log('height/width viewport ', document.documentElement.clientHeight,document.documentElement.clientWidth)*/
  /////SCROLLING ////  When you'll click readmore then you'll be smoothly scrolled down to your desired section where you want to draw the user
/*
  window.scrollTo({left : s1coords.left + window.scrollX,
   top:  s1coords.top + window.scrollY,
  behavior:'smooth'} ///? Make sure to assign the correct behaviour for smooth scrolling
   )

});
*/

//# This is the NEW Method to help us make the scrolling , This works only using single line code
  const section1 = document.querySelector('#section--1') //?we are selecting  the Html elements here*/
section1.scrollIntoView({behavior:"smooth"})


//* Practicing Event Listeners
/*
const h1= document.querySelector('h1');
  const alerth=function (e){alert('Hello This is Te Example of Event Listener By Harsh ')};
  h1.addEventListener('mouseenter',alerth); //? By mouse enter we mean by pressing enter key
setTimeout(()=>h1.removeEventListener('mouseenter',alerth),3000)
*/

//*Experimenting with Nav Link colors and giving Random colors to the Nav Links
/////This Function BELOW  Will generate Random Numbers Whenever we will click any Link Element

const randint  = (min, max) => Math.floor(Math.random()*(max-min+1)+min);
const randomcolor= () => `rgb(${randint(0,255)}, ${randint(0,255)},${randint(0,255)}  )`


/////This is the one that will Manipulate the Event handlers
document.querySelector('.nav__link').addEventListener('click',function(e){
  this.style.backgroundColor=randomcolor();

})

document.querySelector('.nav').addEventListener('click',function(e){
  this.style.backgroundColor=randomcolor();
})

document.querySelector('.nav__links').addEventListener('click',function(e){
  this.style.backgroundColor=randomcolor();
})

///# Here We are Implimenting Smooth Scroll for Nav Bar click Scroll

document.querySelector('.nav__links').addEventListener('click',function(e) {
  e.preventDefault();
  if(e.target.classList.contains('nav_link')){
    const  id = e.target.getAttribute('href')
    document.querySelector(id).scrollIntoView({behavior:'smooth'});
  }
});

///////Going towards Children
const h1 = document.querySelector('h1')
/*console.log(h1.querySelectorAll('.highlight'))
console.log(h1.childNodes);
console.log(h1.children);*/
h1.firstElementChild.style.color='turquoise'
h1.lastElementChild.style.color='maroon'
///// Going Towards Parents
/*console.log(h1.parentNode)
console.log(h1.parentElement)*/
h1.closest('.header').style.background ='var(--gradient secondary )';
h1.closest('h1').style.background='var (--gradient primary )'
///? The selected code snippet demonstrates how to dynamically change the background
// ?styles of elements using JavaScript's closest method. This method is used to find the nearest ancestor of a specified element
// ?that matches a given selector
/////Going Sideways Siblings

/*
console.log( h1.previousElementSibling);
console.log(h1.nextElementSibling);
console.log(h1.nextSibling);
console.log(h1.previousSibling);*/
//# Implimenting Tabs
/////QuerySelector for the Tabs
const tabs =  document.querySelectorAll('.operations__tab') ///! Use Queryselectorall Here and not just Queryselector
///?  The selected code snippet is designed to implement tab functionality within a web page,
//? allowing users to switch between different content areas by clicking on tabs.
// ?This functionality is commonly used in user interfaces to organize content efficiently and make it easily accessible
//? without navigating to different pages.  Initially, the code selects all elements with the class .operations__tab using document.querySelectorAll,
// ?storing them in the variable tabs. This method returns a NodeList of all matching elements,
//? enabling iteration and manipulation of each tab.







const tabscontainer = document.querySelector('.operations__tab-container')
const tabscontent= document.querySelectorAll('.operations__content')
///? An event listener is added to the tabscontainer. This listener responds to click events, using event delegation to handle clicks on individual tabs efficiently. When a click event occurs,
// ?it uses e.target.closest('.operations__tab') to find the closest ancestor of the clicked element that matches the .operations__tab selector.
// ?This method ensures that the event is handled correctly even if the click is not directly on a tab but on a child element within a tab.


////Adding Eventlistener for the Function
tabscontainer.addEventListener('click',function(e) { ///! MAKE SURE TO add Queryselector in tabs.container not tabs.content
    const clicked = e.target.closest('.operations__tab');
    //????   In JavaScript, .target is a property of an event object that can be accessed within an event handler.
    //? It refers to the element that triggered the event.
    //? This property is particularly useful in scenarios involving event delegation, where a single event listener is attached to a parent element rather than individual child elements.
    //? By using .target, you can determine which child element initiated the event and handle it accordingly.

    if (!clicked)
      return;
    tabs.forEach(t => t.classList.remove('operations__tab--active'));
    ///?  classList is a read-only property that returns a live DOMTokenList collection of the class attributes of the element.
    // ?This property provides methods to add, remove, and toggle CSS classes on an element,
    // ?as well as to check whether a particular class exists on the element.
  //? some of the methods provided by classList:
    ///* add(className): Adds a class to an element's list of classes. If the class already exists in the list, it will not add it again.
    ///* remove(className): Removes a class from an element's list of classes. If the class does not exist, it will do nothing.
    ///* item(index): Returns the class name by its index in the list.
    ///*toggle(className, [force]): Toggles a class name in an element's list of classes. If the second argument is true, the class is added; if false, the class is removed. If no second argument is provided, the class is added if it does not exist and removed if it does.
    //*contains(className): Checks if a class name exists in an element's list of classes. Returns true if it exists, otherwise false.
    tabscontent.forEach(c=>c.classList.remove('operations__content--active'))
    ////Activate Tab
    clicked.classList.add('operations__tab--active');
    ////Activate Content AREA
document.querySelector(`.operations__content--${clicked.dataset.tab}`).classList.add('operations__content--active');///!1 Do not use single quotes , use `` backslash here
  }
);

//##### Code for Menu Fade Animation  ///////
const nav = document.querySelector('.nav');
const handlehover = function(e){
  if(e.target.classList.contains('nav__link')){
    const link = e.target;
    const siblings = link.closest('.nav').querySelectorAll('.nav__link');
    const logo = link.closest('.nav').querySelector('img');
    siblings.forEach(el=>{
      if (el!==link){
        el.style.opacity=this;
      }
    });
logo.style.opacity=this;
  }
}
nav.addEventListener('mouseover',handlehover.bind(0.5)); //? opacity: 1 means the object will be fully visible, with no transparency.
//?opacity: 0.5 means the object will be semi-transparent, making it less visible than when opacity is 1.
// ?It will appear lighter or "more see-through" compared to its appearance at full opacity.
nav.addEventListener('mouseout',handlehover.bind(1));


///# This Code Below is responsible for Sticky Top Navigation Bar With Bankist LOGO  which gets more transparent as we move lower and sticks
/*const header = document.querySelector('.header');*/ //! Do  not decalre the header Twice
const stickyNav = function(entries ){
  const[entry ]=entries ;
  if(!entry.isIntersecting) nav.classList.add('sticky');
  else nav.classList.remove('sticky')

}

const headerObserver = new IntersectionObserver(stickyNav,{
  root:null,threshold:0,
});

headerObserver.observe(header)

//# Here we are implementing a feature hat will reveal ui elements as we move down

const allSections = document.querySelectorAll('.section');

const revealsection = function(entries,observer){
  const[entry]=entries;
  entry.target.classList.remove('section--hidden');
};
const  sectionObserver =  new IntersectionObserver(revealsection,{root:null,threshold:0.15});




allSections.forEach(function(section){
  sectionObserver.observe(section);
  section.classList.add('section--hidden');
});


///# THIS CODE HERE IS RESPONSIBLE FOR  LAZY LOADING IMAGES EFFECT WHICH LOADS IMAGES AS WE SCROLL DOWN
const imageTargets = document.querySelectorAll('img[data-src]')

const loadimages = function( entries , observer ){
  const [entry] = entries ;  ///? The purpose of destructuring entries with const [entry] = entries;
  // ?is to extract the first element from the entries array
  //? and assign it to a new variable named entry. This is particularly useful when
  //? you are only interested in the first item from the array,
  // ?which is common with IntersectionObserver callbacks when observing a single item.
  if(!entry.isIntersecting) return;  ///? The purpose of this line is to immediately exit the callback function
  // ?if the target element is not intersecting with the viewport.
  // ?This means that any code following this line will only execute
  // ?for elements that are currently visible or partially visible in the viewport.
  // ?This behavior is particularly useful for implementing lazy loading of images or
  // ?revealing elements with animations only when they come into the user's view,
  // ?thereby improving the performance and user experience of a webpage
  /////Replace Source Img to High Quality image from Low Quality Image
  entry.target.src=entry.target.dataset.src;
  entry.target.classList.remove('lazy-img');
  entry.target.addEventListener('load', function( ) {
    entry.target.classList.remove('lazy-img')
  })
};

//?The IntersectionObserver is configured with root:null and threshold:0,
//? meaning it will observe changes in the intersection relative to the viewport
// ?and trigger as soon as even one pixel of the target is visible.
  const imageObserver= new IntersectionObserver(loadimages,{
root:null,
    threshold:0
  });

  ///? Each image that should be lazily loaded is then observed by the IntersectionObserver using
// ?imageObserver.observe(img);. This setup ensures that the loadimages function is called at the right moment for each image,
//? optimizing resource loading and improving the user experience
imageTargets.forEach(img=>imageObserver.observe(img));

///# Here We are Designing the Function of Slider COMPONENT of Customer Reviews at the last of the page


const  slides = document.querySelectorAll('.slide')

const btnLeft = document.querySelector('.slider__btn--left')
const btnRight = document.querySelector('.slider__btn--right')

let curslide =0; ///? By This we Denote the current slide
const maxslide= slides.length;  ///? By this we denote the total no of Slides

/*const dotContainer = document.querySelector('.dots',function(e){  ///!!!! This part of code is Currently Wrecked
  if(e.target.classList.contains('dots_dot')){
    const {slide} = e.target.dataset.slide;
    goToSlide(slide)
    activateDot(slide);
  }
})*/






const goToSlide=function(slide){
  slides.forEach(
    (s,i)=> (s.style.transform=`translateX(${100*(i-slide)}%`)
    //? Here we aare moving the current slide towards left ot right in the screen when the user presses left or right Arrow Button
  );
};

goToSlide(0); //? This is to Start the  slider from 0 onwards

/////Next Slide function

const nextslide = function() {
  if (curslide === maxslide - 1) {

    curslide = 0; ///? This is to reset the slide sequence once the user reaches the end slide
  } else {
    curslide++;
  }
  goToSlide(curslide); //? This  executes the goToSlide function responsible for moving the slides
  /*  activateDot(curslide)*/  //!!!This part of code is Currently Wrecked
}
//////Previous Slide Function

const prevSlide=function(){

  curslide--;
  goToSlide(curslide)
/*  activateDot(curslide)*/ ///!! This part of code is currently wrecked

}

btnRight.addEventListener('click',nextslide)
btnLeft.addEventListener('click',prevSlide)

///!!!!! Below  code is Currently Wrecked and hence isolated from The Current Working Code to prevent problems
//* Below This Contains logic for dots Navigation for the above Slider Component , This  has a Seperate
///* Logic but it is also connected to the above Class

/*

const createDots = function(){
  slides.forEach(function(_,i){
    dotContainer.insertAdjacentElement('beforeend',`<button class="dots__dot "
    data-slide="${i}"></button>`)
  })
}
createDots(0);

const activateDot=function(slide){
  document.querySelectorAll('.dots_dot').forEach(dot=>dot.classList.remove('dots__dot--active'));
  document.querySelector(`.dots__dot[data-slide =" ${slide}"]`).classList.add(`dots__dot--active`)
}
activateDot(0)


  ////// Adding Event Listeners on Both Next Slide and Previous Slide




*/




