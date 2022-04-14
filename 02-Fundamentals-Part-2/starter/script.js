// Activating Strict Mode
// ------------------------------------------------------
'use strict';

// let hasDriversLicense = false;
// const passTest = true;

// if (passTest) hasDriversLicense = true;
// if (hasDriversLicense) console.log('I can drive!');

// const interface = 'Audio';
// const private = 633;


// Functions
// ------------------------------------------------------
// function logger() {
//     console.log('My name is Ryan');
// };

// logger(); // this calls the function. without it the fucntion never runs
// logger(); // you can call functions as many times as you want

// function foodProcessor(apples, oranges) {
//     // console.log(apples, oranges);
//     const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
//     return juice;
// };

// foodProcessor(5, 0); // calling the function like this won't show the string that was written. The 5 and 0 is assigned to "apples" and "oranges" which is what will log to the console... 5 0
// const appleJuice = foodProcessor(5, 0); // by assigning the function to a variable we can now see both, the arguments (5 0) and the string within the function
// console.log(appleJuice);

// const appleOrangeJuice = foodProcessor(2, 4);
// console.log(appleOrangeJuice);

// const num = Number('23');
// console.log(num);


// Function Declarations vs. Expressions
// -------------------------------------------------------

// Function Declaration

function calcAge1(birthYear) {
    return 2022 - birthYear;
};

const age1 = calcAge1(1989); // with declarations, you're allowed to call the function with declaration before the actual function itself
console.log(age1);

// Function Expression
const calcAge2 = function (birthYear) {
    return 2022 - birthYear;
};

const age2 = calcAge2(1991);
console.log(age2);