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

//#5: Real life Example (API call)

fetch("https://jsonplaceholder.typicode.com/posts/1")
.then((res)=>res.json())
.then(data=>{
    console.log(data); 
})
.catch((err)=>{
console.log("Error: ",err);

});
/**Yaha:
Server se data aane me time lagta hai
Isliye fetch promise return karta hai
 * sabse zyada use API Call me hota hai.
 */

//#6: Promise Chaining

fetch("https://api.com/user")
.then(res=>res.json())
.then(user =>{
    console.log(user);
    return fetch(`https://api.com/post/${user.id}`);
})
.then(res=>res.json())
.then(post=>{
    console.log(post);
})
.catch(err=>console.log(err));

/**ye clean hai callback hell se:
 * 
 * Ek ka result dusre me use krna;
 * 
 */

//#7: Promise All (Interview Important)
/**Agar multiple api ek sath call krni ho:
 * 
 */
Promise.all([
    fetch("api1"),
    fetch("api2"),
    fetch("api3")
])
.then(responses=>{
    console.log("sab aa gaya");
    
})
.catch(err=>{
    console.log("Error: ",err); 
});

/**ye tab use hota hai jab multiple api call krni ho aur unka result chahiye hota hai.
 * agar koi bhi api fail hoti hai to catch block me jayega.
 * 
 */

//#8: Promise.race()
//==jo sabse pahle complete ho:
Promise.race([
    fetch("slow_api"),
    fetch("fast_api"), 
])
.then(res=>{
    console.log("Sabse fast api ka result: ",res);  
})
.catch(err=>{  
    console.log("Error: ",err);
});

/**ye tab use hota hai jab multiple api call krni ho aur unme se sabse fast api ka result chahiye hota hai.
 * agar koi bhi api fail hoti hai to catch block me jayega.
 * 
 */

//#9 : Real life me kaha use hota hai ?
/** * API call 
 * File read/write 
 * Database query 
 * file upload/download
 * Payment gateway
 * Authentication/Authorization
 * image loading
 * Location Fetch 
 * chat app Message Send
 * Otp verification
 * 
 */// har jagah janha time lgta hai:

 //#10: Advanced Concepts(Very important)

 //promise automatically return hota hai async function se.

 async function getData(){
    return "Data mil gaya";
 }
 // ye actually return krta hai : Promise{"Data mil gaya"}
 // isliye ansync/await promise ka hi modern version hai.


 //#11: Interviews me kaise explain kre ?
/**
 * promise ek object hai jo future me operation complete hone wale async 
 * operation ka result represent krta hai.
 * iske 3 state hote hai: pending, fulfilled, rejected.
 * ye callback hell ko avoid krta hai aur better error handling provide krta hai.
 */
 