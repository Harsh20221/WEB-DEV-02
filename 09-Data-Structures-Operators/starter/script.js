'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  names: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};
//* Descinstructing Arrays ( Hetre we are using this method to deconstruct Array )

const arr1=[" Hydrogen", " Helium", " Lithium ", 'Berellium ', "Boron" ]


const [x,y,z]=arr1;
console.log(x,y,z)


const arr2 = [ 'JEE', ' NEET ', 'UPSC','CBSE','NCERT']  //? Here we are deconstructing Arrays using Swap Methods 

/* let [primary , secondary , tertiary]=arr2;
 [secondary , primary ] = [primary , secondary]
console.log([secondary ])


const order = function (starterindex , mainindex){
  return [restaurant.starterMenu[starterindex],this.mainMenu[mainindex]];

}
console.log(order(1,3)); */

/* const { names , openingHours,categories}=restaurant;
console.log(names , openingHours,categories); */

//*  Mutating Variables 

/* let a=111;
let b=117;


const obj={a:2267,b:44567};
({a,b}=obj); //?This is how you'll deconstruct Objects  
console.log(a,b);
 */
///THE SPREAD OPERATOR ////
/* 
const AAR1=[1,2,3,4,54] //! Do not forget to add Const here 
const AAR2=[55,56,57,58,59,...AAR1]
console.log(AAR2) */
///Rest Pattern /////

/* const arr=[1,2 ,...[3,4]]  this is an example of Spread operator */ 
/* console.log(arr) */
const [a,b,...others]=[1,2,3,4,5]  //? This is the example of rest Patterns 
console.log(a,b,...others) //? This is the Ex of Rest Pattern 

const [ pizza,  Donuts, ...otherfood] = [...restaurant.mainMenu , restaurant.starterMenu] //! Do not add items in "" while using rest pattern 

console.log(pizza , Donuts , ...otherfood)