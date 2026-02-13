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
//var variables are hoised and initialized with undefined during memory creation phase.

//Q2:

fooo();
function fooo(){
    console.log("Hello");
}
//Ans: Hello
//kyu ? 
//memory creation phase me fooo function ka pura code memory me store hota hai isliye call karne pr Hello print hota hai


var n=2;
function square(num){
    var ans = num*num;
    return ans;
}
var square2 = square(n);
var square4 = square(4);

// when we run the hole code a globale execution contex is created and memory creation phase me
//   n=undefined,
// square() function ka pura code memory me store hota hai
// square2=undefined  --> square2 variable so don't be confused
// square4=undefined, --> square4 variable so don't be confused
//  memory allocate hoti hai

//after all code executed then second phase is code execution phase 
// code execution phase me
// n=2
// square2 = 4 (because square(2) = 2*2 = 4)  square2 me function is invoked now when the the function is invoked a new excution context is created for that function and memory creation phase me ans=undefined hota hai and code execution phase me ans=num*num hota hai yani ans=2*2=4 hota hai aur return hota hai 4 to square2 me 4 assign hota hai
// square4 = 16 (because square(4) = 4*4 = 16)  now same for this a brand new excution context is create for this function and memory creation phase me ans=undefined hota hai and code execution phase me ans=num*num hota hai yani ans=4*4=16 hota hai aur return hota hai 16 to square4 me 16 assign hota hai

// now program is finished and we have n=2, square2=4, square4=16 in our memory then also GEC is destroyed and memory is free for garbage collection.

//Q1.

//call stack 
/*
| square(4) |
| square(2) |
|    GEC    |
*/
// when  function is invoked  then new excution context is created and pushed into call stack and when function is finished then that excution context is popped out from call stack

//Q2:
//  js code execute hone se pahle memory creation phase hoti hai jisme variables ko memory allocate hoti hai (undefined) aur functions ka pura code memory me store hota hai 

    
foo();
var foo = function() {
  console.log("Hello");
}
//Ans: TypeError:
//foo is not a function
//kyu ? 
//memory creation phase me foo variable ko memory allocate hoti hai but value assign nahi hoti isliye undefined print hota hai aur jab hum foo() call karte hai to wo undefined ko function ki tarah call karne ki koshish karta hai isliye TypeError: foo is not a function error aata hai

//"Because only the variable declaration is hoisted, not the function expression. During execution phase, foo is undefined, and calling undefined as a function causes a TypeError."

console.log(a);
let a = 10;
//Ans: ReferenceError: Cannot access 'a' before initialization
//kyu ? 
//
//"Both var and let are hoisted, but only var is initialized with undefined during memory creation phase. let remains in Temporal Dead Zone until the declaration line is executed."

// var wale case se diffent hai kyunki var variables are hoisted and initialized with undefined during memory creation phase, but let variables are hoisted but not initialized during memory creation phase. They are in a temporal dead zone until their declaration is evaluated, and accessing them before initialization results in a ReferenceError.

//"Because let variables are hoisted but not initialized during memory creation phase. They are in a temporal dead zone until their declaration is evaluated, and accessing them before initialization results in a ReferenceError."


{
    console.log(a);//TDZ
    let a = 10;
    
}

//1:Global TDZ hota hai ya block TDZ ?

//Ans: block TDZ hota hai, kyunki let aur const block scoped hote hai, to unka TDZ bhi block ke andar hota hai, global scope me nahi hota hai

//2:TDZ exactly kab start hota hai?

//Ans:TDZ starts: from the beginning of the scope until the variable declaration line executed.

//3: Agar let ko declare kare to kya TDZ concept exist krega?

//Ans: Haan, TDZ concept exist karega, kyunki let variables block scoped hote hai, to unka TDZ bhi block ke andar hota hai, global scope me nahi hota hai, to agar let variable ko declare kiya jata hai to uska TDZ start hota hai jab block ke andar let variable declare hota hai, aur end hota hai jab us variable ko initialize kiya jata hai, yani jab us variable ko value assign ki jati hai


let a = 10;

{
   console.log(a);
   let a = 20;
}
//output: ReferenceError: Cannot access 'a' before initialization
//kyu ? 
//block ke andar let a declare hai to uska TDZ start hota hai jab block ke andar let a declare hota hai, aur end hota hai jab us variable ko initialize kiya jata hai, yani jab us variable ko value assign ki jati hai, to jab console.log(a) execute hota hai to wo block ke andar a variable ko access karne ki koshish karta hai jo ki TDZ me hai isliye ReferenceError: Cannot access 'a' before initialization error aata hai
// kyu outer a use nhi hua ?
//"Because the block scope creates a new variable 'a' that shadows the outer 'a'. The inner 'a' is in the Temporal Dead Zone until its declaration is evaluated, so accessing it before initialization results in a ReferenceError. The outer 'a' is not accessible within the block due to shadowing."