//---------------Display sum of all the odd numbers from 81 to 131.-----------------
let num = 81;
let sum = 0;
while (num <= 131 ){
    
    if (num % 2 === 0);{
    sum = num + sum;
    }   
    num++;
}
console.log(sum) // 5406



//---------------Display sum of all the even numbers from 206 to 311.---------------
let number = 206;
let sum1 = 0;

while (number <= 311) {
    sum1 = number + sum1;
    number = number + 2;
}
console.log(sum1); // 13674