//# How js Works Behinds the Scenes

// JavaScript is a single-threaded, synchronous programming language. This means that it can only execute one task at a time, and it will wait for that task to complete before moving on to the next one. However, JavaScript has a powerful event loop that allows it to handle asynchronous tasks, such as network requests or timers, without blocking the main thread.
// ek time pe sirf ek kam krti hai

// #Q: toh async kam kaise hote hai?
// Browser+Event Loop (ye baad me aayega)

//Q: js code run kaise hota hai?

//js engine (chrome me v8) 2 phase me kaam krta hai 

/**
 * phase 1: Memory Creation Phase
 * 
 * ==>Variables --->memory allocate(undefined)
 * ==>Functions --->pura code memory me store
 * 
 * phase 2: Code Execution Phase
 * 
 * ...line by line code execute
 * value assign hoti hai variables ko
 * function call hota hai
 * 
 */



var r=10;
function foo(){
    var b=20;
    console.log(r+b);
}
foo(); //30



//memory phase 
/* Name 	 Value
   a	     undefined
   foo	     function
*/

//execution phase
/* Name 	 Value
   a	     10
   foo() call --->new Execution  context create hota hai
   b	     20
   console.log(30)
*/

//#Execution Context kya hota hai?
/*Har function pe naya box banta hai :
1.Memory
2.code execution

Global execution context sabse pahle banta hai.
*/

//#Call stack (Interview favorite)
/**
 * call stack=plate stack
 * 
 * last aya --> pahle niklega(LIFO)
 */

function a() {
  b();
}
function b() {
  console.log("Hi");
}
a(); //HI


//Stack flow 
/*
| b() |
| a() |
| GEC |
*/

// #3 INterview Traps (Very important for interviews)

// ? trap 1:
/**Q:js synchronous hai ys asynchronous?
 * 
 * Ans: js synchronous & single threaded hai,
 * async behavior brower provide krta hai event loop ke through
 * 
 */

// ? trap 2:
/**Q: function call hone pr kya hota hai ?
 * 
 * ANS:
 * naya execution context create hota hai
 * call stack me push hota hai
 * jab function ka kam khatam hota hai to pop hota hai
 * 
 */
// ? trap 3:
/**Q: code execute hone se pahle kya hota hai?
 * 
 * Ans:
 * memory creation phase hoti hai jisme variables ko memory allocate hoti hai (undefined) aur functions ka pura code memory me store hota hai
 * 
 */

// #4 thinking practice 
//Q1
console.log(x);
var x=10;
//Ans: undefined
//kyu ? 
//memory creation phase me x ko memory allocate hoti hai but value assign nahi hoti isliye undefined print hota hai

//Q2:

fooo();
function fooo(){
    console.log("Hello");
}
//Ans: Hello
//kyu ? 
//memory creation phase me fooo function ka pura code memory me store hota hai isliye call karne pr Hello print hota hai

//#

    