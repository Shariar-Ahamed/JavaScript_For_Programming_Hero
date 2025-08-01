const age = 25;
const price = 1000;

if(age <= 10){
    console.log("You can eat for free");
}

else if (age >= 11 && age <=20){
    // 25% Discount
    const discount = 25*1000/100;
    const payAmount = price - discount;
    console.log(payAmount, "TK");
}

else if (age >= 21 && age <=30){
    // 10% Discount
    const discount = 10*1000/100;
    const payAmount = price - discount;
    console.log(payAmount, "TK");  // 900 Tk
}

else{
    console.log("Please kindly full pay", price , "TK");
}

