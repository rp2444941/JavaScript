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



/** JavaScript Engine me kya hota hai (Step by Step)

JavaScript code 2 phases me run hota hai:

1️⃣ Memory Creation Phase
2️⃣ Execution Phase

1️⃣ Memory Creation Phase

JS engine sab variables aur functions ko memory allocate karta hai.

Code:

var a = 10

Memory me store hota hai:

a → undefined

Abhi value assign nahi hui hai.

2️⃣ Execution Phase

Code line by line execute hota hai.

Line 1
console.log(a)

Memory me a already exist karta hai:

a → undefined

Isliye output:

undefined

Line 2
a = 10

Ab value assign hoti hai.

Memory update:

a → 10

Q: Why undefined?

Because variables declared with var are hoisted.
During the memory creation phase they are assigned undefined,
and actual value assignment happens during execution.
*/

console.log(a);
let a=10;
/*
output:  ReferenceError: Cannot access 'a' before initialization
1️⃣ Memory Creation Phase

JS engine variables ko memory allocate karta hai.

a → <uninitialized>

Important:

let aur const variables hoist hote hain

lekin undefined assign nahi hota

Unki state hoti hai:

uninitialized

Isi area ko bolte hain:

Temporal Dead Zone (TDZ)

TDZ =
block start → variable initialization tak ka time.

2️⃣ Execution Phase
Line 1
console.log(a)

Engine a ko access karne ki koshish karta hai.

But a abhi:

uninitialized

aur TDZ me hai.

Isliye error:

ReferenceError: Cannot access 'a' before initialization

Execution wahi ruk jata hai.


Variables declared with let and const are hoisted but remain in the Temporal Dead Zone until initialization.
Accessing them before initialization throws a ReferenceError.

🧠 Comparison (Very Important)
Keyword	Memory Phase	       Access before init
var	   undefined	           allowed
let	   uninitialized	       ReferenceError
const  uninitialized	       ReferenceError
*/
