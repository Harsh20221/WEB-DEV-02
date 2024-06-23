'use strict';
/////* This code Contains code for DOM MANIPULATION FROM LINE 76 ONWARDS S//*
/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP 
// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

const displayMovements= function(movements){
  movements.forEach(function(mov,i) { //? Here mov stands for movement and i stands for Index 
    const type=mov>0 ? 'deposit' : 'withdrawal' 
  const html= `  <div class="movements__row">
    <div class="movements__type movements__type-- ${type}">${i+1} ${type}</div>
    <div class="movements__date">3 days ago</div>
    <div class="movements__value">${mov}</div>
  </div>`;
  containerMovements.insertAdjacentHTML('afterbegin',html); //? This will add the html code to the containerMovements
  })  //? We have used afterbegin so that the new child will get added after the previous one 
} //!! Do not write the wrong function name , This is insertadjacentHTML not insertadjacentElement
const user= ' Sarah Jay Williams '
const createUsernames = function (acc){
acc.forEach(function(acc){acc.username = user.toLowerCase().split(' ').
  map(name=>name[0]).join('')});  //?Each element in the acc array will have a new username property. The value of this property will be the initials
  //? of the user constant, in lowercase, without any spaces. For the given user value, the username would be sjw.

}
createUsernames(accounts);
console.log(accounts);
displayMovements(account1.movements);  //? This will display the movements of account1 in the containerMovements

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
 
const eurotousd=1.1;
  //* THE MAP METHOD PUT IN PRACTICE 
/* const convertedrates=movements.map(function(mov)  
{
  return mov*eurotousd;
})
 */
const convertedrates = movements.map(mov=>{return mov*eurotousd}); //? This is the Arrow function call of same method 

console.log(convertedrates);//!!! Do Not call convertedrates like a function else it will give error that convertedrates is not a function 

 
const movementsDescription = movements.map( (mov,i)=>`Movement ${i+1} : You ${mov>0 ? 'Deposited ' : 'Withdrawn ' } ${Math.abs(mov)}} `) //? Here we are using Terinary operators + Arrow function to define the logic 


const deposit = movements.filter(function(mov){ //? This function will filter all the Positive transaction values to the console  , Because deposits are all positive 
  return mov > 0;
})

const withdrawals=movements.filter(function(mov){
  return mov < 0;
})

const balance =  movements.reduce((acc,cur)=>acc+cur,0);
console.log(balance);
console.log(deposit); //? This will log all the Positive movement values -- Positive transaction values to the console 
console.log(withdrawals);