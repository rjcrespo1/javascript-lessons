// Activating Strict Mode
// ===============================================================
"use strict";

// let hasDriversLicense = false;
// const passTest = true;

// if (passTest) hasDriversLicense = true;
// if (hasDriversLicense) console.log('I can drive!');

// const interface = 'Audio';
// const private = 633;

// Functions
// ===============================================================
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
// ===============================================================

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
// ===============================================================
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
// ===============================================================
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
// ===============================================================
// const calcAge = function (birthYeah) {
//   return 2037 - birthYeah;
// };

// const yearsUntilRetirement = function (birthYeah, firstName) {
//   const age = calcAge(birthYeah);
//   const retirement = 65 - age;

//   if (retirement > 0) {
//     console.log(`${firstName} retires in ${retirement} years`);
//     return retirement;
//   } else {
//     console.log(`${firstName} has already retired`);
//     return -1;
//   }
// };

// console.log(yearsUntilRetirement(1991, "Jonas"));
// console.log(yearsUntilRetirement(1950, "Mike"));

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

// const calcAverage = (a, b, c) => (a + b + c) / 3; // no need for a return. the value after the "=>" gets returned automatically
// console.log(calcAverage(4, 8, 3));

// // Test 1
// let scoreDolphins = calcAverage(44, 23, 71); // we use let here because we will change this later for the 2nd test case
// let scoreKoalas = calcAverage(65, 54, 49);
// console.log(scoreDolphins, scoreKoalas);

// const checkWinner = function(avgDolphins, avgKoalas) {
//     if (avgDolphins >= 2 * avgKoalas) {
//         console.log(`Dolphins Win! (${avgDolphins} vs. ${avgKoalas})`);
//     } else if (avgKoalas >= 2 * avgDolphins) {
//         console.log(`Koalas Win! (${avgKoalas} vs. ${avgDolphins})`);
//     } else {
//         console.log('No Team Wins...');
//     }
// }
// checkWinner(scoreDolphins, scoreKoalas);

// checkWinner(400, 200); // using random numbers to test out the other conditions. You don't HAVE to use the original arguments when calling the function

// Test 2
// scoreDolphins = calcAverage(85, 54, 41); // we don't use let here because we are overwriting the variable itself. So if you use let somewhere else in your code you can simply change it by only using the variable name
// scoreKoalas = calcAverage(23, 34, 27);
// console.log(scoreDolphins, scoreKoalas);

// checkWinner(scoreDolphins, scoreKoalas);

// END CHALLENGE
////////////////////////////////////////////////

// Intro to Arrays
// ===============================================================

// const friend1 = "Michael";
// const friend2 = "Steve";
// const friend3 = "Pete";

// const friends = ["Mike", "Steve", "Pete"]; // Arrays are a cleaner way of putting multiple variables together without writing tons of different variables
// console.log(friends); // Arrays always start counting from 0. So 'Mike' == 0, 'Steve' == 1, 'Pete' == 2. But the length of the array is still 3 because there's 3 items in it

// // const years = new Array(1991, 1984, 2008, 2020); // a different way to create arrays. Above method is much more common
// // console.log(years);

// console.log(friends[0]); // the number specifies which item in the array to return. So this one would show 'Mike'
// console.log(friends[1]); // ==> 'Steve'
// console.log(friends[2]); // ==> 'Pete'

// console.log(friends.length); // .length is a property which shows how many elements are in the array ==> 3
// console.log(friends[friends.length - 1]); // this will return the final element in the array.

// friends[2] = "Bill";
// console.log(friends);

// Only primitive values are immutable. Arrays are not primitive values

// friends = ['bob', 'ellis']; // this won't work. You can't change the whole array, only the values inside it

// const firstName = "Ryan";
// const ryan = [firstName, "Crespo", 2022 - 1989, "Developer", friends]; // you can put other arrays inside arrays ==> [friends]
// console.log(ryan);
// console.log(ryan[4]);

// Exercise
// const calcAge = function (birthYeah) {
//   return 2037 - birthYeah;
// };
// const years = [1990, 1967, 2002, 2010, 2018];

// const age1 = calcAge(years[0]);
// const age2 = calcAge(years[1]);
// const age3 = calcAge(years[years.length - 1]);

// console.log(age1, age2, age3);

// const ages = [
//   calcAge(years[0]),
//   calcAge(years[1]),
//   calcAge(years[years.length - 1]),
// ];
// console.log(ages);

// const ages2 = [age1, age2, age3]; // this array is doing the same thing that the above array [ages] is doing. This just cleans the code and is much easier to write
// console.log(ages2);

// Basic Array Operations (Methods)
// ===============================================================
// const friends = ["Mike", "Steve", "Pete"];

// // Add Elements
// const newLength = friends.push("Jay"); // .push() adds elements to the end of a currently existing array. Also the push() value does return something. It returns the length of the new array
// console.log(friends, newLength); // ==> [new array] & 4

// friends.unshift("John");
// console.log(friends); // the unshift() method adds an element to the beginning of the array. Also returns the length of the array

// // Remove Elements
// const popped = friends.pop(); // .pop() removes the last element of the array. Doesn't need any arguments
// console.log(friends, popped); // ==> [new array] & "element that was removed"   .pop() does return a value but unlike push() and unshift(), .pop() returns the element that was removed.

// friends.shift(); // the shift() method removes the first element of the array. And just like pop(), the value it returns is the element that was removed
// console.log(friends);

// console.log(friends.indexOf("Pete")); // indexOf returns the position of the element(s) being called...so in this case the console should say 2. If an element which is not in the array is called it returns as -1

// console.log(friends.includes("Jay")); // the includes() method simply checks if an element is included in the array and returns true if it is and false if it's not in the array
// console.log(friends.includes("Steve")); // includes() checks for strict equalities, so if there's a number and you check that number in a string it will come back false

// if (friends.includes("Pete")) {
//   console.log("Pete is a good friend!");
// }

///////////////////////////////////////
// Coding Challenge #2

/*
Steven is still building his tip calculator, using the same rules as before: Tip 15% of the bill if the bill value is between 50 and 300, and if the value is different, the tip is 20%.

1. Write a function 'calcTip' that takes any bill value as an input and returns the corresponding tip, calculated based on the rules above (you can check out the code from first tip calculator challenge if you need to). Use the function type you like the most. Test the function using a bill value of 100.
2. And now let's use arrays! So create an array 'bills' containing the test data below.
3. Create an array 'tips' containing the tip value for each bill, calculated from the function you created before.
4. BONUS: Create an array 'total' containing the total values, so the bill + tip.

TEST DATA: 125, 555 and 44

HINT: Remember that an array needs a value in each position, and that value can actually be the returned value of a function! So you can just call a function as array values (so don't store the tip values in separate variables first, but right in the new array) 😉

GOOD LUCK 😀
*/

// const calcTip = (bill) => {
//   return bill >= 50 && bill <= 300 ? (15 / 100) * bill : (20 / 100) * bill;
// }; // this function simply checks if the bill is between 50 and 300, it adds a 15% tip. Otherwise it will add a 20% tip

// const bills = [125, 555, 44]; // simple array for different bills for testing purposes
// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])]; // [calcTip(bills[0])] ==> this takes the function above and substitutes the actual values of bills to perform the calculation of the function
// console.log(tips); // this should log the expected tips, based off the function, in an array to the console

// const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]]; // this just adds the bills with the tips and brings us back the total
// console.log(total);

// END CHALLENGE
/////////////////////////////////////////////

// Intro to Objects
// ===============================================================
// const ryan = {
//   firstName: "Ryan",
//   lastName: "Crespo",
//   age: 2022 - 1989,
//   occupation: "Software Engineer",
//   friends: ["Josh", "Daniel", "Charles"],
// }; // objects contain properties which are listed as {key: value}. every object must have this. every property is seperated by a comma and must all be wrapped in curly braces

// Dot vs. Bracket Notation
// ===============================================================
// console.log(ryan);

// console.log(ryan.lastName); // DOT NOTATION ==> this brings back a single property from our object above. (lastName) ==> 'Crespo'
// console.log(ryan["lastName"]); // BRACKET NOTATION ==> this allows you to put any expression in the brackets. you're not just limited to the keys from the object...example shown below

// const nameKey = "Name";
// console.log(ryan["first" + nameKey]); // ==> this expression makes "firstName" which is a key with a value of "Ryan"
// console.log(ryan["last" + nameKey]); // ==> this expression makes "lastName" which is a key with a value of "Crespo"

// console.log(ryan);

// const interestedIn = prompt(
//   "What do you want to know about Ryan? Choose between firstName, lastName, age, occupation, and friends"
// );
// console.log(ryan[interestedIn]); // in the prompt in the window, when you type in any of the keys it will return its value to the console. This only works with bracket notation.... ex: if I type firstName into the prompt it will show Ryan

// if (ryan[interestedIn]) {
//   console.log(ryan[interestedIn]);
// } else {
//   console.log(
//     "Wrong request! Choose between firstName, lastName, age, occupation, and friends"
//   );
// }

// ryan.location = "Miami"; // dot notation way of adding a property to the object
// ryan["twitter"] = "@rjcresp01"; // bracket notation way of adding a property to an object
// console.log(ryan);

// // Challenge: Log this line below to the console...
// // "Ryan has 3 friends, and his best friend is Josh"
// console.log(
//   `${ryan.firstName} has ${ryan.friends.length} friends, and his best friend is ${ryan.friends[0]}`
// );

// Object Methods
// ===============================================================
// const ryan = {
//   firstName: "Ryan",
//   lastName: "Crespo",
//   birthYear: 1989,
//   currentYear: 2022,
//   occupation: "Software Engineer",
//   friends: ["Josh", "Daniel", "Charles"],
//   hasDL: true,
//   // calcAge: function (birthYear) { // objects also allow you to use functions as a value of a property
//   //   return 2022 - birthYear;
//   // },

//   // calcAge: function () {
//   //   console.log(this) // 'this' points to the {ryan} object because we are using ryan.calcAge below. Therefore 'this' is the entire object. So we use this.birthYear to get the birth year from the {ryan} object. Same goes for the other keys if we want to use them
//   //   return 2022 - this.birthYear
//   //   // return 2022 - ryan.birthYear  ==>> this can work to but it is not good practice to repeat yourself. So use 'this' instead. You can change the object name and 'this' will still work.
//   // }

//   calcAge: function () {
//     this.age = this.currentYear - this.birthYear;
//     return this.age;
//   },
//   getSummary: function () {
//     return `${this.firstName} is a ${this.calcAge()}-year old ${this.occupation}, and he has ${this.hasDL ? 'a' : 'no'} driver's license.`
//   } // we used this.calcAge() instead of this.age because if we're not calling ryan.age anywhere we would get back undefined. this.calcAge() runs the function and returns the age no matter what
// };

// // console.log(ryan.calcAge(ryan.age)); // dot notation
// // console.log(ryan.age);
// // console.log(ryan['calcAge'](1989)); // bracket notation

// // console.log(ryan.calcAge(ryan.birthYear)); // dot notation
// // console.log(ryan['calcAge'](ryan['birthYear'])); // bracket notation

// // ------------------------------------------------------
// // Challenge: log this line below to the console by creating a new function property: getSummary...
// // "Ryan is a 33-year old Software Engineer, and he has a driver's license."
// console.log(ryan.getSummary());

/////////////////////////////////////////////
// Coding Challenge #3

/*
Let's go back to Mark and John comparing their BMIs! This time, let's use objects to implement the calculations! Remember: BMI = mass / height ** 2 = mass / (height * height). (mass in kg and height in meter)

1. For each of them, create an object with properties for their full name, mass, and height (Mark Miller and John Smith)
2. Create a 'calcBMI' method on each object to calculate the BMI (the same method on both objects). Store the BMI value to a property, and also return it from the method.
3. Log to the console who has the higher BMI, together with the full name and the respective BMI. Example: "John Smith's BMI (28.3) is higher than Mark Miller's (23.9)!"

TEST DATA: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.

GOOD LUCK 😀
*/

const mark = {
  fullName: "Mark Miller",
  mass: 78,
  height: 1.69,
  calcBMI: function () {
    this.bmi = this.mass / (this.height * this.height);
    return this.bmi;
  },
};

const john = {
  fullName: "John Smith",
  mass: 92,
  height: 1.95,
  calcBMI: function () {
    this.bmi = this.mass / (this.height * this.height);
    return this.bmi;
  },
};
mark.calcBMI();
john.calcBMI();
console.log(mark.bmi, john.bmi);

if (john.bmi > mark.bmi) {
  console.log(
    `${john.fullName}'s BMI(${john.bmi}) is higher than ${mark.fullName}'s BMI(${mark.bmi})`
  );
} else {
  console.log(
    `${mark.fullName}'s BMI(${mark.bmi}) is higher than ${john.fullName}'s BMI(${john.bmi})`
  );
}

// END CODING CHALLENGE
///////////////////////////////////////////////

// Iteration: The For Loop
// ================================================================
// console.log("Lifting weights repetition 1 🏋️‍♀️");
// console.log("Lifting weights repetition 2 🏋️‍♀️");
// console.log("Lifting weights repetition 3 🏋️‍♀️");
// console.log("Lifting weights repetition 4 🏋️‍♀️");
// console.log("Lifting weights repetition 5 🏋️‍♀️");
// console.log("Lifting weights repetition 6 🏋️‍♀️");
// console.log("Lifting weights repetition 7 🏋️‍♀️");
// console.log("Lifting weights repetition 8 🏋️‍♀️");
// console.log("Lifting weights repetition 9 🏋️‍♀️");
// console.log("Lifting weights repetition 10 🏋️‍♀️");

// The loop has three parts. The first is the initial value of a counter. Basically just setting a variable for a counter.
// The second is a logical condition that is evaluated before each iteration of the loop. The for loop will keep running as long as that condition stays TRUE.
// The third is where we update the counter after each iteration.
// After the loop, you can now write the code that you want repeated...or "looped"
for (let rep = 1; rep <= 10; rep++) { // rep++ is the same as doing rep = rep + 1. Just much shorter and cleaner to use rep++
  console.log(`Lifting weights repetition ${rep} 🏋️‍♀️`); // this prints all those console logs that we hard coded above, to the console.
} // we set rep at 1 and set the condition to stop once it got to 10 (rep <= 10) and we increased each increment of the loop by 1 (rep++).