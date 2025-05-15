//console.log will output a message in the developer console
//two slashes starts a single line comment

console.log("it worked");//single line comment can go beside code

/*
this is a multi-line comment
starts with a / and a * and closes with a * and a/
*/

//to declare a variable, use let or const
let ourClassNum = "J207"
let numStudents = 9;//with a number, you don't need quotes

console.log(ourClassNum);


console.log(numStudents);

//if you declare a variable with let, you can change its value
numStudents = 21


//if you declare a value with const, you can't change its value
//outClassNum = "C128"
//(trying to change a const variable will give you an error, and stop the code)
console.log(ourClassNum);

//const and let cannot be redeclared (or recreated)
//let numStudent = 25; (this will also give you an error)

/************************** 
    Javascript datatypes
***************************/

//storing a value of true or false is called a boolean
let doorClosed = true;
console.log(doorClosed);

//you can create an empty variable, which will return undefined
let whiteboardContent;
console.log(whiteboardContent) ;//should give you undefined 

//you can use the keyword "null" (which means nothing)
let classKids = null;

//number - can be written without quotes (computer can recognize them)
//string - is text that must be written in quotes

//difference between == and ==
const numLights = 12; //this variable is storing a number
const numChair = "12"; //this variable is storing a piece of text

console.log(numbers == numChairs); //gives you ture
console.log(numLights === numChairs);//gives you false

//two eqals == checks if they are the same value
//three equals === checks if they are the same value and same datatype