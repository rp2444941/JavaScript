var userName = "Rudra";

function greet() {
    var greeting = "Hello ";
    console.log(greeting + " " + userName);
}
greet(); // Hello Rudra
/**
Memory(Heap):
- userName: undefined (created when code starts, then assigned "Rudra")
- greet: function() { ... }
- greeting: "Hello " (created when greet() is called, then destroyed after execution)
*/
/**
 * variable ko undefined mark kar diya (placeholder)
 * function ko pura ka pura yaad kar liya (code ke saath)
 * 
 * isko hoisting kehte hain - variables aur functions ko memory me allocate karna
 * 
 * Closure: jab ek function apne parent scope ke variables ko access kar sakta hai, even after parent function has finished executing.
 */

var globalVar = "I am global";
function outerFunction() {
    var middle = "I am outer";
    function inner() {
        console.log(globalVar); // I am global  -bahar se mila
        console.log(middle);    // I am outer   -parent se mila (closure)
    }
    inner();

}
outerFunction();
//DHundne ka order: inner->outer->global

// ---------- Hoisting ----------

//exam me jaise teacher pahle question paper dekh leti hai phir answer check krte hai. waise hi js  phle sare variable or functions dekh leta hai (Memory allocate krta hai) phir execute krta hai.

// ---------- Asynchronous js ----------
//abhi tak jo smjhe wo synchronous tha (ek ke bad ek).
//lekin kabhi-kabhi kuch kaam time lgta hai.
/**
 * API call, file read, database query, setTimeout, etc. ye sab asynchronous operations hain.
 * 
 * API call
 * setTimeout(() => console.log("Hello after 1 second"), 1000);
 * 
 * file read
 * fs.readFile('file.txt', (err, data) => {
 *     if (err) throw err;
 * 
 * toh js uss kaam ko side me vej deta hai or age ka code chalata rehta hai.
*/

/**
 * Summary - Sabse Important Points
Concept              	Simple Meaning
JavaScript Engine	   Code ko execute karne wali machine
Call Stack           	Kaun sa kaam chal raha hai - register
Execution Context	   Code execute hone ka kamra
Memory Heap         	Variables/functions store hote hain
Hoisting            	Code run hone se pehle variables ko yaad karna
Scope Chain	            Cheezein dhundne ka order (andar → bahar)
Event Loop	             Background tasks ko manage karta hai

 */

/**
 * "Dekho bhai, JavaScript ek factory ki tarah hai. Pehle wo
 *  tumhare saare variables aur functions ko yaad karta hai 
 * (hoisting), phir line-by-line execute karta hai. Jab function call 
 * hota hai, ek naya mini-factory ban jaata hai. Sab kaam ek stack mein
 *  track hota hai - last in, first out. Aur agar koi kaam time
 *  lega (jaise API call), toh usko side mein bhej deta hai aur baaki
 *  ka code chalata rehta hai. Bas!"
 */


//1. Closures-"jab function apne parents ke sath ghar chhot kar bhi unki yad rkhta hai"
//Real life Example:
/**
 * soch--Tu dehri se bengaluru shift ho gya, lekin tu apne maa ke ghar ka khana yaad rkhta hai. tere pass uska recipe nhi hai , lekin tu use bula ke mang leta hai jab bhook lage.
 * 
 */
function maaKaGhar(){
    let khana = "Daal Chawal";

    return function beta(){
        console.log("Mujhe khana chahiye: "+khana);//ye khana ab bhi accessible hai.
        
    }
}
let beta = maaKaGhar();// beta bengluru gaya lekin maa ka khana yaad hai.
beta(); // Mujhe khana chahiye: Daal Chawal


// closure =function +uske outer scope ke variable ka snapshot(jo uske birt time the).

//interviews trick:
//--->>closure ek aisa concept hai jisme inner function apne outer function ke variables ko tab bhi eccess kr skta hai jab outer function execute ho chuka ho.
//

//Predict this:
function counter() {
    let count = 0;

    return {
        increment: function() {
            count++;
        },
        getCount: function() {
            return count;
        }
    };
}

const c1 = counter();
c1.increment();
c1.increment();

const c2 = counter();
c2.increment();

console.log(c1.getCount());
console.log(c2.getCount());
2,1



/**  Closure is a function bundled together with its lexical environment.
     It allows the inner function to access variables of the outer function even
     after the outer function has finished execution, because JavaScript uses lexical scoping.
 */

     /**
      * A closure is created when a function remembers and accesses variables from its lexical scope 
      * even after the outer function has executed.
      */


     function counter(){
        let count=0;

        return function(){
            count++;
            console.log(count);
            
        }
     }
     let increment=counter();
    increment();
    increment();