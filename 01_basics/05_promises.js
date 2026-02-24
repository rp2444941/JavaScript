//PROMISES — Thoda Aur Solid
//Promise once settled--->>state change nhi hoti.
// let p=new Promise((resolve,reject)=>{
//     resolve("Done");
//     reject("Error");// ignored
// });


//Microtask Queue kya hota hai ?
/**
 * Promises .then() -->microtask queue me jata hai.
 *  setTimeout()    --> macrotask queue me jata hai.
 */

// console.log("start");

// setTimeout(()=>console.log("Timeout"),0);

// Promise.resolve().then(()=>console.log("Promise"));
// console.log("End");

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


//problem kya thi ?(why promises needed ?)
/**
 * js single threaded hoti hai.
 * matlab ek time pe ek hi kaam kregi.
 * agar koi kam time leta hai (jaise api call, file read, database query),toh js ruk nhi skti.
 * 
 */
console.log("start");
setTimeout(()=>{
    console.log("Data mil gaya ");
},2000);

console.log("End");
/*
Start
End
Data mil gaya
*/ //kyu  ki js wait nhi krti, wo next line pe chali jati hai. 2 sec baad data mil gaya print hota hai.


//#2: Promise kys hota hai ?
/**
 * socho tumne pizza order kiya 
 * pizza ane me time lagega.
 * tab tak tumhare pass ek primise slip hai.
 * 
 * **---Promise ke 3 state hote hai---**
 * 1. Pending (abhi tak pizza nhi aaya(Pizza ban rha hai))
 * 2. Fulfilled (pizza aa gaya)
 * 3. Rejected (kuch galat ho gya, pizza nhi aaya)
 * same js me hota hai.
 */

//#3: _____Promise Syntax_____

let p=new Promise((resolve,reject)=>{
    let seccess=true;
    if(seccess){
        resolve("Kaam ho gaya !!");
    }else{
        reject("Error aa gaya!!");
    }
    
});

//#4: Promise ko kaise use krte hai ?(How to use promises ?)
/**
 * Promise ke .then() aur .catch() method use krte hai.
 * .then() --> resolved value ko handle karta hai.
 * .catch() --> rejected value ko handle karta hai.
 */

p.then(res=>console.log(res)).catch(err=>console.log(err));