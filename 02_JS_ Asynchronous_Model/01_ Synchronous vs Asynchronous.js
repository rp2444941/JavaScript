//# 1: Synchronous vs Asynchronous
// Synchronous (Blocking)
console.log("start");
console.log("Middle");
console.log("End");

/*Execution Flow:
   [Start] ──(wait)──> [Middle] ──(wait)──> [End]

Output:
   Start
   Middle
   End
*/

/**Ek kaam khatam hoga tabhi agla shuru hoga
 * Blocking: agar koi kam slow hua (eg: file read), to pura program ruk jayega
 */

// Asynchronous (Non-Blocking)
console.log("Start");
setTimeout(()=>{
    console.log("Middle");
    
},2000);
console.log("End");

/**
 * Execution Timeline:
0 ms:  console.log("Start")  → Output: Start
       setTimeout sent to Web API (2 sec timer)
       console.log("End")     → Output: End

2000 ms: Timer complete → callback goes to Queue
         Event Loop moves callback to Stack
         console.log("Middle") → Output: Middle

Final Output:
   Start
   End
   Middle
 */

/**Non-blocking:
 * code aage badhta hai, background task baad me 
 * complete hota hai.
 */

/**Synchronous (Single Counter):
   Customer1: Order → Wait → Get food → Leave
               ↓
   Customer2: Order → Wait → Get food → Leave  ❌ Slow

Asynchronous (Token System):
   Customer1: Order → Token1 → Sit
   Customer2: Order → Token2 → Sit
   Customer3: Order → Token3 → Sit
               ↓
   Kitchen prepares in parallel
   Token1 ready → Customer1 gets food
   Token3 ready → Customer3 gets food
   Token2 ready → Customer2 gets food  ✅ Fast, no waiting
 */


