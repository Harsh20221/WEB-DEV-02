    'use strict';  //* Using Dom Manipulation to edit / change various HTML elements demonstration 
/* console.log(document.querySelector('.message').textContent);    

document.querySelector('.message').textContent='🎉Correct Number';

document.querySelector('.score').textContent=22; */
///THE ACTUAL CODE FOR THIS PROJECT STARTS UP FROM HERE /////
const secretNumber = Math.trunc(Math.random()*20)+1;
///?Math. random generates a random floating poingt no btw 0 and 1  we are multiplying that no by 20 to get random no btw 0 and 20 and then using Math.trunc to omit the fractional point to get whole numbers  


let score = 20;  //!!! Do not define this score variable inside the event listener block else it'll reset again and again to 20 and the program will not work 
let highscore=0;

document.querySelector('.check').addEventListener('click', function (){  //? This Method will display the value of input field after pressing the check button, This function will help to display the value of the text field to the console 
    const guess=Number(document.querySelector('.guess').value);   //! Do not put this Statement outside of the loop , This Statement is responsible for storing our guess ( Input Number S)


if (guess==null){
    document.querySelector('.message').textContent="⛔ No Number!!!!!"
}

else if (guess === secretNumber){
    document.querySelector('.message').textContent='🎉 Correct Number';
    document.querySelector('body').style.backgroundColor='#60b307' //? This'll change the background color of the screen to green after selecting correct answer  ( This is used to change the CSS elements )
    document.querySelector('.number').style.width='30rem'
    document.querySelector('.number').textContent=secretNumber; //?. The secret no is shown to the useer upon losing the game or guessing it right 
    if (score>highscore){
        document.querySelector('.highscore').textContent=score;
    }
}

else if(guess!=secretNumber) { //* This is the same code as below for telling the user high or low guess but done using Terinary operators 
    if (score>1){
        document.querySelector('.message').textContent=guess>secretNumber?'📈 Too High!' :'📉 Too Low ';
        score--;
        document.querySelector('.score').textContent=score;
    }
    else 
    document.querySelector('.message').textContent='💥 You have lost the game TRY again '
    document.querySelector('.number').textContent=secretNumber; //?. The secret no is shown to the useer upon losing the game or guessing it right 
}




/* 







else if(guess>secretNumber) {
 if(score>0){
 document.querySelector('.message').textContent='📈 Too High';
score--;
document.querySelector('.score').textContent=score; //? Here we are assigning thenscore that is displayed in the screen created in the html file to the score variable we have created here 

}
    else {
        document.querySelector('.message').textContent='💥 You have lost the game TRY again '
        document.querySelector('.number').textContent=secretNumber; //?. The secret no is shown to the useer upon losing the game or guessing it right 
    }

}
else if ( guess < secretNumber){
    if (score>0){
    document.querySelector('.message').textContent='📉 Too Low '
    score -- ;
    document.querySelector('.score').textContent=score; ///! Very imp - if you want to access any html class then do not forget to write like this ---- '.score' , it means do not forget to use dot before listing the required parameter 
}

else {
    document.querySelector('.message').textContent='💥 You have lost the game TRY again '
    document.querySelector('.number').textContent=secretNumber; //?. The secret no is shown to the useer upon losing the game or guessing it right 
}

} */
});
//* Thic code below will reset the game upon selecting the right no 
document.querySelector('.again').addEventListener('click', function () {
 
    document.querySelector('.message').textContent='Start guessing...'
    document.querySelector('.number').textContent='?'
    document.querySelector('body').style.backgroundColor='#222'
    document.querySelector('.guess').value=null;
    score=20;
     document.querySelector('.score').textContent=score //! Make sure to write the score as . score , do not leave the dot or else the code will not work , also just reassigning the score to 20 will not work , we need to change the score element in the webpage to display the old score so for that this line is important 
    
    })
    