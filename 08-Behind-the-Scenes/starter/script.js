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

*/