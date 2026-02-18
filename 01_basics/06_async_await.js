//ASYNC/AWAIT-->>
/**
 * Promises ka sugar coated version-->jaise biryani ko spoon se khana vs hath se khana.
 */

//Real life example---
/**
 * tu waiter se bola --> Biryani lao.
 * Waiter: Thodi der lagenge.
 * Tu: theek hai jab tak aa rhi hai, main phone chala leta hu.
 * Jab biryani aayi --> Tu ne phone band karke biryani khayi.
 * 
 */

//await sirf async function ke andar use hota hai.

// Promise way:
fetchData()
.then(res=>console.log(res))
.catch(err=>console.log(err));

//Async/await way:

try{
    let res=await fetchData();
    console.log(res);  
}catch(err){
    console.log(err);
    
}

//Q: kya await thread ko block krta hai ?
/**ans:
 * nhi.
 * ye sirf async function ke andar execution pause krta hai.
 * js event loop background me kaam krta rhta hai.
 * 
 */

//Q: explain hoiting , promises, async/await in one flow:
/**
 * js ek single -threaded , event-loop based laguage hai.
 * hoisting memory allocation phase ka behavior hai. asynchronous 
 * operations ko handle krne ke liye phle callbacks the, phot promises aye jo 
 * jo microtask queue use krte hai.async/await promises ke uper built 
 * syntactic sugar hai jo readable, synchronous-looking code
 * likhne deta hai without blocking the main thread.
 * 
 */