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