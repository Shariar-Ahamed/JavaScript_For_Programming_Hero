/**
 * MULTI LEVER CONDITION
 */

const price = 2600;

if (price >= 5000){
    // 10% Discount
    const discount = (price*10) / 100;
    const payAmount = price - discount;
    console.log(payAmount, "TK"); 
}

 else if (price >= 2500){
    // 5% Discount
    const discount = price * 5 / 100;
    const payAmount = price - discount;
    console.log(payAmount , "TK"); // Output: 2470 TK 
}

else{
    console.log(price, "TK");
}