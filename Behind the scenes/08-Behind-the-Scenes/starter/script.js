'use strict';
//* Hoisting and TheDeadZone
/* vary1=addnum(2,3)
console.log(vary1)  //? This will give an error as we know that functiin does not support hoisting and we have defined addnum later in the code after using it hence it'll give errors 

function addnum(a,b){ //? Till this function is not used it is in the dead zone , We have used this function before it is declared hence it'll give error as currently it is in dead zone , JS knows it exist but is undefined until initialised 
    return a+b;
}
 */
//*** This Keyword in js  */


/* const matilda = {  //? Do not forget this = while declaring the object 
year: 1991, 
calcage : function (){
    console.log(this);
    console.log(2077-this.year);
}
};

const jonas = {
    year:1992
}

jonas.calcage()
 */


///# Primitives and referances in  Javascript 
//* Primitives 


let lastname="williams"
let oldlastname=lastname;
lastname="Davis"
console.log(lastname,oldlastname)

//* Referance 
const jessica = {
    firstname:"Jessica",
lastname:"williams",
age :27
}


const  jessicaMarried=jessica;

jessicaMarried.lastname="Douglas";
console.log(jessicaMarried);
















