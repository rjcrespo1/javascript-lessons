// Remember, we're gonna use strict mode in all scripts now!
'use strict';

const x = '23';

const calcAge = birthYear => 2037 - birthYear;

console.log(calcAge(1989 + 23));

// PROBLEM 1:
// We work for a company building a smart home thermometer. Our most recent task is this: "Given an array of temperatures of one day, calculate the temperature amplitude. Keep in mind that sometimes there might be a sensor error."

const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

// 1) Understanding the problem
// -- what is temp amplitude? Answer: difference between highest and lowest temp.
// -- how to compute the max and min temperatures?
// -- what is a sensor error and what to do when sensor error occurs? Answer: ignore the sensor errors and simply work with the rest of the data.

// 2) Break the problem up into sub-problems
// -- How to ignore errors?
// -- Find max value in temp array
// -- Find min value in temp array
// -- Subtract min from max (amplitude) and return it

const calcTempAmplitude = function (temps) {
  let max = temps[0]; // a good starting point is the first value of the array ==> temps[0]
  let min = temps[0];

  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];

    if (typeof curTemp !== 'number') continue;

    if (curTemp > max) max = curTemp; // if the current value of the array (curTemp) is greater than the current maximum value, then the maximum value will become will become this new value (max = curTemp)
    if (curTemp < min) min = curTemp; // if the current value of the array (curTemp) is less than the current minimum value, then the minimum value will become this new value (min = curTemp)
  }
  console.log('max:', max);
  console.log('min:', min);
  return max - min;
};
const amplitude = calcTempAmplitude(temperatures);
console.log(amplitude);

// PROBLEM 2:
// Function should now receive two arrays of temperatures.

// 1) Understanding the problem
// -- with two arrays, should we implement the same functionality twice? Answer: NO! Just merge the two arrays at the beginning

// 2) Breaking up the problem into sub-problems
// -- How to merge two arrays?

const calcTempAmplitudeNew = function (t1, t2) {
  const temps = t1.concat(t2); // concat is taking array 1 [t1] and array two [t2] and merging them together to create a whole new array [temps]
  console.log(temps);

  let max = temps[0];
  let min = temps[0];

  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];

    if (typeof curTemp !== 'number') continue;

    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log('max:', max);
  console.log('min:', min);
  return max - min;
};
const amplitudeNew = calcTempAmplitudeNew([3, 5, 1], [9, 0, 5]);
console.log(amplitudeNew);

// =======================================================
// DEBUGGING:
const measureKelvin = function () {
  const measurement = {
    type: 'temp',
    unit: 'celsius',

    // 3) FIX THE BUG ==> NOW THAT YOU FOUND THE BUG YOU CAN GO BACK IN YOUR CODE AND FIX IT
    // value: Number(prompt('Degrees in Celsius:')), // the prompt function always returns a string by default which is why we get back 10273. ("10" + "273") = "10273"
    // added Number() in the prompt to convert the string to a number
    value: 10
  };

  // 2) FIND THE BUG: ==> CONSOLE.LOG() TO FIND THE BUG IN YOUR CODE
  console.log(measurement);
  // console.table(measurement);
  console.log(measurement.value);
  // console.warn(measurement.value);
  // console.error(measurement.value);
  const kelvin = measurement.value + 273;
  return kelvin;
};

// 1) IDENTIFY THE BUG: ==> SEE A BUG IN THE FINAL CODE
console.log(measureKelvin());

// DEBUGGING IN CHROME: 
// go into your dev tools and open the "sources" tab then click on the script where the bug is. (scrpt.js for this example)
// now when we our in our code in the dev tools we can set "break points." To toggle the break point simply click on the empty space to the left of the code line.
// Break points cause the code execution to stop at that particular point. 

// ======================================================
// USING A DEBUGGER:
const calcTempAmplitudeBug = function (t1, t2) {
    const temps = t1.concat(t2); // concat is taking array 1 [t1] and array two [t2] and merging them together to create a whole new array [temps]
    console.log(temps);
  
    let max = 0;
    let min = 0;
  
    for (let i = 0; i < temps.length; i++) {
      const curTemp = temps[i];
  
      if (typeof curTemp !== 'number') continue;
  
      if (curTemp > max) max = curTemp;
      if (curTemp < min) min = curTemp;
    }
    console.log('max:', max);
    console.log('min:', min);
    return max - min;
  };
  const amplitudeBug = calcTempAmplitudeBug([3, 5, 7], [9, 4, 5]);
  console.log(amplitudeBug);