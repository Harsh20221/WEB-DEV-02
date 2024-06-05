'use strict';

const modal=document.querySelector('.modal');
const overlay=document.querySelector('.overlay');
const btnCloseModal=document.querySelector('.close-modal');

const btnOpenModal = document.querySelectorAll('.show-modal');
for( let i=0 ; i<btnOpenModal.length;i++){
   btnCloseModal[i].addEventListener('click',function (){
    console.log('BUTTON CLICKED ');
    modal.classList.remove('hidden');
   })
}

