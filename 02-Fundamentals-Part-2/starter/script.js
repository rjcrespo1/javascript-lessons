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

// function calcAge1(birthYear) {
//     return 2022 - birthYear;
// };

// const age1 = calcAge1(1989); // with declarations, you're allowed to call the function with declaration before the actual function itself
// console.log(age1);

// // Function Expression
// const calcAge2 = function (birthYear) {
//     return 2022 - birthYear;
// };

// const age2 = calcAge2(1991);
// console.log(age2);


// Arrow Functions
// ----------------------------------------------------------
// const calcAge3 = birthYear => 2037 - birthYear; // serves the same purpose as the function above but it is much cleaner and a lot easier to write
// const age3 = calcAge3(1989);
// console.log(age3);

// const yearsUntilRetire = (birthYear, firstName) => {
//     const age = 2022 - birthYear;
//     const retirement = 65 - age;
//     // return retirement;
//     return `${firstName} retires in ${retirement} years`;
// }

// console.log(yearsUntilRetire(1989, 'Ryan'));
// console.log(yearsUntilRetire(1979, 'Jim'));


// Fucntions Calling Other Functions
// --------------------------------------------------------
// function cutFruit(fruit) { // the parameter "2" which we are calling at the end of the function is being used as a parameter here. so it is replacing fruit in both lines
//     return fruit * 5; // this line turns into return 2 * 4 or return 3 * 4. depending on the value which you give when you call the function. in our case we gave it two values...2 and 3.
// };

// function foodProcessor(apples, oranges) { // the value 2 being brought in will passed onto the cutFruit(apples) function which we are calling below this line. same thing with oranges and 3
//     const applePieces = cutFruit(apples); // the value 2 that is brought in from above actually goes to the first function cutFruit(fruit) as the argument
//     const orangePieces = cutFruit(oranges);
//     // console.log(apples, oranges);
//     const juice = `Juice with ${applePieces} pieces of apples and ${orangePieces} pieces of oranges.`;
//     return juice;
// };

// console.log(foodProcessor(2, 3)); // the 2 will replace the apples parameters in the foodProcessor function and same thing with the 3 and orange parameters

// Reviewing Functions
// -------------------------------------------------------------
const calcAge = function (birthYeah) {
    return 2037 - birthYeah;
  }
  
  const yearsUntilRetirement = function (birthYeah, firstName) {
    const age = calcAge(birthYeah);
    const retirement = 65 - age;
  
    if (retirement > 0) {
      console.log(`${firstName} retires in ${retirement} years`);
      return retirement;
    } else {
      console.log(`${firstName} has already retired`);
      return -1;
    }
  }
  
  console.log(yearsUntilRetirement(1991, 'Jonas'));
  console.log(yearsUntilRetirement(1950, 'Mike'));


////////////////////////////////////////////
// Coding Challenge #1

/*
Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new gymnastics discipline, which works differently.
Each team competes 3 times, and then the average of the 3 scores is calculated (so one average score per team).
A team ONLY wins if it has at least DOUBLE the average score of the other team. Otherwise, no team wins!

1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
2. Use the function to calculate the average for both teams
3. Create a function 'checkWinner' that takes the average score of each team as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner to the console, together with the victory points, according to the rule above. Example: "Koalas win (30 vs. 13)".
4. Use the 'checkWinner' function to determine the winner for both DATA 1 and DATA 2.
5. Ignore draws this time.

TEST DATA 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
TEST DATA 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27

HINT: To calculate average of 3 values, add them all together and divide by 3
HINT: To check if number A is at least double number B, check for A >= 2 * B. Apply this to the team's average scores 😉

GOOD LUCK 😀
*/

const calcAverage = () => {
    score1, score2, score3
}