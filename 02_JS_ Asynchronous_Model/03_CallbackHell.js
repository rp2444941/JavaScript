//# :===Callback Hell kya hota hai?
/**
 * jab hum multiple asynchronous operations ko callbacks ke andar callbacks me likhte jate hai,
 * to code bahut zyada nested or unreadable ho jata hai.
 * isko callback Hell ya Pyramid of Doom bolte hai.
 */

//Yaha ek callback hai, to problem nahi hai.(Simple Callback Example)
function fetchData(callback){
    setTimeout(()=>{
        console.log("Data fetched");
        callback()
        
    },1000)
}
fetchData(()=>{
    console.log("Processing data");
    
})


//Callback Hell Example
setTimeout(()=>{
    console.log("step1");
    setTimeout(()=>{
    console.log("step2");
    setTimeout(()=>{
    console.log("step3");
    setTimeout(()=>{
    console.log("step4");
    
},1000)
    
},1000)
    
},1000)

},1000)
/** 
step1 pahle ye print hoga 
step2 then ye 
step3 then ye 
step4 then ye
*/
//structure dekho 
/**
 * setTimeout
   ↓
   setTimeout
       ↓
       setTimeout
           ↓
           setTimeout
           Isliye ise pyramid of doom bolte hain.
 */

 /**==========❌ Callback Hell ki Problems
1️⃣ Code read karna mushkil
2️⃣ Debugging difficult
3️⃣ Error handling complicated
4️⃣ Code maintain karna difficult

==============Example real world:

Login user
   ↓
Get user profile
   ↓
Get user posts
   ↓
Get comments

Callbacks me likhoge to code bahut messy ho jayega.
  */

//==========✅ Callback Hell ka Solution
//1.Promise
getUser()
.then(user=>getPosts(user.id))
.then(posts=>getcomments(posts[0].id))
.then(comments=>console.log(comments))
.catch(err=>console.log(err))


/**Flow:
 * getUser()
   ↓
  getPosts()
   ↓
  getComments()
  
  Readable ho gaya.
 */