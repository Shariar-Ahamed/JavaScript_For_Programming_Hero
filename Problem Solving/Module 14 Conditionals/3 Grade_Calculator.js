/***

Grade Calculator

Create a simple JavaScript program that takes a student's score as input and returns their corresponding grade based on the following grading scale:

    A: 90-100
    B: 80-89
    C: 70-79
    D: 60-69
    F: 0-59

***/


let studentResult = 70;

if (studentResult >= 90) {
    console.log(" Grade A ");
}

else if (studentResult >= 80 ) {
    console.log(" Grade B ");
}

else if (studentResult >= 70) {
    console.log(" Grade C ");
}

else if (studentResult >= 60) {
    console.log(" Grade B ");
}

else {
    console.log(" Grade F ")
}