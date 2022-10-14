// 'use strict';

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
