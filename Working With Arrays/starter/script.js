'use strict';
/////* This code Contains code for DOM MANIPULATION FROM LINE 76 ONWARDS S*/
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
  movements.forEach(function(mov,i) {      //? Here mov stands for movement and i stands for Index 
    const type=mov>0 ? 'deposit' : 'withdrawal' 
  const html= `  <div class="movements__row">
    <div class="movements__type movements__type-- ${type}">${i+1} ${type}</div>
  
    <div class="movements__value">${mov}</div>
  </div>`;
  containerMovements.insertAdjacentHTML('afterbegin',html); //? This will add the html code to the containerMovements
  });  //? We have used afterbegin so that the new child will get added after the previous one 
}; //!! Do not write the wrong function name , This is insertadjacentHTML not insertadjacentElement
  //? This will display the movements of account1 in the containerMovements
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
 const calcDisplayBalance=function(acc){  //!! Make sure to store the result of the reduce in balance because we are using this balance property throughout the code
  //!! Make sure to pass argument acc here and not movement because we are calculatng balance for all users and we are also adding the balance property to the account object
const balance  =  acc.movements.reduce((acc,mov)=>acc+mov,0) //?This will calculate the total balance of the user
    acc.balance=balance;  ///The balance property is not originally defined in the account objects (account1, account2, account3, account4) at the beginning of the provided code. 
    ///Instead, the balance property is dynamically added to each account object in the line acc.balance = balance; in the calcDisplayBalance function.
 labelBalance.textContent=`${balance} EUR`;} ;  //? We have replaced the balance with acc.balance so that the whole accounts array is calculated 

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

//* Using find method  to find transfers

const firstwithdrawal= movements.find(function(mov){
  return mov <0;
})

/*console.log(firstwithdrawal);*/


const updateUI=function(acc){
  displayMovements(acc.movements);
  calcDisplayBalance(acc);
  MovementSummary(acc);
 }

//#### Managing login and pass authentication

let currentaccount /// We are passing accounts to the current account to process the values 

createUsernames(accounts); //!!! Ensure usernames are created before login attempts  and pass whole array of accounts and not account 1 or 2 or 3 or 4

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
  inputLoginUsername.value = inputLoginPin.value = ''; // Clear input fields  after login
  inputLoginPin.blur(); // Remove focus from pin field
  updateUI(currentaccount); // Update UI with account information

});

///## Here we have the logic for fund transfer from one account to another account
  btnTransfer.addEventListener('click',function(e){
  e.preventDefault() //?  This prevent default make sure the field is not left blank and one cannot submit it blank

  const amount = Number(inputTransferAmount.value);
  console.log(amount);
  const  receiverAcc = accounts.find(acc => acc.username===inputTransferTo.value) //! Make sure to use === three equals for comparision and not two equals or else you may
  //!!!  face problems and also make sure to write
  //!! inputtransferTo.value instead of inputTransferTo.username
////? This const reciver account find method checks if the entered acccount to whom the money is being send is equal to one of the accounts of the other  valid user
console.log(amount , receiverAcc);
if (amount > 0 && currentaccount.balance >=amount && receiverAcc?.username !==currentaccount.username

){
currentaccount.movements.push(-amount); //? This will deduct the amount to the current account in the array movements
receiverAcc.movements.push(amount);//? This will add the amount to the reciever account in the array movements
console.log('Transfer Valid')}
updateUI(currentaccount); //? This is to update the ui after money transfer 
  

})  

//# Here we have Logic for Account Deletion Below


btnClose.addEventListener('click',function(e){
  e.preventDefault();
if(currentaccount.username===inputCloseUsername.value && Number(inputClosePin.value)===currentaccount.pin){ //!! Make sure to always check for the .value parameter of the input field button , here inputcoseusernamein this case
 ///!! In order to check the approrite conditions for the process make sure you write the inputparameter.value at the left and compare it with currentaccount.pin written at right side of equal to operator and also 
 ///!!!very imortant to enclose input parameter inside Number function if it is a Number 
 //? In the above step we check if the entered account deletion username and password is same as current username and password 
  console.log('Closing can proceed');


const index = accounts.findIndex(acc=>acc.username===currentaccount.username);

/////#Here in This Step we are Deleting the Account of the user 

accounts.splice(index,1); //? Splice method is used to delete the user's Data 
containerApp.style.opacity=0; //? Here we are resetting the opacity so that once deleted the user gets logs out 


}
})  

//## Here We  Have Added Logic for Loan Request Option  Below
btnLoan.addEventListener('click', function(e){
  e.preventDefault();
  const amount = Number(inputLoanAmount.value);

  if ( amount>0 &&  currentaccount.movements.some(mov => mov >= amount*0.1)){  //? Here we are checking if the user has 10% of loan amount
    //? deposited in his /her account
    ////  The `some()` method in JavaScript is an array method that tests whether
    //// at least one element in the array passes the test implemented by the provided function. It returns a Boolean value.
//// There is also an  every() method which returns true when all of the conditions that we mentioned in the array returns true
currentaccount.movements.push(amount);  //? Use this push method to insert loan amount to the current account
  }
updateUI(currentaccount);
})


//* Here we are Practicing the Flat method of Array operations

const arr178=[1,2,3,[4,5,6],[7,8,9],[10,11,12,[13,14,15,[16,17,18]]]]

console.log(arr178.flat()); //? This will flatten upto one level only
console.log(arr178.flat(Infinity)); //? This will flatten all levels of the Array
//! Make sure to Write Infinity with I in capital letters or else the parameter will not be recognised
///* Flatmap Method
const overallbalance2 = accounts.flatMap(acc=>acc.movements).reduce((acc,mov)=>acc+mov,0)
console.log(overallbalance2);