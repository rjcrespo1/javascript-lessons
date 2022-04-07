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

const now = 2037;
const ageRyan = now - 1989;
const ageSarah = now - 2018;

console.log(now - 1991 > now - 2018);

let x, y;
x = y = 25 - 10 - 5; // ==> x = y = 10, x = 10
console.log(x, y);

const averageAge = (ageRyan + ageSarah) / 2;
console.log(ageRyan, ageSarah, averageAge);


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

// TEST DATA 1:
const markMass1 = 78;
const markHeight1 = 1.69;
const johnMass1 = 92;
const johnHeight1 = 1.95;

const markBMI1 = markMass1 / markHeight1 ** 2;
const johnBMI1 = johnMass1 / johnHeight1 ** 2;
console.log(markBMI1);
console.log(johnBMI1);

const markHigherBMI1 = markBMI1 > johnBMI1;

console.log(markHigherBMI1);

// TEST DATA 2:
const markMass2 = 94;
const markHeight2 = 1.88;
const johnMass2 = 85;
const johnHeight2 = 1.76;

const markBMI2 = markMass2 / markHeight2 ** 2;
const johnBMI2 = johnMass2 / johnHeight2 ** 2;
console.log(markBMI2);
console.log(johnBMI2);

const markHigherBMI2 = markBMI2 > johnBMI2;

console.log(markHigherBMI2);

// END CODING CHALLENGE #1
///////////////////////////////////