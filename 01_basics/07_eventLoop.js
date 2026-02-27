
/**==================EVENT LOOP======================= */

/*1️⃣ JavaScript Single Threaded Hai

JS ek time pe ek hi kaam karta hai.

Sab synchronous code Call Stack me execute hota hai.

Async ka magic → Event Loop

2️⃣ JavaScript Runtime Structure
Call Stack
Web APIs
Microtask Queue
Macrotask Queue (Callback Queue)
Event Loop


3️⃣ Call Stack

Function calls yahan push hote hain.

Execution complete hone pe pop hote hain.

Stack empty hona zaroori hai async run hone ke liye.

Example:
*/
function a() {
  b();
}
function b() {
  console.log("Hello");
}
a();

/*4️⃣ Web APIs (Browser / Node)

Browser handle karta hai:

setTimeout

setInterval

fetch

DOM events

Ye call stack block nahi karte.


5️⃣ Macrotask Queue (Callback Queue)

Examples:

setTimeout

setInterval

setImmediate (Node)

DOM events


6️⃣ Microtask Queue ⚡ (High Priority)

Examples:

Promise.then / catch / finally

queueMicrotask

MutationObserver

process.nextTick (Node - even higher priority)


⭐ MOST IMPORTANT RULE

👉 Jab Call Stack empty hota hai:

Pehle Microtasks execute hote hain (complete queue)

Phir ek Macrotask(callback Queue).

Phir cycle repeat hoti hai
*/

console.log('Start');

setTimeout(() => {
  console.log('Inside setTimeout');
}, 0);

Promise.resolve().then(() => {
  console.log('Inside Promise');
}); 

console.log('End');

/*Output:
Start
End
Inside Promise
Inside setTimeout
*/
/*Reason:
*Sync first
*Microtask (Promise) next
*Macrotask (setTimeout) last
*/

setTimeout(() => {
  console.log('A');
}, 0);

Promise.resolve().then(() => {
  console.log('B');
  Promise.resolve().then(() => {
    console.log('C');
  });
});
console.log("D");

// Because:

// Sync → D

// Microtasks → B → C

// Macrotask → A

/*Event Loop is a mechanism that continuously checks the call stack and
 executes microtasks first and then macrotasks when the stack becomes empty.*/

 /*🏆 5 Interview Trap Points

✔ setTimeout(fn, 0) immediate nahi hota
✔ Promises > setTimeout
✔ await = microtask
✔ JS single-threaded hai, browser multi-threaded
✔ Microtasks complete before next macrotask
*/

/*Final mental model:

SYNC CODE
↓
STACK EMPTY?
↓
RUN ALL MICROTASKS
↓
RUN ONE MACROTASK
↓
REPEAT
*/