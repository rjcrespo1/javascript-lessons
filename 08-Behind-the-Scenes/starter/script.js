'use strict';

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

const name = 'Ryan'; // GLOBAL => name = "Ryan"; first = <function>; second = <function>; x = <unknown>

const first = () => { // FIRST() => a = 1; b = <unknown>
    let a = 1;
    const b = second(7, 9);
    a = a + b;
    return a;
}

function second(x, y) { // SECOND() => c = 2; arguments = [7, 9]
    var c = 2;
    return c;
}

const x = first();

/*

=== The Call Stack ===
-The call stack is the place where the execution contexts get stacked on top of each other to keep track of where we are in the execution
-The EC that is on top of the call stack is the one that is currently running. When it is finished running it will be removed from the stack and execution will go back to the previous EC

+++ SCOPING AND SCOPE IN JAVASCRIPT: CONCEPTS
=== Scoping ===
-Scoping controls how our programs variables are organized and accessed by the JavaScript engine.
-Lexical Scoping: Scoping is controlled by the placement of functions and blocks in the code. (a function inside of another function has access to the variables of the parent function)
-Variable scoping is influenced by where we specifically write our functions and code blocks.
-

*/