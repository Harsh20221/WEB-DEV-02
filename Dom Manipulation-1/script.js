    'use strict';  //* Using Dom Manipulation to edit / change various HTML elements demonstration 
/* console.log(document.querySelector('.message').textContent);    

document.querySelector('.message').textContent='🎉Correct Number';

document.querySelector('.score').textContent=22; */
///THE ACTUAL CODE FOR THIS PROJECT STARTS UP FROM HERE /////
const number = Math.trunc(Math.random()*20)+1;
///?Math. random generates a random floating poingt no btw 0 and 1  we are multiplying that no by 20 to get random no btw 0 and 20 and then using Math.trunc to omit the fractional point to get whole numbers  

document.querySelector('.check').addEventListener('click', function (){  //? This Method will display the value of input field after pressing the check button, This function will help to display the value of the text field to the console 
const guess=console.log(document.querySelector('.guess').value)
if (guess==null){
    document.querySelector('.message').textContent="⛔ No Number!!!!!"
}
});