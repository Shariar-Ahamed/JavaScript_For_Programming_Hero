/***

Ticket fare Calculator
    - Children (age < 10): free
    - Students get a 50% discount
    - Senior citizens (age >= 60) gets a 15% Discount
    - Otherwise Regular ticket fare 800 tk
*/


let age = 25;
let isStudent = false;

let ticketFare;

if (age < 10) {
  ticketFare = 0;
} else if (isStudent) {
  ticketFare = 800 * 0.5; // 50% discount
} else if (age >= 60) {
  ticketFare = 800 * 0.85; // 15% discount
} else {
  ticketFare = 800; // regular fare
}

console.log("Ticket Fare:", ticketFare + " tk"); //[ 'Ticket Fare:', '800 tk' ]
