/**
 * what is async ?
 * what is await ?
 * how async works behind the scenes ?
 * Examples of using async/await
 * Error Hadnling 
 * Interviews
 * Async await vs Promise.then/.catch
 * 
 */

//async is keyword is used create a async function
// Always return promise (either i return promise or none promise(like number etc) it wrapet inside promise then return it.)

const p=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("Promise Resolved Value!!");
    },5000); //10000 mili sec mins 10 sec
 });

 const p2=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("Promise Resolved Value!!");
    },10000); 
 });
// async and await are used handel the promises.



// await can only used inside an async function
async function handlePromise(){   
    console.log("Pratap");
// js engine was waiting for promise to resolved.  
    const val=await p;
    console.log("Rudra"); 
    console.log(val);

     const val2=await p2;
    console.log("Rudra2"); 
    console.log(val2);
    
}
handlePromise();

// function getData(){

//     //js engine will not await for promise to be resolve it will moved to next line 
//     p.then(res=>console.log(res));
//     console.log("Rudra");
    
// }
// getData();
