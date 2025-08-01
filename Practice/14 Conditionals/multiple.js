
const salary = 2600;
const height = 70;
const color = 'white';



// ------------- MORE AND MORE CONDITION ---------------
if (salary > 2500 && height > 72 && color === 'white'){
    console.log(" We will agree");
}
else {
    console.log("We arr not agree"); // 'We arr not agree'
}



// ------------- COMPLEX CONDITION ---------------
if ((salary > 2500 || height > 72) && color === 'white'){
    console.log(" We will agree"); // ' We will agree'
}
else {
    console.log("We arr not agree");
}