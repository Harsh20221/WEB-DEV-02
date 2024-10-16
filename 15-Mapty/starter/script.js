'use strict';

// prettier-ignore
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const form = document.querySelector('.form');
const containerWorkouts = document.querySelector('.workouts');
const inputType = document.querySelector('.form__input--type');
const inputDistance = document.querySelector('.form__input--distance');
const inputDuration = document.querySelector('.form__input--duration');
const inputCadence = document.querySelector('.form__input--cadence');
const inputElevation = document.querySelector('.form__input--elevation');
var map ;
let mapEvent;
if(navigator.geolocation){
navigator.geolocation.getCurrentPosition(function(Position){
    const {latitude}=Position.coords; ///? tHISN IS HOW you can access the latitude and longitude , here we 
    //?are using a special method to access , instead of storing their values in a variable we use destructuring to store {variablename}= position.coords.latitude 
    ///?but instead of writing coords.latitude we just assign a variable with that property
     //?and store in inside {} which means we wanna accees latitude property from coords and store it inside a variable 
    const {longitude}=Position.coords
    console.log(`https://www.google.co.in/maps/@${latitude},${longitude}`) /// This is how you Use String literals in JS and use gmaps links with your own lat and long 
    console.log(latitude,longitude);
    var coords = [latitude,longitude];

///////LEAFLET INITIALISATION CODE BELOW ///////
map = L.map('map').setView(coords, 13); //? in this line the .map after L represents the name of the element  in our html where we wanna put our map 
///???? the oyher parameter besides the coords in .setView above is used for default zoom level of map  
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {  ////## instead of openstreetmap.org you can use openstreetmap.fr/hot or url to change map styles
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map); 

///* EventListener code  Below after Map is Clicked by User
map.on('click',function(mapE){
    let mapEvent=mapE; //!!! Assign mapEvent  to a Global Variable bECAUSE We need it in form's Event Listener 
    form.classList.remove('hidden');
    inputDistance.focus();
console.log(mapEvent)

}) 

/// ENDS

},function(){alert("Could Not Get Your Position , Please Try Again ")}); ///? This is how you can get the geoloaction , It has 2 callbacks for success and for error and we can define 
///? 2 functions in it for sucess and error 

form.addEventListener('submit',function(e){
    e.preventDefault; //? This Will Prevent The Default Behaviour 
inputDistance.value=inputDuration.value=inputCadence.value=inputElevation.value=' ';
    ////* Display Marker
    const {lat,lng}=mapEvent.latlng;
L.marker([lat,lng]).addTo(map) ////# Code to add a Custom Popup , the latlng method stores the data for the latitude and longitude of the popup , this code is copied from leaflet website and modifid
    .bindPopup(L.popup({maxWidth:250,minWidth:100,autoClose:false,closeOnClick:false,className:'running-popup',})).setPopupContent('Workout')
    .openPopup();
})


}