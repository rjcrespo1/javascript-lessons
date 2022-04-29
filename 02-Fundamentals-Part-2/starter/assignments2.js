////////////////////////////////
// FUNCTIONS
// function describeCountry(country, population, capitalCity) {
//     return `${country} has ${population} million people and its capital city is ${capitalCity}!`;
// }

// const info1 = describeCountry('USA', 300, 'Washington D.C.');
// const info2 = describeCountry('Spain', 46, 'Madrid');
// const info3 = describeCountry('Italy', 59, 'Rome');

// console.log(info2);

////////////////////////////////////

////////////////////////////////////
// FUNCTION DECLARATIONS VS. EXPRESSIONS
// worldPop = 7900
// function percentageOfWorld1(population) {
//     return (population / 7900) * 100;
// };

// const percentUSA = percentageOfWorld1(300);
// const percentSpain = percentageOfWorld1(46);
// const percentItaly = percentageOfWorld1(59);

// const percentageOfWorld2 = function (population) {
//     return (population / 7900) * 100;
// };

// const percentUSA2 = percentageOfWorld2(300);
// const percentSpain2 = percentageOfWorld2(46);
// const percentItaly2 = percentageOfWorld2(59);

// console.log(percentUSA);
// console.log(percentItaly2)

////////////////////////////////////

///////////////////////////////////
// ARROW FUNCTIONS
// const percentageOfWorld3 = population => (population / 7900) * 100;
// const percentUSA3 = percentageOfWorld3(390);
// console.log(percentUSA3);

/////////////////////////////////////
// FUNCTIONS CALLING OTHER FUNCTIONS
// const describePopulation = (country, population) => {
//     const worldPercent = percentageOfWorld1(population);
//     const description = `${country} has ${population} million people, which is about ${worldPercent}% of the world.`
//     console.log(description);
// }

// describePopulation('USA', 300);
// describePopulation('Spain', 46);
// describePopulation('China', 1400);
////////////////////////////////////////

////////////////////////////////////////
// INTRO TO ARRAYS
// const populations = [300, 46, 1400, 59];
// console.log(populations.length === 4);

// function percentageOfWorld1(population) {
//   return (population / 7900) * 100;
// }
// const percentages = [
//   percentageOfWorld1(populations[0]),
//   percentageOfWorld1(populations[1]),
//   percentageOfWorld1(populations[2]),
//   percentageOfWorld1(populations[3]),
// ];
// console.log(percentages);
////////////////////////////////////////////

////////////////////////////////////////////
// BASIC ARRAY OPERATIONS
// const neighbors = ["Italy", "Spain", "Belgium"];

// neighbors.push("Utopia");
// console.log(neighbors);

// neighbors.pop();
// console.log(neighbors);

// if (!neighbors.includes("Germany")) {
//   console.log("Probably not a Central European Country");
// } else {
//   console.log("Is probably a Central European Country");
// }

// neighbors[neighbors.indexOf("Spain")] = "Republic of Spain";
// console.log(neighbors);
////////////////////////////////////////////////////

//////////////////////////////////////////////////
// INTRO TO OBJECTS
// const myCountry = {
//   country: "USA",
//   capital: "Washington D.C.",
//   language: "English",
//   population: 300,
//   neighbors: ["Canada", "Mexico"],
// };

/////////////////////////////////////////////////
// DOT VS. BRACKET NOTATION
// USA has 300 million english-speaking people, 2 neighboring countries and a capital called Washington D.C.
// console.log(
//   `${myCountry.country} has ${myCountry.population} million ${myCountry.language}-speaking people, ${myCountry.neighbors.length} neighboring countries and a capital called ${myCountry.capital}`
// );
// myCountry.population += 2;
// myCountry["population"] -= 2;
// console.log(myCountry.population);
////////////////////////////////////////////////////

/////////////////////////////////////////////////
// OBJECT METHODS
const myCountry = {
  country: "USA",
  capital: "Washington D.C.",
  language: "English",
  population: 300,
  neighbors: ["Canada", "Mexico"],

  describe: function () {
    return `${this.country} has ${this.population} million ${this.language}-speaking people, ${this.neighbors.length} neighbouring countries and a capital called ${this.capital}`;
  },

  checkIsland: function () {
    this.isIsland = this.neighbors.length === 0 ? true : false;
    return this.isIsland;
  },
};

console.log(myCountry.describe());
console.log(myCountry.checkIsland(myCountry.island)); // one way of calling the function

myCountry.checkIsland();
console.log(myCountry.isIsland); // another way of calling the function
//////////////////////////////////////////////////////

//////////////////////////////////////////////////////
// ITERATION: THE FOR LOOP
// for (let i = 1; i <= 50; i++) {
//   console.log(`Voter number ${i} is voting`)
// }
//////////////////////////////////////////////////////