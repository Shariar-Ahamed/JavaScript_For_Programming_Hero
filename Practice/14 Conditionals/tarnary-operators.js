//----- Normal if Esle------
let num = 40;

if (num <= 40){
    console.log("Passed"); // Passed
}

else {
    console.log("Faild");
}



//------- Tarnary Operators--------
let age = 20;

let adult = (age <= 25) ? "I am adult" : "I am not adult";
console.log(adult); // I am adult


//------- Multiple condition---------
let num1 = 80;

let result = (num1 <= 80) ? "Good" : (num1 <= 90) ? "Very Good" : "Failed";
     console.log(result); // Good
