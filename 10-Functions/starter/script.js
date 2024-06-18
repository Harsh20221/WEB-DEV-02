'use strict';


/* const   flightdetals = function(name ,passport, aircraft='A320' , airlines='Air India'  ){ ///! Make sure to write Default parameters at last  in this example's context do not write passport after default parameter aircraft or airlines 
   const finalonboarding={
    name , aircraft , airlines,passport 
   } 
    
    console.log( finalonboarding)
} */

/* flightdetals('Harsh',122340) */

/*
const oneWord = function (str){
    return str.replace(/ /g,'').toLowerCase();
};

const upscale = function (str){
    const [first , ...others] = str.split('');
    return [first.toUpperCase(),...others].join(' ');
};


const transformer = function(str , fn){
    console.log(`original string :: ${str}`);
    console.log(`transformed string ::${fn(str)}`);
    console.log(`transformed by :: ${fn.name}`)
}

transformer('Sheila is a Good Looking Women',oneWord); //!! DO not pass the function here like this oneWord() ,
////! here we'll not add () with the function name
console.log(transformer("Darthvader is Coming ",upscale));*/
  ////**** FUNCTIONAL PROGRAMMING -- Functions returning Functions  //////
/*
  const greet = function(greeting){
    return function(name){
      console.log(`${greeting} ${name}`)
    }
  }

greet('Hello')('Jonas');
const greeter=  greet('hey');
greeter('Lua');
greeter('Laura');
*/

///comm-- Using Arrow Functions , trying the same thing

/*
const greetothers = greeting => name => console.log(`${greeting} ${name}`)

 greetothers('hello')('Viola')
*/



const lufthansa ={
  airline:'Lufthansa',
  iatacode:'LH',
  bookings: [],
 book(flightnum, name){
return console.log(`passenger ${name} has booked a Ticket with ${this.airline} having code ${this.iatacode} on flightnumber ${flightnum}`)
  }
}
const Eurowings = {
  airline:'Eurowings',
  iatacode: 'EW',
  bookings: []

}

const book=lufthansa.book; //! Do not add () after book as it will lead to an error 

/*book(2234,'Harry Potter')*/ //? This'll point to undefined as book will act as a normal function call and then this keyword in book function will point to  undefined
  ///// This will create an error and to help solve this error we use the call and apply methods
const booklut = book.bind(lufthansa);

booklut(124890,'Mirabel');

///** Immediately Invoked Functions  */

(function(){
  console.log('This will never run again')
})(); //? This is an IIFE(Immediately Invokeed Function) function and will run only once and will never run again




