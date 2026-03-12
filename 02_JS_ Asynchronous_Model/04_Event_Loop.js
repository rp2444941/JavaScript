//4:================Event Loop – The Traffic Cop=========
/**
 * Event loop ka kam hai stack empty hone par queue se callback uthana.
 */

while(true){
    if(callStack.isEmpty()){
        if(callbackQueue.hasTasks()){
            const task=callbackQueue.dequeue();
            callStack.push(task);
        }
    }
}

/*Visual Loop:
     ┌─────────────────────────────────────┐
     │         EVENT LOOP (always running) │
     └─────────────────────────────────────┘
               │
               ▼
     ┌─────────────────┐
     │ Call Stack      │
     │ Empty?          │
     └─────────────────┘
           │ Yes
           ▼
     ┌─────────────────┐
     │ Callback Queue  │
     │ Has tasks?      │
     └─────────────────┘
           │ Yes
           ▼
     ┌─────────────────┐
     │ Move task from  │
     │ Queue to Stack  │
     └─────────────────┘
           │
           ▼
     (Execute task)
*/

//Event Loop Practice

//Q1:
console.log('A');
setTimeout(()=>console.log('B'),0);
console.log('C');

//Q2:

console.log('1');
setTimeout(()=>{
    console.log('2');
    
},1000)
setTimeout(()=>{
    console.log('3');
    
},0)
console.log('4');


//Q3:
console.log("start");
setTimeout(()=>{
    console.log('Timeout 1');
    
},0);
Promise.resolve()
.then(()=>{
    console.log('Promise 1');
    
})
setTimeout(()=> console.log("Timeout 2"),0);
console.log('End');


//Q4:
setTimeout(()=> console.log('A'),0);
setTimeout(()=>{
    console.log("B");
    setTimeout(()=>{
        console.log('C');
        
    },0);
    
},0)
setTimeout(()=>console.log('D'),0)

//Q5:

console.log('First');

setTimeout(() => console.log('Second'), 0);

Promise.resolve()
  .then(() => {
    console.log('Third');
    setTimeout(() => console.log('Fourth'), 0);
  });

Promise.resolve()
  .then(() => console.log('Fifth'));

console.log('Sixth');


//Q6:

async function foo() {
  console.log('2');
  await null;
  console.log('4');
}
console.log('1');
foo();
console.log('3');
/**Rule (yaad rakhne layak)
async function call hote hi run hota hai, but only jab tak uske andar pehla await nahi aa jata.
Jaise hi await aaya, function pause ho jata hai aur control bahar (caller ke next line) ko mil jata hai.
await ke baad wala part microtask queue me schedule hota hai (baad me chalega).

await sirf async function ke andar execution ko pause karta hai.
Bahar wala code (caller) wait nahi karta, wo next line chalata rehta hai.
 */




//5. ============================================Callback Queue & Web APIs==========

console.log("A");
setTimeout(() => console.log("B"), 1000);
setTimeout(() => console.log("C"), 0);
console.log("D");

/**Time 0ms:
   Stack: [log("A")] → Output: A
   setTimeout(B,1000) → Web API (timer started)
   setTimeout(C,0)    → Web API (timer started)
   Stack: [log("D")] → Output: D
   Stack empty.

Time ~0ms (C's timer expires instantly):
   Web API sends C's callback to Queue.
   Queue: [C]

Event Loop sees stack empty → moves C to Stack:
   Stack: [C] → log("C") → Output: C
   Stack empty.

Time 1000ms (B's timer expires):
   Web API sends B's callback to Queue.
   Queue: [B]

Event Loop moves B to Stack → Output: B.

Final Output: A, D, C, B
 */


//6. ===================setTimeout – Deep Visual

console.log("1");

setTimeout(() => {
  console.log("2");
}, 0);

console.log("3");

/**Step 1:
   Stack: [log("1")]
   Output: 1
   Stack empty.

Step 2:
   Stack: [setTimeout]
   setTimeout → Web API (0ms timer)
   Stack empty.

Step 3:
   Stack: [log("3")]
   Output: 3
   Stack empty.

Step 4: (0ms later)
   Web API: timer complete → callback moves to Queue.
   Queue: [() => log("2")]

Step 5: Event Loop
   Stack empty? ✅
   Queue has task? ✅ → move callback to Stack.
   Stack: [() => log("2")] → log("2") → Output: 2
   Stack empty. */