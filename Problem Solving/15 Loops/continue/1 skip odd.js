/* 
Write a loop to print even numbers from 1 to 40. Use continue to skip odd numbers.
*/

// while loop version with continue:
let num = 1;

while (num <= 40) {
    if (num % 2 !== 0) {
        num++;        // আগে বাড়াতে হবে, না হলে infinite loop হয়ে যাবে!
        continue;     // Skip odd numbers
    }
    console.log(num); // 2, 4, 6, ... 4.             Only even numbers will be printed
    num++;
}


// for loop 
for (let i = 1; i <= 40; i++) {
    if (i % 2 !== 0) {
        continue;
    }
    console.log(i); // // 2, 4, 6, ... 4.
}


