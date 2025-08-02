/*
display odd number from 55 to 85 and skip the numbers divisible by 5.
*/


// JavaScript while loop:
let num = 55;

while (num <= 85) {
    if (num % 2 === 0 || num % 5 === 0) {
        num++;
        continue;
    }
    console.log(num);
    num++;
}


// for loop
for (let num = 55; num <= 85; num++) {
    if (num % 2 === 0 || num % 5 === 0) {
        continue;
    }
    console.log(num);
}