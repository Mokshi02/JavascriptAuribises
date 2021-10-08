// Day-2 Work
var prompt = require('prompt-sync')();

let promo_code = prompt("Enter the promo code: ");

console.log(promo_code)

if(promo_code == "ZOMATO"){
    console.log("Promocode is Applied");
} else {
    console.log("Promocode is Invalid");
}