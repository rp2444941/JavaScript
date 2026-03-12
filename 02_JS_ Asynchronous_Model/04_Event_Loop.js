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

