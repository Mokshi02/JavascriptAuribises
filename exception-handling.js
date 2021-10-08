// Day-9
// Errors in JS will always be run time errors


"use strict"
var prompt = require('prompt-sync')();
console.log("MyApp Started");
let priceMoney = 10000;
let luckyNumber = parseInt(prompt("Enter Your Lucky Number: "));
console.log("Lucky Number is: "+luckyNumber);
console.log(typeof luckyNumber);

let cashBack = priceMoney / luckyNumber;
console.log("Cashback Earned is: "+cashBack);
console.log("MyApp Finished");