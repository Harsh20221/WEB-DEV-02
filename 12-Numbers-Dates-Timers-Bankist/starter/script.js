'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

/////////////////////////////////////////////////
// Data

// DIFFERENT DATA! Contains movement dates, currency and locale

const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
  interestRate: 1.2, // %
  pin: 1111,

  movementsDates: [
    '2019-11-18T21:31:17.178Z',
    '2019-12-23T07:42:02.383Z',
    '2020-01-28T09:15:04.904Z',
    '2020-04-01T10:17:24.185Z',
    '2020-05-08T14:11:59.604Z',
    '2020-05-27T17:01:17.194Z',
    '2020-07-11T23:36:17.929Z',
    '2020-07-12T10:51:36.790Z',
  ],
  currency: 'EUR',
  locale: 'pt-PT', // de-DE
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,

  movementsDates: [
    '2019-11-01T13:15:33.035Z',
    '2019-11-30T09:48:16.867Z',
    '2019-12-25T06:04:23.907Z',
    '2020-01-25T14:18:46.235Z',
    '2020-02-05T16:33:06.386Z',
    '2020-04-10T14:43:26.374Z',
    '2020-06-25T18:49:59.371Z',
    '2020-07-26T12:01:20.894Z',
  ],
  currency: 'USD',
  locale: 'en-US',
};

const accounts = [account1, account2];

/////////////////////////////////////////////////
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


//# This method listed below is responsible for creation of Date Object
const formatMovementdate=function(date){
const calcDaysPassed=(date1,date2) => Math.round(Math.abs(date2-date1)/(1000*60*60*24)); ///!!!! Make sure you do not forget to add Math.round before else it wil give errors and will nt show correct time
const daysPassed= calcDaysPassed(new Date(),date);
if(daysPassed===0){return 'Today'}
if (daysPassed===1){return 'Yesterday'}
if(daysPassed<=7){return `${daysPassed}days ago `}

else {
const day = `${date.getDate()}`.padStart(2,0);
const month = `${date.getMonth()+1}`.padStart(2,0);
const year= date.getFullYear();
return `${day}/${month}/${year}`;}
}
// Functions
///# This function is the primary function responsible for displaying user Transactions
const displayMovements = function (acc, sort = false) {
  containerMovements.innerHTML = '';

  const movs = sort ? acc.movements.slice().sort((a, b) => a - b) : acc.movements;

  movs.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';
const date =  new Date (acc.movementsDates[i]); //? This extracts the data from account movementDates
const finaldate=    formatMovementdate(date);
    const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
             <div class = "movements__date">${finaldate}</div>       
        <div class="movements__value">${mov.toFixed(2)}€</div>
      </div>
    `;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};
//# This function calculates the Overall Balance of the user
const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${acc.balance.toFixed(2)}€`;
};

///# This is the function to Calculate Display Summary

const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${incomes.toFixed(2)}€`;

  const out = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${Math.abs(out).toFixed(2)}€`;

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter((int, i, arr) => {
      // console.log(arr);
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = `${interest.toFixed(2)}€`;
};

const createUsernames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};
createUsernames(accounts);
///# This is the function to update UI once the details are loaded
const updateUI = function (acc) {
  // Display movements
  displayMovements(acc);

  // Display balance
  calcDisplayBalance(acc);

  // Display summary
  calcDisplaySummary(acc);
};

//# This is the function for authentication
// Event handlers
let currentAccount;

btnLogin.addEventListener('click', function (e) {
  // Prevent form from submitting
  e.preventDefault();

  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );
  console.log(currentAccount);

  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    // Display UI and message
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(' ')[0]
    }`;
    containerApp.style.opacity = 100;

    // Clear input fields
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();

    // Update UI
    updateUI(currentAccount);
  }
});
///# This is the Function for Fund Transfer
btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const receiverAcc = accounts.find(
    acc => acc.username === inputTransferTo.value
  );
  inputTransferAmount.value = inputTransferTo.value = '';

  if (
    amount > 0 &&
    receiverAcc &&
    currentAccount.balance >= amount &&
    receiverAcc?.username !== currentAccount.username
  ) {
    // Doing the transfer
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);
//Adding the transaction dates

    currentAccount.movementsDates.push(new Date().toISOString()); //? Make sure to Push the new dates to both the sender and the receiver
    receiverAcc.movementsDates.push(new Date().toISOString());







    // Update UI
    updateUI(currentAccount);
  }
});
///# Here we have the logic for Loan Feature
btnLoan.addEventListener('click', function (e) {
  e.preventDefault();

  const amount = Math.floor(inputLoanAmount.value);

  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    // Add movement
    currentAccount.movements.push(amount);
/// Adding the loan transaction date to movements dates
    currentAccount.movementsDates.push(new Date().toISOString());

    // Update UI
    updateUI(currentAccount);
  }
  inputLoanAmount.value = '';
});
///# Here we have the logic for closing the account
btnClose.addEventListener('click', function (e) {
  e.preventDefault();

  if (
    inputCloseUsername.value === currentAccount.username &&
    Number(inputClosePin.value) === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      acc => acc.username === currentAccount.username
    );
    console.log(index);
    // .indexOf(23)

    // Delete account
    accounts.splice(index, 1);

    // Hide UI
    containerApp.style.opacity = 0;
  }

  inputCloseUsername.value = inputClosePin.value = '';
});
///# Here we have the logic for sorting the account movements
let sorted = false;
btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  displayMovements(currentAccount.movements, !sorted);
  sorted = !sorted;
});
///# Here we have the logic for manipulating and showing the current date to the user
const now = new Date();
const currentyear=now.getFullYear();
const currentmonth=`${now.getMonth()+1}`.padStart(2,0);
const currentday = `${now.getDate()}`.padStart(2,0);
const currentHour = `${now.getHours()}`.padStart(2,0);
const currentMinute = `${now.getMinutes()}`.padStart(2,0);
labelDate.textContent=`${currentday}/${currentmonth}/${currentyear}, ${currentHour}:${currentMinute}`

///*  Using Number.is Finite to check for finite numbers
const nums=6/0;
/*console.log(Number.isFinite(nums));*/   //? We  Can use the Number.iFinite to check if a number is finite or not if is a real no or not

///* Using .parse to extract numbers from integers
const parsingexample = '30.77$';
/*console.log(Number.parseInt(parsingexample))*/ //? Only works when the first Word in the string is a Number
/*console.log(Number.parseFloat(parsingexample))*/

///* Below this there is a Demo of Math Functions available in JAVASCRIPT

/*const testnum = 5;
console.log(Math.sqrt(testnum)); */ //? We'll get the square root of 5 as an output
////// Maths.random to create random values between 0 and 1 where 0 is inclusive and 1 is not ad also truncate
const randint = (min,max)=>Math.trunc(Math.random()*(max-min)+1)+3   //?  The result is then incremented by 1 to ensure that the minimum value is inclusive in the range
//?  Finally, the function adds 3 to the result. This means that the actual range of the generated numbers will be from min + 3 to max + 3.
/*console.log(randint(4,6)) */ //? This will output a random integer between 7 and 9 (4+3 and 6+3) to the console.

/////Round and ceil Methods to roundoff the numbers
//?  Math.round is used to round a number to the nearest integer,
// ?while Math.ceil is used to round a number up to the next largest integer.
const rounddemo = Math.round(53.6);  //? Result will be 54
const rounddemo2=Math.round(53.4);  //? Result will be 53
const ceildemo = Math.ceil(53.3); //? result will be 54

/////There is also a floor Method like truncate but it also works for Negative Numbers , For positive numbers it just works like truncate
////It just removes the fraction

const floordemo = Math.floor(-51.6) //? The result will be -52
/*console.log(floordemo);*/


///// .tofixed Method
const tofixeddemo= 3.7.toFixed(0)  //? .tofixed(0) , 0 here determines the fraction digits to be added after rounding off the number
/*console.log(tofixeddemo);*/

//* Experimenting with Remainder methods
//# This function will turn some of the rows of the transactions orange when clicked on the balance
labelBalance.addEventListener('click',function(){
  [...document.querySelectorAll('.movements__row')].forEach(function(row , i ) {
    if( i%2===0) row.style.backgroundColor='orangered';
  });
});


///* Bigint Demo
const bigno=223342452643653784846848n; /// ? By writing n at the last we make the number a bigint


///* Using date and time functions in Javascript

const date1= new Date(2005 , 4 , 27 , 10,35,29,22 )
//? This is the format of writing date in Javascript , First Year then Month then date then it goes upto milliseconds

console.log(date1); ///// The console .log will display the exact day of the mentioned date and other info regarding this date object we created in JAVASCRIPT
console.log(date1.getFullYear())
console.log(date1.getHours())
console.log(date1.getMinutes())

console.log(date1.toISOString()) //? This will convert the date object to the string object
