'use strict';


const   flightdetals = function(name ,passport, aircraft='A320' , airlines='Air India'  ){ ///! Make sure to write Default parameters at last  in this example's context do not write passport after default parameter aircraft or airlines 
   const finalonboarding={
    name , aircraft , airlines,passport 
   } 
    
    console.log( finalonboarding)
}

flightdetals('Harsh',122340)