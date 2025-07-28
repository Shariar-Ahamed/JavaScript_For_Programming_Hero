/***

you have two numbers in two variables, called: num1, num2

now declare a variable called result. 
if num1 is bigger than num2 then result will be double of num1. if not, then the value of the variable result will be the sum of num1 and num2.

write a simple if-else. 

also, write it using ternary operator.

 */


//** 1. Using if-else **/ /
let num1 = 10;
let num2 = 20;

let result;

if ( num1 > num2 ) {
    result = num1 * 2;
}

else {
    result = num1 + num2;
}

console.log("Resut:", result); // ['Reslt:', 30]





// **2. Using Ternary Operator **//

let num01 = 50;
let num02 = 10;

let results = (num01 > num02) ? num01 * 2 : num01 + num02;

console.log("Result:", results); // [ 'Result:', 100 ]