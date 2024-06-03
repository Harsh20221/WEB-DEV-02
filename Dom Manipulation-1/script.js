    'use strict';  //* Using Dom Manipulation to edit / change various HTML elements demonstration 
/* console.log(document.querySelector('.message').textContent);    

document.querySelector('.message').textContent='🎉Correct Number';

document.querySelector('.score').textContent=22; */
///THE ACTUAL CODE FOR THIS PROJECT STARTS UP FROM HERE /////

document.querySelector('.check').addEventListener('click', function (){  //? This Method will display the value of input field after pressing the check button, This function will help to display the value of the text field to the console 
console.log(document.querySelector('.guess').value)
});