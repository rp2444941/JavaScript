//PROMISES — Thoda Aur Solid
//Promise once settled--->>state change nhi hoti.
let p=new Promise((resolve,reject)=>{
    resolve("Done");
    reject("Error");// ignored
});


//Microtask Queue kya hota hai ?
/**
 * Promises .then() -->microtask queue me jata hai.
 *  setTimeout()    --> macrotask queue me jata hai.
 */

console.log("start");

setTimeout(()=>console.log("Timeout"),0);

Promise.resolve().then(()=>console.log("Promise"));
console.log("End");

//Microtask (Promise) pehle execute hota hai.

//click point
/** Promise 3 states rakhta hai.
 * Pending(abhi tak result nhi aya)
 * fulfilled (success --> .then)
 * Rejected (failure --> .Catch)**
 * 
 */

/**
 * sir promise asynchronous operations handle krne ka modern 
 * tareeka hai. Callback hell se bachata hai. Ek bar settled ho gya to
 * state change nhi hota --immutable hota hai.
 * 
 */