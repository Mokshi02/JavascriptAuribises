// Day-3 Work
/*
    Functions in Javascript
    f(x) = x*x + 1
    name, input and definition
    Function solves a problem
*/
let x = 10;
// Creation Statement
function f(x){
    let result = x*x +1;
    console.log("Result is: "+result);
}
function f1(x){
    let result = x*x +1;
    return result;
}
// Execution Stetement
f(10); 
let output = f1(-2);
console.log("Output is: "+output);

console.log("~~~~~~~~~~~~~~~");
function bye(name){
    console.log("Bye "+name);
    return "Thank You";
}
function hello(name){
    console.log("Hello "+name);
    bye(name+" Watson"); //Nesting of Functions -> Execution Behaviour
}
hello("John");

console.log("~~~~~~~~~~~~~~~~");
function addNumbers(a,b){
    //let sum = a+b;
    //return sum;
    return a+b;
}
// Reference Copy
let sum = addNumbers;
console.log("Result is: "+sum(10,20));
// Function Expressions
let multiply = function(num1 = 2, num2 = 3){
    return num1 * num2;
}
console.log("Multiplication of -2 and -5 is: "+multiply(-2, -5));
console.log(multiply(num2 = 5, num1 = 2));
console.log(multiply());
console.log(multiply(num1 = 10));