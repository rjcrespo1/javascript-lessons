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

// END CODING CHALLEGE #2
/////////////////////////////////////

// Type Conversion & Type Coercion
// --------------------------
// type conversion ======
// const inputYear = "1991";
// console.log(Number(inputYear), inputYear); // ==> ****Number()**** converts string into number!!
// console.log(Number(inputYear) + 18);

// console.log(Number("Ryan"));
// console.log(typeof NaN);

// console.log(String(23), 23); // ==> ****String()**** converts number into a string!!

// // type coercion ======
// console.log("I am " + 23 + " years old");
// console.log("23" - "10" - 3); // - changes it to number
// console.log("23" + "10" + 3); // + leaves it as a string
// console.log("23" * "2"); // * & / changes it to a number

// let n = "1" + 1; // '11'
// n = n - 1; // 11 - 1
// console.log(n); // 10

// console.log(2 + 3 + 4 + "5"); // when using '+' it will any numbers that come before the string then add the string to the end ====>> 2 + 3 = 5 + 4 = 9 + '5' = 95
// console.log("10" - "4" - "3" - 2 + "5"); // '10' - '4' is the same as 10 - 4...so on and so on the add string to the end ====>> ....15

// Truthy and Falsy Value
// -------------------------
// ===== 5 falsy values: 0, '', undefined, null, NaN
// console.log(Boolean(0)); // false
// console.log(Boolean(undefined)); // false
// console.log(Boolean("Ryan")); // true
// console.log(Boolean({})); // true
// console.log(Boolean("")); // false

// const money = 0; // 0 is a falsy value
// if (money) {
//   console.log("Don't spend it all!");
// } else {
//   console.log("you should get a job!");
// }
// // console.log(typeof money);

// let height; // no value so this is undefined and undefined is a falsy value!
// if (height) {
//   console.log("Height is defined!!");
// } else {
//   console.log("Height is UNDEFINED!");
// }

// Equality Operators: == and ===
// ----------------------------
// const age = 18;
// if (age === 18) console.log("You are now an adult! (strict)"); // If () statements do not need {} if it is only one condition
// // === is the strict equality operator. Only returns true when both values are exactly the same. Example below 👇
// console.log(18 === 18); // true -----> both have the same value and the same type
// console.log(19 === 18); // false ------> both are the same type but don't have the same value
// console.log("10" === "10"); // true ------> string is equal to a string
// console.log("10" === 10); // false -----> string is not equal to a number
// // == does type coercion. Examples:
// console.log("18" == 18); // true ------> == converts '18' into a number
// if (age == 18) console.log("You are now an adult! (loose)");

// const favorite = Number(prompt("What's your favorite number?"));
// console.log(favorite);
// console.log(typeof favorite);

// if (favorite === 23) {
//   // 23 === 23 ---> TRUE
//   console.log("Cool! 23 is an amazing number!");
// } else if (favorite === 7) {
//   console.log("7 is also a cool number");
// } else {
//   console.log("Number is not 23 or 7");
// }

// if (favorite !== 23) console.log("Why not 23?");

// Logical Operators
// ----------------------
// const hasDL = true; // A
// const hasGoodVision = true; // B
// // const hasGoodVision = false; // B
// const isTired = false; // C

// console.log(hasDL && hasGoodVision);
// console.log(hasDL || hasGoodVision);
// console.log(!hasDL);

// const shouldDrive = hasDL && hasGoodVision;

// // if (shouldDrive) {
// //   console.log('Sarah is able to drive');
// // } else {
// //   console.log('Someone else should drive...');
// // };

// console.log(hasDL && hasGoodVision && isTired); // when any one of the variables is false, this whole statement becomes false. All must be true for statement to be true

// if (hasDL && hasGoodVision && !isTired) {
//   console.log('Sarah is allowed to drive!');
// } else {
//   console.log('Someone else should drive...');
// };

////////////////////////////////////
// Coding Challenge #3

/*
There are two gymnastics teams, Dolphins and Koalas. They compete against each other 3 times. The winner with the highest average score wins the a trophy!

1. Calculate the average score for each team, using the test data below
2. Compare the team's average scores to determine the winner of the competition, and print it to the console. Don't forget that there can be a draw, so test for that as well (draw means they have the same average score).

3. BONUS 1: Include a requirement for a minimum score of 100. With this rule, a team only wins if it has a higher score than the other team, and the same time a score of at least 100 points. HINT: Use a logical operator to test for minimum score, as well as multiple else-if blocks 😉
4. BONUS 2: Minimum score also applies to a draw! So a draw only happens when both teams have the same score and both have a score greater or equal 100 points. Otherwise, no team wins the trophy.

TEST DATA: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
TEST DATA BONUS 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
TEST DATA BONUS 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106

GOOD LUCK 😀
*/

// // Test Case 1:
// const dolphinAvg1 = (96 + 108 + 89) / 3;
// const koalaAvg1 = (88 + 91 + 110) / 3;

// console.log(dolphinAvg1, koalaAvg1);

// if (dolphinAvg1 > koalaAvg1) {
//   console.log("Dolphin's are the winners!");
// } else if (dolphinAvg1 === koalaAvg1) {
//   console.log('It is a draw!');
// } else if (koalaAvg1 > dolphinAvg1) {
//   console.log("Koala's are the winners!");
// };

// // Bonus 1:
// const dolphinAvg2 = (97 + 112 + 101) / 3;
// const koalaAvg2 = (109 + 95 + 123) / 3;

// console.log(dolphinAvg2, koalaAvg2);

// if (dolphinAvg2 > koalaAvg2 && dolphinAvg2 >= 100) {
//   console.log("Dolphin's are the winners!!");
// } else if (dolphinAvg2 === koalaAvg2 && dolphinAvg2 >= 100 && koalaAvg2 >= 100) {
//   console.log('It is a draw!!');
// } else if (koalaAvg2 > dolphinAvg2 && koalaAvg2 >= 100) {
//   console.log("Koala's are the winners!!");
// } else {
//   console.log("Doesn't meet the qualifications!");
// };

// // Bonus 2:
// const dolphinAvg3 = (97 + 112 + 101) / 3;
// const koalaAvg3 = (109 + 95 + 106) / 3;

// console.log(dolphinAvg3, koalaAvg3);

// if (dolphinAvg3 > koalaAvg3 && dolphinAvg3 >= 100) {
//   console.log("Dolphin's are the winners!!!");
// } else if (dolphinAvg3 === koalaAvg3 && dolphinAvg3 >= 100 && koalaAvg3 >= 100) {
//   console.log('It is a draw!!!');
// } else if (koalaAvg3 > dolphinAvg3 && koalaAvg3 >= 100) {
//   console.log("Koala's are the winners!!!");
// } else {
//   console.log("Doesn't meet the qualifications!");
// };

// END CODING CHALLENGE #3
////////////////////////////////////////

// The Switch Statement
// ----------------------------
// const day = 'saturday';

// switch(day) {
//   case 'monday': // day === 'monday'
//     console.log('Plan course structure');
//     console.log('Go to coding meetup');
//     break;
//   case 'tuesday':
//     console.log('Prepare theory videos');
//     break;
//   case 'wednesday':
//   case 'thursday':
//     console.log('Write code examples');
//     break;
//   case 'friday':
//     console.log('Record videos');
//     break;
//   case 'saturday':
//   case 'sunday':
//     console.log('Enjoy the weekend');
//     break;
//   default:
//     console.log('Not a valid day');
// };

// if (day === 'monday') {
//   console.log('Plan course structure');
//   console.log('Go to coding meetup');
// } else if (day === 'tuesday') {
//     console.log('Prepare theory videos');
// } else if (day === 'wednesday' || day === 'thursday') {
//     console.log('Write code examples');
// } else if (day === 'friday') {
//     console.log('Record videos');
// } else if (day === 'saturday' || day === 'sunday') {
//   console.log('Enjoy the weekend');
// } else {
//   console.log('Not a valid day');
// }

// Statements and Expressions
// -------------------------------
// 3 + 4 // This is an expression as it provides a value
// 1991 // Also an expression. Produces a value as well
// true && false && !false // Produces a Boolean value therefore is also an expression

// if (23 > 10) {
//   const str = '23 is bigger';
// }; // ^--This entire "if() statement" is an example of a statement. Doesn't produce a value.

// console.log(`I'm ${2037 - 1991} years old.`); // Template literals only accept expressions.

// The Conditional (Ternary) Operator
// -------------------------------------
// const age = 19;
// age >= 18 ? console.log('I like to drink wine!') : console.log('I like to drink water!'); // condition ? if statement (truthy) : else (falsy)

// let drink2;
// if (age >= 18) {
//   drink2 = 'wine';
// } else {
//   drink2 = 'water';
// };
// console.log(drink2);

// const drink = age >= 18 ? 'wine' : 'water'; // Ternary operator. Much cleaner way of doing the aove if/else statement, and its shorter
// console.log(drink); // Ternary operators are expressions!! can be used in template literals unlike if/else statements

// console.log(`I like to drink ${age >= 18 ? 'wine' : 'water'}`);

//////////////////////////////////////////
// CODING CHALLENGE #4

/*
Steven wants to build a very simple tip calculator for whenever he goes eating in a resturant. In his country, it's usual to tip 15% if the bill value is between 50 and 300. If the value is different, the tip is 20%.

1. Your task is to caluclate the tip, depending on the bill value. Create a variable called 'tip' for this. It's not allowed to use an if/else statement 😅 (If it's easier for you, you can start with an if/else statement, and then try to convert it to a ternary operator!)
2. Print a string to the console containing the bill value, the tip, and the final value (bill + tip). Example: 'The bill was 275, the tip was 41.25, and the total value 316.25'

TEST DATA: Test for bill values 275, 40 and 430

HINT: To calculate 20% of a value, simply multiply it by 20/100 = 0.2
HINT: Value X is between 50 and 300, if it's >= 50 && <= 300 😉

GOOD LUCK 😀
*/
const bill = 275;
const tip = bill >= 50 && bill <= 300 ? (15 / 100) * bill : (20 / 100) * bill;
console.log(`bill: ${bill}, tip: ${tip}, total: ${bill + tip}`);

const bill2 = 40;
const tip2 =
  bill2 >= 50 && bill2 <= 300 ? (15 / 100) * bill2 : (20 / 100) * bill2;
console.log(`bill: ${bill2}, tip: ${tip2}, total: ${bill2 + tip2}`);

const bill3 = 430;
const tip3 =
  bill3 >= 50 && bill3 <= 300 ? (15 / 100) * bill3 : (20 / 100) * bill3;
console.log(`bill: ${bill3}, tip: ${tip3}, total: ${bill3 + tip3}`);
