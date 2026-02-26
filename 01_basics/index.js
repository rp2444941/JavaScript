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

//1:================Closures===========================

/**
 * closure ek function hai apne surrounding state(lexical enviroment ke sath) ko yaad rkhta hai, chahe parent function execute ho chuka ho.
 * matlab ek function ke andar doosra function bahar wale function ke variable ko access kar skta hai.
 */
function outer(val) {
    let name="Rudra";// bahar wale function ka variable
    function andar(){
   console.log(name+"ki age" +val+"hai");

    }
    return andar;// function return kiya, call nahi
}
let closureFn=outer(27);
closureFn();  // Output: "Rahul ki age 27 hai"

//yanha kya hua ?====

/**outer() function execute hua, usme name variable banaya or andar() function return kr diya.
 * normally outer() khatam hone ke bad uske variables garbage collect ho jate hai.
 * lekin anadr() function (jo ab closureFn me store hai ) abhi bhi name or val ko yaad rkhta hai isi feature ko closure khte hai.
 * 
 */


//=== Break Down (Step-by-step):==============
/*function ke andar function --> andar wala function (inner) outer functio ke variables ko access kr skta hai.

* return  hone ke bad bhi    -->jab outer function complete ho jaye tab bhi inner function outer ke variables ko "closes over" kr leta hai, isiliye 
closure.


*  lexical scoping         -->inner function lexical scope(physical postion in code )ke hisab se outer ke variables ko access krta hai.

*/ 


//******javaScript mein Closures ke Uses:=======
/**1. Data Privacy/encapsulation:
 * private veriable banane ke liye:
 */

 function outer(){
    let count=0;
    return{
        increment:function(){
            count++;
        },
        decrement:function(){
            count--;
        },
        getCount:function(){
            return count;
        }
    };
 }

 let myCounter=outer();
 myCounter.increment();
 console.log(myCounter.getCount()); // 1, but count directly access nahi kar sakte.


 /**2. Function Factories:
 * ek function se doosra function create karna.
 */

 function multiplier(factor){
    return function(number){
        return number*factor;
    }   
    }
let double=multiplier(2);
console.log(double(5)); // 10, double function 2 se multiply krta hai.


/**3. Event Handlers or Callbacks:
 * jab hum kisi event ke response me function call krte hai, toh closure uss event handler ko uske surrounding state ke sath yaad rkhta hai.
 *
 * Async operation me state preserve krne ke liye:
 */
 
for(var i=1;i<=3;i++){
    setTimeout(function(){
        console.log(i); // 4, 4, 4 - var ke karan loop khatam hone ke bad i ki value 4 ho jati hai. bina closure ke teeno bar 4 print hoga.
    },1000);
}

// closure fix:
for(var i=1;i<=3;i++){
    (function(j){ // IIFE (Immediately Invoked Function Expression) use kiya, j me current value of i pass kiya.
        setTimeout(function(){
            console.log(j); // 1, 2, 3 - ab closure ke karan har function apni alag copy of j ko yaad rkhta hai.
        },1000);
    })(i);
}


//**4. currying

//function chainning ke liye:

function add(x){
    return function(y){
        return x+y;
    }
};
let add5=add(5);
console.log(add5(3)); // 8, add5 function 5 ke sath add krta hai.  


//5. Module Pattern:
//code ko organize krne ke liye, private or public members ke sath:
// old-school modules banane ke liye (IIFE + closure):

let myModule=(function(){
    let privateVar="I am private";  
    return{
        getSecret:function(){
            return privateVar;
        }
    };
})();

console.log(myModule.getSecret()); // I am private, privateVar directly access nahi kar sakte.