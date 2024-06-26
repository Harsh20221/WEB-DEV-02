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
/* const restaurant = {
  names: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
openingHours,

}; */
////for ( const item of restaurant.starterMenu) console.log(item);
/* for (const item of restaurant.starterMenu.entries()){
  console.log(`${item[0]+1}:${item[1]}`);
} */
//* Enhanced Object Literals 
const weekdays =['SUNDAY','MONDAY' , 'TUESDAY','WEDNESDAY','THURSDAY','FRIDAY','SATURDAY']

const openingHours = {
  [weekdays[0]]: {  //? Here we have written weekdays[0] instead of sunday , this is how you'll use the enhanced object literals
    open: 12, 
    close: 22,
  },
 [weekdays[1,5]]: {
    open: 11,
    close: 23,
  },
  [weekdays[6]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};
const restaurant = {
  names: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
openingHours, //? This is the example of enhansed object literals
};


//* Optional Chaining
/* for ( const day of weekdays){
  const open = restaurant.openingHours[day]?.open ?? 'closed';
  console.log(`on ${day}, we open at ${open}`)
} */

//#Another example of optional chaining 

/* const users = [{name:"Mariam", email:"Mariamwebster@web.com"}]

console.log(users[0]?.name ?? "User not found ") //? This'll display the user name if it exists or will display user not found if it does not 
 */

///* SET DATA STRUCTURE (ONLY HAS UNIQUE VALUES)
/* 
const data = new Set(['Data','Willliam Riker ','Jean Luc Pickard ','Jean Luc pickard ']); /// Sets are enclosed by () (Round Brackets) and the Actual elements are enclosed by []
console.log(data);
data.delete('Data'); //? This'll delete the mentioned element from set 
data.add('Counsellor Troi '); ///? We can add individual elements to the set like this 
console.log(data);
console.log(data.has('Worf')); //? This is to  check if the afterentioned element is inside the set 

const staff= ['agent-1','b','xo=7','omega97','agent-1']
const uniquestaff= [...new Set(staff)];
console.log(uniquestaff)
 */

//* MAP Data Structure to store in the form of Key Value Pairs 

/* const cars = new Map() ;

cars.set(1,'Aventador SVJ ');
cars.set(2,'Hurracan');
cars.set(3,'Lotus Evija ');
cars.set(4,'Cadilac Escillade');
cars.set(5,'Lincoln Navigator');
cars.set('Special','Bugatti La Noiture Voire ').set(6,'Aston Martin Vulcan')
cars.delete(1);

console.log(cars.get(3))  //! do not use [] with the get method
console.log(cars) 

 */
///* String Operations 
/* 
const airlines = ['Lufthansa', 'AirIndia', 'Indigo ']
const plane =['A320','B737','A330']
console.log(plane.length);
console.log(airlines[0].indexOf('t'))
console.log(airlines[1].lastIndexOf('i'));//?The lastIndexOf() method is used to find the last occurrence of a specified value in an array or a string. In this case, it's looking for the last occurrence of the string 'r' ,The method returns the index at which the last occurrence of the specified value is found. If the value is not found, it returns -1.
/* console.log(airlines[0].slice(1,-1)) */
/* console.log(airlines[1].slice(-1)) */
 

/* const passenger='Jonas'
const lower = passenger.toLowerCase();
console.log(lower);
const email=' jonas@78907.com'
console.log(email.trim())  //? trim removes whitespaces from both ends of the string , but does not remove whitespaces from between the string 
const price ='2000€'
const newprice=price.replace('€','$') */
/* console.log(newprice) //? This'll replace the  €  with $ using replace function 
const Boardingmessage = ' All Passengers please report to your Nearest Boarding Door , for Passengers with Business Class or First Class Boarding pass , Please report to your nearest Priority Boarding Door  '
console.log(Boardingmessage.replace(/Door/g,'Gate')); //? This will work similarly to replaceAll , 
//! Do not forget to use add ; at the termination of the statement   */
////console.log(Boardingmessage.replaceAll('Door','Gate'))
/* const ifincludes = Boardingmessage.includes('report');
console.log(ifincludes)
 */

/*  const funcap=function(name){
  const names = name.split(" ");
  const finalname =[];
  for ( const na of names ) {
    finalname.push(na[0] + na.slice(1));

  }

  console.log(finalname.join(''));
}
 
 
funcap('jessics von man ') 

 */


const message= 'Go to gate 54'
console.log(message.padStart(20,'*').padEnd(25,'*')) //! If you mention the length of pad.Start and padEnd less than the original string length so the original string will just be printed rather than with padstart and padend 

/* console.log(message.repeat(5)) */