// Day-2 Work
/*
    String: Textual Datatype
    Number: Includes Integer and Floating Point
    BigInt: Its a bigger range {4000002611255}
    Boolean: Include True and False
    undefined: It is a datatype in which we didn't give any value 
    null: It is variable but it points to nothing 
    Symbol: It is a kind of a constant{IMMUTABLE VARIABLE}
    Object: 
*/
// Undefined datatype
let a;
console.log("a is: "+a+" type is: "+typeof a);

// Number datatype
let b = 10;
console.log("b is: "+b+" type is: "+typeof b);

// Null datatype
let c = null;
console.log("c is: "+c+" type is: "+typeof c);


// Symbol datatype
let d = Symbol('Hello');
console.log(d);

// Object datatype
let employee = {name: "Mokshi", age: 21};
console.log(employee+ " type: "+ typeof employee);
console.log(employee['name']);

// Converting String datatype to Number datatype
let age = "12";
console.log(age+ " "+ typeof age);
let numAge = Number(age);
console.log(numAge+ " "+ typeof numAge);

// Converting Number datatype to String datatype
var x = 10;
var y = String(x);
console.log(y+ " "+ typeof y);