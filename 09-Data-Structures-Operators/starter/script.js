'use strict';

// Data needed for a later exercise
/* const flights =
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

/* 
const [x,y,z]=arr1;
console.log(x,y,z) */


/* const arr2 = [ 'JEE', ' NEET ', 'UPSC','CBSE','NCERT'] */  //? Here we are deconstructing Arrays using Swap Methods 

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
//* * console.log(arr) */
/* const [a,b,...others]=[1,2,3,4,5]  //? This is the example of rest Patterns 
/* console.log(a,b,...others) //? This is the Ex of Rest Pattern  */

/* const [ pizza,  Donuts, ...otherfood] = [...restaurant.mainMenu , restaurant.starterMenu]  *///! Do not add items in "" while using rest pattern  

/* console.log(pizza , Donuts , ...otherfood) */


/* const add =  function Number(...numbers) {
let sum=0;
for ( let i=0 ; i<numbers.length;i++){
sum+=numbers[i];  //? This is how you'll create the add logic using rest operators 
}
return sum;
 } */

/* console.log( add(2,5)) */


///* Operator short circuiting using and && and or ||

/* console.log(0 || 29) //? or operator will display the first truthsy value that is 29 in this case 


console.log(0&&29) //? and operator will display the first falsy value that it will encounter  */


//* Nullish Operator In Javascript 

/* restaurant.openingHours=0; //? This is how you'll set the value of the object to 0
const closingtime = restaurant.openingHours ?? 10;  *///?The nullish operator will only display the value if the value is null or undefined , nullish operatar unlike or will display the value if the value is 0
/* console.log(closingtime) //? This is how you'll use the nullish operator in javascript */


///*Local Assignment operators 





/* const rest1 = { 
  name:'Classico Italiano', 
  numGuests:23,

}

const rest2 = {
  name:'La Casa Italiano', 
  numGuests:23,
  owner:'Francesco' ,
}

rest2.numGuests ??= 10;  */ ///?This is called the nullish assignment operator , it will only set the value if the value is null or undefined , The output will be 23 as the value is already set to 23, if it was 0 then the output would be 10 as the value would be set to 10



/* restaurant.numGuests=0; //? This is how you'll set the value of the object to 0
rest1.numGuests
 = rest1.numGuests|| 10; //?This is the traditional way of setting the value of the object 

 rest1.numGuests ||= 10; //? This is the new way of setting the value of the object using the local assignment operator , this will only set the value if the value is falsy , if the value is truthsy then it will not set the value


 rest2.owner &&= 'Rahul'; //?This is the and assignment operator , it will only set the value if the value is truthsy , if the value is falsy then it will not set the value
 console.log(rest2.owner)  
 ////* CHALLANGE 
 */
/*  Suppose we get data from a web service about a certain game (below). In this challenge we're gonna work with the data. So here are your tasks:
 1. Create one player array for each team (variables 'players1' and 'players2')
 2. The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players
 3. Create an array 'allPlayers' containing all players of both teams (22 players)
 4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
 5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
 6. Write a function ('printGoals') that receives an arbitrary number of player names (NOT an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)
 7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, WITHOUT using an if/else statement or the ternary operator.
 
 TEST DATA FOR 6: Use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. Then, call the function again with players from game.scored
 
 GOOD LUCK 😀
  */
/* 
 const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

 const players1 = [game.players[0]]
const players2 = [game.players[1]] 

const gk = players1[0][0]; ///////////THIS IS HOW YOU ACCESS A NESTED ARRAY ITEM ///
const fieldplayers=players1[0].slice[1,11]

console.log(fieldplayers); */



//* USING FOR OF LOOP IN JAVASCRIPT ///////
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

////for ( const item of restaurant.starterMenu) console.log(item);
for (const item of restaurant.starterMenu.entries()){
  console.log(`${item[0]+1}:${item[1]}`);
}
