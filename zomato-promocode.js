// Day-2 Work
var prompt = require('prompt-sync')();

let amount = Number(prompt("Enter amount: "));
let promo_code = prompt("Enter the promo code: ");

let proUser = true;
var discount = 0;
var proDiscount = 0;

if(amount > 159){
    if(promo_code == "FLAT75"){
        discount = 75;
        console.log("Promocode Applied");
    }else{
        console.log("Promocode Invalid");
    }

    if(proUser){
        console.log("Additional 10% off for you!!");
        proDiscount = 0.10*amount;
    }
}else{
    console.log("Promocode cannot be applied");
}
console.log("Discount is: "+discount);
console.log("Pro User Discount is: "+proDiscount);
amount = amount - discount - proDiscount;
console.log("Amount To Pay: "+amount);
