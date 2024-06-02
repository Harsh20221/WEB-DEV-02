
/* console.log("Hello World"); /////THIS IS MY FIRST HELLO WORLD IN JS////// 
console.log(22+22+33+88);
let name='Harsh'
console.log("Helloworld")

let x=1900;
console.log(x);  //? This is the assignment operator 


let sarah=2020-x
if(sarah<=99){
    console.log("FIT")
}
else {
    console.log("EXCEED")
}

 */
/* var miramar= "2077";
/* console.log(Number(miramar)); */ //? This'll change the type of this variable to /* Number, Make sure to use capital N with number  
/* console.log("22"/"11")  */ //? This is the example of type coersion in Jvascript where Js changes the type automatically  



/* 
const favourite = Number(prompt("Please Enter Favourite No!!!"))  //# You can use prompt to get a input from the user in web Browser 

 if ( favourite<=50){
    alert("NNumber Lies in 1 Quadrant") //# You can use alert to give output to user in web Browser
 }
 else alert("Number lies in 2 Quadrant") */




/* 
 taming=String(prompt("Please Enter your Taming Food "))
 dart=String(prompt("please enter Dart type"))
if(taming==="kibble" && dart==="shocking"){
    alert("Taming will take least amount  ")
}

else 
alert("Taming will take variable amount") */
/* name=String(prompt("Please enter name"))

switch(name){
    case("Peterparker"):  //?DO not forget to use : after writing case statement 
    alert("We have spiderman");
    break;

    case ("Tonystark"):
        alert("We have Ironman");
        break; //? Do not forget to use break statement 

    case("Wanda"):
    alert("You have the Scarlet Witch ");
    break;

} */   

///*TERINARY OPERATORS //

/* vault=prompt("Enter vault Number");
vault>33 ? alert("You will be experimented " ): alert("You are safe") */

/* function logger(){
    console.log("HELLO WORLD DEAR");
}

logger();

 */
/* function foodprocessor(apples , oranges ){
console.log(apples,oranges);
const juice = `juice with ${apples} apple and ${oranges} oranges`; //! VERY Important -- Use Only Backtick here and not anythging else , do not use single quotes or double quotes or it'll not display as string literals
return juice;

}


console.log(foodprocessor(2,3));

 */
/* 
function fun(num1,num2){
    console.log(`num1---${num1} and num2---${num2} are fun!!!`);
}  //* In this example we declared a function using traditional method 

fun(2,3);


const funny=function(num3,num4){
    return num3-num4;  //* In this example we declared a function with the help of a expression and stored the value in a constant and used it to call the function 

}

console.log(funny(8,4)); */


//* Arrow Functions 
/* 
today=2024;

const age = birthyear=>today-birthyear;
console.log(age(1970)); */

/* 
//* Function calling Functions 

function fruitchopper(fruit){
return fruit*4;
}



function foodprocessor(apples, oranges){
    return console.log(`We have juice of ${fruitchopper(apples)} apples and ${fruitchopper(oranges)} oranges `)
}



console.log(foodprocessor(4,8)); */


//* ARRAY METHODS AND OPERATIONS 

arr1=["Hydrogen", "Helium", "Lithium ", "Berellium",["Molybednum", "Tritium"]];
firstelement=arr1[0];
Arrayinsidearray=arr1[4];
console.log(firstelement)
console.log(Arrayinsidearray)
length=arr1.push("Ognession") //? push pushes the given element at end of an array and returns the length of an array 
console.log(length); 
arr1.shift() //? This'll remove the element from first position 
console.log(arr1)
arr1.unshift("Molecule") //? This will inserrt the given elementy at first position of the array
console.log(arr1);   



//* Objects 

const TheNextgeneration = {
    crew1:"Geordi",
    crew2:"Data",
    ship : "USS Enterprise ",
    code:"NCC",
    subcode:1701,
}
year=1700

console.log(TheNextgeneration.crew2)
console.log(TheNextgeneration.subcode-year)