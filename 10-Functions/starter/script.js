'use strict';


/* const   flightdetals = function(name ,passport, aircraft='A320' , airlines='Air India'  ){ ///! Make sure to write Default parameters at last  in this example's context do not write passport after default parameter aircraft or airlines 
   const finalonboarding={
    name , aircraft , airlines,passport 
   } 
    
    console.log( finalonboarding)
} */

/* flightdetals('Harsh',122340) */

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

transformer('Sheila is a Good Looking Women',oneWord); //!! DO not pass the