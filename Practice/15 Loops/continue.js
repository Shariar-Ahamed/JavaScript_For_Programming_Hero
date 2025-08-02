// continue --> skip this interation
// break --> i am done with this loop . loop end.


for (let num = 0; num < 10; num++) {
    if (num % 2 === 0) { // Check if num is even
        continue; // Skip the rest of the loop for this iteration
    }
    console.log(num); // 1, 3, 5, 9 This will only log odd numbers
}


