// Day-9
"use strict"
var prompt = require('prompt-sync')();
console.log("APP STARTED");
let phone = prompt("Enter Phone Number: ")
let sentOtp = 1542
console.log("OTP sent: "+sentOtp+" on phone: "+phone);
let otp = prompt("Enter the 4 digit OTP sent to you: ")

let attempts = 0;
while(sentOtp != otp){
    attempts++;
    otp = prompt("Enter the OTP again: ")
    if(attempts == 2){
        let error = new Error("INVALID ATTEMPTS");
        throw error;
    }
}

console.log("Welcome to the App");
console.log("APP FINISHED");
