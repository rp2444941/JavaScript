/**
 * js is a synchronous single threaded langauge. which means execute one command at a time in specific order.
 * when js code is run an  execution context is created.
 * 
 * the execution context has two phase: memory and code execution phase
 * 
 *  memory phase variables are assigned undefined and functions are stored entirely.
 * 
 * in the execution phase the code is run line by line.
 *
 */

//Q 1:what is execution context?
/**ANS:
 * execution context is enveroment where js code is execute.
 * it has 2 phase: memory and code phase;
 * memory phase: variables are assigned undefined and function are stored entirely.
 * code phase : code run line by line in specific order.
 */

var a=10;
function test(){
    console.log("Hello");
    
}
test();

//memory phase: a--> undefined, test--->function stored

// execution phase: a=10, test() run 


//##: Global Execution Context Structure

/**Global Execution Context

Memory
------
a → undefined
test → function

Execution
---------
a = 10
test()
 */


//#: Practice Round (Very Important)
//Q1:
console.log(b);
var b=10;

/**
 * Memory phase
a → undefined

Execution:

console.log(a)
 */

//Q2:

test()
function test(){
    console.log("Hello js");// Hello js
    
}

console.log(c);
let c=5;

