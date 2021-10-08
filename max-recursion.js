// Day-3 Work
// To solve a problem with recursion
// Firstly, it must be iterative
// Base condition where my program is suppose to terminate

function findMax(data, length){
    if(length == 1){
        return data[0];
    } else{
        let num = findMax(data, length-1)
        if(num > data[length-1]){
            return num;
        } else {
            return data[length-1];
        }
    }
}

numbers = [10, 20, 30, 100, 2000, 1]
let result = findMax(data=numbers, length=numbers.length)
console.log("Result is: "+result);