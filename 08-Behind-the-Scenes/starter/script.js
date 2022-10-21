'use strict';

// const { threadId } = require('worker_threads');

// *NOTES*

/*

+++ JS ENGINES
A JS engine is a program that executes javascript code. Every browser has its own engine.
Every JS engine contains both a CALL STACK and a HEAP.
The CALL STACK is where our code is actually executed using "execution context."
HEAP is an unstructured memory pool which stores all the objects that our application needs.

+++ COMPILATION VS. INTERPRETATION
Compilation: Entire code is converted into machine code at once and written to a binary file that can be executed by a computer.
Interpretation: Interpreter runs through the source code and executes it line by line.

+++ JUST-IN-TIME COMPILATION OF JS
When a piece of code first enters the engine the first step is to parse the code(read the code). During the parsing process the code is parsed into a data structure called the Abstract Syntax Tree(AST).
This works by first splitting up each line of code into pieces that are meaningful to the language and then saving all these pieces into the tree in a structured way. This step also checks if there are any syntax errors.
The resulting tree will later be used to generate the machine code.


+++ EXECUTION CONTEXTS AND THE CALL STACK
-In the beginning, only codes outside of functions will be executed. (Functions need to be called to be executed)
-Javascript code always runs inside an execution context.
-Execution context is the enviroment in which a piece of JavaScript is executed. Stores all the necessary information for some code to be executed.
-There is always only one global execution context in any JavaScript project no matter the size of the project.
-Steps of Execution: Creation of global execution (for top-level code) => Execution of top-level code (inside global EC) => Execution of functions and waiting for callbacks.
-One EC per function: for each and every function call a new execution context will be created containing all the information that is necessary to run that exact function.
=== What's inside execution context? ===
1. Variable Enviroment
-let, const, var
-Functions
-Arguments Object
2. Scope chain
-consists of references to variables that are located outside of the current function
-to keep track of the scope chain, it is stored in each execution context
-each context gets a special variable called "THIS" keyword
3. This Keyword
==========================================
-Execution contexts belonging to arrow functions DO NOT get their own arguments keyword nor do they get the "this" keyword
-Arrow functions can use the arguments object and the "this" keyword from their closest regular function parent 

*/
// Example of Execution Context:

// const name = 'Ryan'; // GLOBAL => name = "Ryan"; first = <function>; second = <function>; x = <unknown>

// const first = () => {
//   // FIRST() => a = 1; b = <unknown>
//   let a = 1;
//   const b = second(7, 9);
//   a = a + b;
//   return a;
// };

// function second(x, y) {
//   // SECOND() => c = 2; arguments = [7, 9]
//   var c = 2;
//   return c;
// }

// const x = first();

/*

=== The Call Stack ===
-The call stack is the place where the execution contexts get stacked on top of each other to keep track of where we are in the execution
-The EC that is on top of the call stack is the one that is currently running. When it is finished running it will be removed from the stack and execution will go back to the previous EC

+++ SCOPING AND SCOPE IN JAVASCRIPT: CONCEPTS
=== Scoping ===
-Scoping controls how our programs variables are organized and accessed by the JavaScript engine.
-Lexical Scoping: Scoping is controlled by the placement of functions and blocks in the code. (a function inside of another function has access to the variables of the parent function)
-Variable scoping is influenced by where we specifically write our functions and code blocks.
-Scope: Space or enviroment in which a certain variable is declared (variable enviroment in case of functions). There is global scope, function scope, and block scope.
-Scope of a variable: The region of our code where a certain variable can be accessed.

=== The 3 Types of Scope ===
-Global Scope ~~ Function Scope ~~ Block Scope
-Global scope is for top-level code. It's outside of any function or block. The variables declared in global scope are accessible anwhere
-In function scope the variables are accessible ONLY inside a function, not outside. (AKA LOCAL SCOPE)
-In block scope the variables are accessible ONLY inside the block. (block = everything in between the curly braces)
-ONLY APPLIES TO LET AND CONST VARIABLES. 
-Functions are also block scoped (only in strict mode)

=== The Scope Chain === 

const myName = 'Ryan';

function first() {
  const age = 32;

  if (age >= 30) { // true
    const decade = 3;
    var millenial = true;
  }

  function second() {
    const job = 'developer';

    console.log(`${myName} is a ${age}-old ${job}`);
  }

  second();
}

first();

~~ Considering only variable declarations ~~

-GLOBAL SCOPE: myName = "Ryan"
Inside the global scope we have a scope for the "first function" => first()
-FIRST() SCOPE: age = 30
The function => second(), is inside the other two scopes
-SECOND() SCOPE: job = "developer"

-Every scope always has access to all the variables from all its outer scopes (from the parent scopes)
-the second() scope can access the age variable which is located in the first() scope at the very bottom.
-Additionally, the first() scope can access variables which are in the global scope. (myName = "Ryan", first())
-Because the first() scope has access to the global scope this means that the second() scope has access to the global scope as well because it is being accessed in the first() scope. (basically nested scopes)
-All of this also applies to function arguments. But this example, we're only using variables to get the point across
-the process in which the scopes look into other scopes to use a variable is called VARIABLE LOOKUP
-A certain scope will NEVER have access to the variables of an inner scope. Basically the reverse of what we just did above
-Scopes can look up in the scope chain. They CANNOT look down

-The last remaining scope in the above code is the decade variable. Millenial won't work because block scopes dont work with the var variable. Only const and let
-The block scope (decade variable) does not get access to the second() scope and the same the other way around

=== Scope Chain vs Call Stack ===

const a = "Ryan";
first();

function first() {
  const b = 'Hello!';
  second();

  function second() {
    const c = 'Hi!';
    third();
  }
}

function third() {
  const d = 'Hey!';
  console.log(d + c + b + a);
}

~~ Call Stack ~~
|| Order in which the functions are called ||

-THIRD() STACK: d = "Hey!"
-SECOND() STACK: c = "Hi!"
-FIRST() STACK: b = "Hello"
    second = <function>
-GLOBAL STACK: a = "Ryan"
    first <function>
    third <function>

~~ Scope Chain In Order ~~
******* SCOPE CHAIN HAS NOTHING TO DO WITH THE ORDER IN WHICH THE FUNCTIONS ARE CALLED ******* (THE ORDER IN WHICH THEY ARE WRITTEN IN THE CODE IS ALL THAT MATTERS)
Global Scope always is first!!

-GLOBAL SCOPE: a = "Ryan"
    first = <function>
    third = <function>
-FIRST() SCOPE: b = "Hello!"
    second = <function>
    PLUS ALL THE VARIABLES FROM THE PARENT SCOPE:
    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    a = "Ryan"
    first = <function>
    third = <function>
-SECOND() SCOPE: c = "Hi!"
    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    b = "Hello!"
    second = <function>
    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    a = "Ryan"
    first = <function>
    third = <function>
-THIRD() SCOPE: d = "Hey!"
    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    a = "Ryan"
    first = <function>
    third = <function>

-Because the variable "c" is in the second() function, and the third() function can't access it, we get an error.
-The third() function or scope only has access to itself or the global scope. And scoping only works from the bottom up. Therefore global cannot look up and neither can the third() scope because it is a part of the global scope.

=== SUMMARY:
-Scoping asks the question: "Where do variables live?" or "Where can we access a certain variable and where not?"
-There are three types of scope in JavaScript: the global scope, scopes defined by functions, and scopes defined by blocks
-Only let and const variables are block scoped. Variables declared with var end up in the closest function scope
-In JavaScript we have what's called lexical scoping, so the rules of where we can access variables are based on exactly where the code blocks and functions are written
-Every scope always has access to all the variables from all its outer scopes. This is the scope chain!
-When a variable is not in the current scope, the engine looks up in the scope chain until it finds the variable it's looking for. This is called variable lookup
-The scope chain is essentially a one-way street: a scope will NEVER have access to the variables of an inner scope. Only outer
-The scope chain in a certain scope is equal to adding together all the variable enviroments of all the parent scopes
-The scope chain has nothing to do with the order in which functions are called. It does not affect the scope chain at all!

*/

// +++ SCOPING IN PRACTICE

/*
function calcAge(birthYear) {
  const age = 2022 - birthYear;
  console.log(firstName);

  function printAge() {
    let output = `${firstName}, you are ${age}, born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      var millenial = true;

      // Creating NEW variable with same name as outer scope's variable
      const firstName = 'Steven'; // JS will always look for the variable name in the current scope FIRST. And since it is in the current scope, it will show as "Steven" for this particular ${firstName}

      // Reassigning outer scope's variable
      const output = 'NEW OUTPUT!'; // added const in front output to make it a brand new variable. Wihtout const, we're just redefining the old output variable and it will return as "NEW OUTPUT"
      
      const str = `Oh, and you are a millenial, ${firstName}!`;
      console.log(str);
      
      function add(a, b) {
        return a + b;
      }
      
    }
    console.log(millenial); // this can be outside of the block because of the variable "var". Const and let cannot be recognized in the scope outside of block scopes.
    console.log(add(2, 3));
    console.log(output);
  }
  printAge();

  return age;
}

const firstName = 'Ryan';
calcAge(1989);
*/

// +++ VARIABLE ENVIROMENT: HOISTING AND THE TDZ

// - Hoisting: Makes some types of variables accessible/usable in the code before they are actually declared. "Variables lifted to thw top of their scope."

// ~~ Behind the scenes ~~

// - Before execution, code is scanned for variable declarations, and for each variable, a new property is created in the variable enviroment object.
// - Function declararions are hoisted. The initial value in the variable enviroment is set to the actual function. (We can use function declarations before they are actually declared in the code)
// - Variables declared by "var" are also hoisted, but in a different way. Unlike functions, when we try to access a var variable before its declared in the code, we don't get the declared value. We get undefined.
// - Variables declared by let and const are not hoisted. (They technically are, but their value is basically set to uninitialized. So there is no value to work with at all. And in practice it's as if hoisting was not happening at all). So we say that these variables are placed in a Temporal Dead Zone(TDZ) which makes it so that we can't access the variables between the beginning of the scope and the place where the variables are declared.
// - contd... If we attempt to use a let or const variable before it's declared, we get an error. Let and const are both block scoped! Meaning they only exist in the block in which they were created.
// - For funtion expressions and arrows it all depends on if they were created using var or let/const. These types of functions are simply variables. So they behave the exact same way as variables in regards to hoisting.

// ~~ Temporal Dead Zone ~~
// const myName = 'Ryan';

// if (myName === 'Ryan') {
//   console.log(`Ryan is a ${job}`);
//   const age = 2022 - 1989;
//   console.log(age);
//   const job = 'developer'; // the TDZ is the for the job variable is the three above lines...265, 266, 267.
//   console.log(x);
// }

// +++ HOISTING AND TDZ IN PRACTICE

// -Hoisting with variables

// console.log(me);
// console.log(job);
// console.log(yearBorn);

// var me = 'Ryan'; // --> var variables are hoisted but they are hoisted to the value of undefined
// let job = 'developer';
// const yearBorn = 1989;

// -Hoisting with functions

// console.log(addDecl(2, 3));
// console.log(addExpr(2, 3));
// console.log(addArrow(2, 3));

// function addDecl(a, b) {
//   // --> this type of function can be hoisted. will work as a normal function
//   return a + b;
// }

// const addExpr = function (a, b) {
//   // --> this type of function cannot be hoisted because of the const variable. this type of function acts as a variable
//   return a + b;
// };

// var addArrow = (a, b) => a + b; // --> this function with the var variable will act just like a normal expression with the var variable. except the console will show a different kind of error. but it is essentially the same thing(an undefined function)

// // Example:

// console.log(numProducts);
// if (!numProducts) deleteShoppingCart(); // --> (numProducts) is undefined

// var numProducts = 10;

// function deleteShoppingCart() {
//   console.log('All products deleted!');
// }

// var x = 1;
// let y = 2;
// const z = 3;

// console.log(x === window.x); // true
// console.log(y === window.y); // false
// console.log(z === window.z); // false

// !!!! DON'T USE VAR TO DECLARE VARIABLES !!!!
// !!!! DECLARE VARIABLES AT THE TOP OF EACH SCOPE FOR CLEANER CODE !!!!
// !!!! ALWAYS DECLARE ALL FUNCTIONS FIRST AND USE THEM ONLY AFTER THE DECLARATION !!!!

// +++ THE "THIS" KEYWORD

// --> "this" keyword/variable: Special variable that is created for every execution context (every function). Takes the value of (points to) the "owner" of the function which is the THIS keyword is used.
// --> the value of "this" is not static (not always the same). It depends on how the function is actually called, and its value is only assigned when the function is actually called.

// -Different ways functions can be called-
// 1. Method -> this = <Object that is calling the method>
const ryan = {
  name: 'Ryan',
  year: 1989,
  calcAge: function () {
    return 2022 - this.year;
  },
};
ryan.calcAge();

// 2. Simple function call -> this = undefined (this is only true in strict mode. if not in strict mode, "this" will point to the global object)

// 3. Arrow functions -> this = <this of surrounding function(lexical this)> (arrow functions do not get their own "this" keyword)

// 4. Event listener -> this = <DOM element that the handler function is attached to>

// THIS will never point to the function in which we are using. It will also never point to the variable enviroment of the function.

// +++ THE "THIS" KEYWORD IN PRACTICE

// console.log(this);

// const calcAges = function (birthYears) {
//   console.log(2022 - birthYears);
// console.log(this);
// };
// calcAges(1989);

// const calcAgesArrow = birthYears => {
//   console.log(2022 - birthYears);
// console.log(this);
// };
// calcAgesArrow(1980);

// const ryanC = {
//   year: 1989,
//   calcAge: function () {
//     console.log(this);
//     console.log(2022 - this.year);
//   },
// };
// ryanC.calcAge();

// const matilda = {
//   year: 2017,
// };

// matilda.calcAge = ryanC.calcAge; // this is called method borrowing
// matilda.calcAge();

// const f = ryanC.calcAge;
// f(); // <- undefined

// +++ REGULAR FUNCTIONS VS. ARROW FUNCTIONS

// var firstName = 'Matilda';

const ryanC = {
  firstName: 'Ryan',
  year: 1989,
  calcAge: function () {
    console.log(this);
    console.log(2022 - this.year);
  },

  greet: () => {
    console.log(this);
    console.log(`Hey ${this.firstName}`)
  },
};
ryanC.greet(); // -> "Hey undefined"
// If I add (var firstName = 'RandomName') the call using ryanC.greet(); will now show "Hey RandomName" because of the variable of var. [line 386]
// an arrow function will return the greeting undefined. a regular function will return the greeting as completed
