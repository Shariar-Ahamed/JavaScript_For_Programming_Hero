/*** 

BMI Calculator and Health Category

Create a JavaScript program that calculates the Body Mass Index (BMI) and assigns a health category based on the BMI value. Use nested if-else statements to determine the health category.

    - Calculate BMI using the formula: BMI = weight (kg) / (height (m))^2
    - BMI < 18.5, you are underweight.
    - BMI >= 18.5 and BMI <=24.9, you are normal.
    - BMI >=25 and BMI <= 29.9, you are overweight.
    - Otherwise, you are obese.

*/


// Step 1: ওজন (কেজি) আর উচ্চতা (মিটার) ইনপুট দেই
let weight = 70; // কেজি
let height = 1.75; // মিটার

// Step 2: BMI হিসেব করি
let bmi = weight / (height * height);

// Step 3: BMI দেখাই
console.log("Your BMI is:", bmi.toFixed(2)); // শুধু ২ দশমিক পর্যন্ত দেখাবো

// Step 4: Nested if-else দিয়ে health category বের করি
if (bmi < 18.5) {
  console.log("You are underweight.");
} else {
  if (bmi >= 18.5 && bmi <= 24.9) {
    console.log("You are normal.");
  } else {
    if (bmi >= 25 && bmi <= 29.9) {
      console.log("You are overweight.");
    } else {
      console.log("You are obese.");
    }
  }
}