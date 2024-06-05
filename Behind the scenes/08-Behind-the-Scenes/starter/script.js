'use strict';
//* Hoisting and TheDeadZone
vary1=addnum(2,3)
console.log(vary1)  //? This will give an error as we know that functiin does not support hoisting and we have defined addnum later in the code after using it hence it'll give errors 

function addnum(a,b){
    return a+b;


}





