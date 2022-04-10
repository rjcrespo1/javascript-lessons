// let js = 'amazing';
// console.log(40 + 8 + 23 - 10);

// console.log('Ryan');
// console.log(23);

// let firstName = 'Ryan';

// console.log(firstName);
// console.log(firstName);
// console.log(firstName);

// let person = 'ryan';
// let PI = 3.1415;

// let myFirstJob = 'Coder';
// let myCurrentJob = 'Teacher';

// let job1 = 'programmer';
// let job2 = 'teacher';

// console.log(myFirstJob);

// // Math Operators
// const now = 2037;
// const ageRyan = now - 1989;
// const ageSarah = now - 2018;
// console.log(ageRyan, ageSarah);

// console.log(ageRyan * 2, ageRyan / 2, 2 ** 3);
// // 2 ** 3 ==> 2 to the power of 3 ==> 2 * 2 * 2

// const firstName = 'Ryan';
// const lastName = 'Crespo';
// console.log(firstName + " " + lastName);

// // Assignment Operators
// let x = 10 + 5; // ==> 15
// x += 10; // ==> x = x + 10 = 25
// x *= 4; // ==> x = x * 4 = 100
// x++; // ==> x = x + 1
// x--; // ==> x = x - 1
// console.log(x);

// // Comparison Operators
// console.log(ageRyan > ageSarah); // >, <, >=, <=
// console.log(ageSarah >= 18);

// const isFullAge = ageSarah >= 18;

// console.log(now - 1991 > now - 2018)

// const now = 2037;
// const ageRyan = now - 1989;
// const ageSarah = now - 2018;

// console.log(now - 1991 > now - 2018);

// let x, y;
// x = y = 25 - 10 - 5; // ==> x = y = 10, x = 10
// console.log(x, y);

// const averageAge = (ageRyan + ageSarah) / 2;
// console.log(ageRyan, ageSarah, averageAge);


///////////////////////////////////
// CODING CHALLENGE #1

/*
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / height ** 2 OR mass / (height * height). (mass in kg and height in meter).

1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both versions)
3. Create a boolean variable 'markHigherBMI' containing information about whether Mark has a higher BMI than John.

TEST DATA 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.
TEST DATA 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 m tall.

GOOD LUCK 😀
*/

// // TEST DATA 1:
// const markMass1 = 78;
// const markHeight1 = 1.69;
// const johnMass1 = 92;
// const johnHeight1 = 1.95;

// const markBMI1 = markMass1 / markHeight1 ** 2;
// const johnBMI1 = johnMass1 / johnHeight1 ** 2;
// console.log(markBMI1);
// console.log(johnBMI1);

// const markHigherBMI1 = markBMI1 > johnBMI1;

// console.log(markHigherBMI1);

// // TEST DATA 2:
// const markMass2 = 94;
// const markHeight2 = 1.88;
// const johnMass2 = 85;
// const johnHeight2 = 1.76;

// const markBMI2 = markMass2 / markHeight2 ** 2;
// const johnBMI2 = johnMass2 / johnHeight2 ** 2;
// console.log(markBMI2);
// console.log(johnBMI2);

// const markHigherBMI2 = markBMI2 > johnBMI2;

// console.log(markHigherBMI2);

// END CODING CHALLENGE #1
///////////////////////////////////

// Strings & Template Literals
// const firstName = 'Ryan';
// const job = 'developer';
// const birthYear = 1989;
// const year = 2022;

// const ryan = "I'm " + firstName + ', a ' + (year - birthYear) + ' years old ' + job + '!'; // ==> old way...don't do this! 
// console.log(ryan);

// const ryanNew = `I'm ${firstName}, a ${year - birthYear} years old ${job}!`
// console.log(ryanNew);

// console.log(`String
// with
// multiple
// lines`);

// Taking Decisions: if / else Statements
// const age = 16;
// const isOldEnough = age >= 18;

// if(isOldEnough) {
//     console.log('Sarah can start driving! 🚗');
// } else {
//     const yearsLeft = 18 - age;
//     console.log(`Sarah is not old enough to drive yet. She has ${yearsLeft} years left.`);
// };

// const birthYear = 1989;
// let century;
// if (birthYear <= 2000) {
//      century = 20;
// } else {
//      century = 21;
// };
// console.log(century);


////////////////////////////////////
// Coding Challenge #2

/*
Use the BMI example from Challenge #1, and the code you already wrote, and improve it:

1. Print a nice output to the console, saying who has the higher BMI. The message can be either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
2. Use a template literal to include the BMI values in the outputs. Example: "Mark's BMI (28.3) is higher than John's (23.9)!"

HINT: Use an if/else statement 😉

GOOD LUCK 😀
*/

// if (markBMI1 > johnBMI1) {
//     console.log(`Mark's BMI (${markBMI1}) is higher than John's BMI (${johnBMI1})!`);
// } else {
//     console.log(`John's BMI (${johnBMI1}) is higher than Mark's BMI (${markBMI1})!`);
// }; 

/////////////////////////////////////


// Type Conversion & Type Coercion
// --------------------------
// type conversion ======
const inputYear = '1991';
console.log(Number(inputYear), inputYear); // ==> ****Number()**** converts string into number!!
console.log(Number(inputYear) + 18);

console.log(Number('Ryan'));
console.log(typeof NaN);

console.log(String(23), 23); // ==> ****String()**** converts number into a string!!

// type coercion ======
console.log('I am ' + 23 +' years old');
console.log('23' - '10' - 3); // - changes it to number
console.log('23' + '10' + 3); // + leaves it as a string
console.log('23' * '2'); // * & / changes it to a number


let n = '1' + 1; // '11'
n = n - 1; // 11 - 1
console.log(n); // 10

console.log(2 + 3 + 4 + '5'); // when using '+' it will any numbers that come before the string then add the string to the end ====>> 2 + 3 = 5 + 4 = 9 + '5' = 95
console.log('10' - '4' - '3' - 2 + '5'); // '10' - '4' is the same as 10 - 4...so on and so on the add string to the end ====>> ....15


// Truthy and Falsy Value
// -------------------------
// ===== 5 falsy values: 0, '', undefined, null, NaN
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Ryan'));
console.log(Boolean({}));
console.log(Boolean(''));