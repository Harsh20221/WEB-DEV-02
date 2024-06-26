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

//# This function convert the full  username to initials of the person

const username = 'Jessica ';
const createUsernames = function (accs){
accs.forEach(function(acc){acc.username = acc.owner.toLowerCase().split(' ').  //!! Make sure to Correctly create the createUsername function to convert the initials of all the users in the  accounts ,
  //!! make sure to write this like acc.username=acc.owner.toLowercase().split('') , Do not forget to write .owner in between or else it'll not work
  map(name=>name[0]).join('')});  //?Each element in the acc array will have a new username property. The value of this property will be the initials
  //? of the user constant, in lowercase, without any spaces. For the given user value, the username would be sjw.

};
createUsernames(accounts);


/*console.log(accounts);*/
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

/*console.log(convertedrates)*/;//!!! Do Not call convertedrates like a function else it will give error that convertedrates is not a function

 
const movementsDescription = movements.map( (mov,i)=>`Movement ${i+1} : You ${mov>0 ? 'Deposited ' : 'Withdrawn ' } ${Math.abs(mov)}} `) //? Here we are using Terinary operators + Arrow function to define the logic 


const deposit = movements.filter(function(mov){ //? This function will filter all the Positive transaction values to the console  , Because deposits are all positive 
  return mov > 0;
})

const withdrawals=movements.filter(function(mov){
  return mov < 0;
})


//#### Here we are calculating the Account  Balance of the  user
 const calcDisplayBalance=function(acc){
acc.balance =  acc.movements.reduce((acc,mov)=>acc+mov,0);  //?This will calculate the total balance of the user
  /* acc.balance=balance; */
 labelBalance.textContent=`${acc.balance} EUR`;} ;  //? We have replaced the balance with acc.balance so that the whole accounts array is calculated 

/* console.log(balance);
console.log(deposit);  *///? This will log all the Positive movement values -- Positive transaction values to the console 
/* console.log(withdrawals); */



//* Max function using the reduce method  to find maximum transaction
const max = movements.reduce((acc,mov)=>{
  if (acc>mov){
    return mov
  }
},movements[0]);

//* Desigining the summary screen for all movements 

const MovementSummary=function(acc){
  const income = acc.movements.filter(mov=>mov>0).reduce((acc,mov)=>
acc+mov,0
  );
  labelSumIn.textContent=`${income} EUR`;  //? This will help to display the income summary


  const outcome= acc.movements.filter(mov=>mov<0).reduce((acc,mov)=>acc+mov,0);
  labelSumOut.textContent=`${outcome} EUR`;

  const intrest =acc.movements.filter(mov=>mov>0).map(deposit=>(deposit*1.2)/100).reduce((acc,mov)=>acc+mov);
  labelSumInterest.textContent=`${intrest} EUR ` //!! Very important error , Do not write map as Map else it wll create errors
}
MovementSummary(account1);

//* Using find method  to find transfers

const firstwithdrawal= movements.find(function(mov){
  return mov <0;
})

/*console.log(firstwithdrawal);*/

//#### Managing login and pass authentication

let currentaccount /// We are passing accounts to the current account to process the values 

createUsernames(accounts); // Ensure usernames are created before login attempts

btnLogin.addEventListener('click', function(e) {
  e.preventDefault(); // Prevent form submission
  console.log("Attempting to login with:", inputLoginUsername.value, inputLoginPin.value); // Debugging
  currentaccount = accounts.find(acc => acc.username === inputLoginUsername.value);
  console.log("Found account:", currentaccount); // Debugging

  if (currentaccount?.pin === Number(inputLoginPin.value)) { //!! Please Do not name this variable currentaccount as currentAccount or 
    //!!!else you will face errors logging in 
    console.log("Login successful for:", currentaccount.owner); // Debugging
    labelWelcome.textContent = `Welcome Back, ${currentaccount.owner.split(' ')[0]}`;
    containerApp.style.opacity = 1; // Make sure the app is fully visible
    // Update UI with account information
  } else {
    console.log("Login failed"); // Debugging
  }
  MovementSummary(currentaccount); ////!!!!!! VERY VERY IMPORTANT TO PASS THIS ARGUMENT with currentaccount or else we will not be able to sign the user inside the account 
});


/* btnTransfer.addEventListener('click',function(e){
  e.preventDefault() //?  This prevent default make sure the field is not left blank and one cannot submit it blank

  const amount = Number(inputTransferAmount.value);
  const  receiverAcc = accounts.find(acc => acc.username===inputTransferTo.value) //! Make sure to use === three equals for comparision and not two equals or else you may  face problems and also make sure to write inputtransferTo.value instead of inputTransferTo.username
//? This const reciver account find method checks if the entered acccount to whom the money is being send is equal to one of the accounts of the other  valid xuser
console.log(amount , receiverAcc);
if (amount > 0 && currentaccount.balance >=amount && receiverAcc?.username !==currentaccount.username

)

console.log('Transfer Valid')

}) */



