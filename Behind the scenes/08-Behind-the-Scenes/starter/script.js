'use strict';
//* Hoisting and TheDeadZone
vary1=addnum(2,3)
console.log(vary1)  //? This will give an error as we know that functiin does not support hoisting and we have defined addnum later in the code after using it hence it'll give errors 

function addnum(a,b){ //? Till this function is not used it is in the dead zone , We have used this function before it is declared hence it'll give error as currently it is in dead zone , JS knows it exist but is undefined until initialised 
    return a+b;


}





