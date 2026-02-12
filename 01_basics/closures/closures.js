//a closure is the combination of a function together with reference to its surrounding state(the lexical environment)

//  Closure = function + uske lexical environment ka reference

// ---------- Basic Example (Fixed) ----------
function outer() {
    let count = 0;

    function inner() {          //  inner function ka alag naam
        count++;
        console.log(count);
    }

    return inner;              //  ab inner defined hai
}

const counter = outer();
counter();  // 1
counter();  // 2
counter();  // 3

//  Kya ho raha hai?
/**
 * 1. outer() call hota hai.
 * 2. count variable create hota hai.
 * 3. outer() inner function return karta hai.
 * Normally, outer() khatam hote hi count destroy ho jana chahiye.
 * Par inner() count ko "yaad" rakhta hai. Yahi yaad rakhna = closure.
 */

// ---------- Closures Kyun Important Hain ----------

// 1️ Data Privacy / Encapsulation
function createBankAccount(balance) {
    return {
        deposit(amount) {            // ✅ spelling sahi ki (deposite → deposit)
            balance = balance + amount;
            console.log(`Balance: ₹${balance}`);
        },
        getBalance() {
            return balance;
        }
    };
}

const account = createBankAccount(10000);
account.deposit(5000);             // Balance: ₹15000
console.log(account.getBalance()); // 15000

// account.balance ❌ undefined — direct access possible nahi

// 2️ Function Factories
function multiply(x) {
    return function (y) {
        return x * y;
    };
}

const double = multiply(2);
console.log(double(5)); // 10 — double ko x = 2 yaad hai

// ---------- Lexical Environment ----------
let globalVar = "I am a global variable";

function outerFunction() {
    let outerVar = "I am an outer variable";

    function innerFunction() {
        let innerVar = "I am an inner variable";
        console.log(globalVar); // global access
        console.log(outerVar);  // outer variable yaad hai (closure)
        console.log(innerVar);  // apna local variable
    }

    return innerFunction;
}

const myClosure = outerFunction();
myClosure();
/**
 * Output:
 * I am a global variable
 * I am an outer variable
 * I am an inner variable
 */

//  Ye isliye kaam karta hai kyunki innerFunction, outerFunction ke andar define hui hai.
// Call karte waqt innerFunction apne parent scope (outerVar) aur global scope (globalVar) ko
// "yaad" rakhti hai — matter nahi karta ki use kahan se call kiya.

// ---------- Closures ke Saath Tricks ----------
function out() {
    let arr = [];

    return function () {
        arr.push("hello");
        console.log(arr);
    };
}

const myFunc = out();
myFunc(); // ["hello"]
myFunc(); // ["hello", "hello"]
myFunc(); // ["hello", "hello", "hello"]

//  arr har baar yaad rakha jaata hai — closure ki wajah se
//Q1: ye kya output dega?
 for (var i = 0; i <= 3; i++) {
    setTimeout(() => console.log(i), 1000);
}
// Output: 4, 4, 4, 4 — kyunki var i global scope mein hai aur loop ke baad i ki value 4 ho chuki hai

//Q2: ISKO KAISE FIX KAR SAKTE HAIN?
// Solution 1: let ka use karna (block scope)
for (let i = 0; i <= 3; i++) {
    setTimeout(() => console.log(i), 1000);
}
// Output: 0, 1, 2, 3 — kyunki let i block scope mein hai aur har iteration ke liye alag i create hota hai

// Solution 2: IIFE (Immediately Invoked Function Expression) ka use karna
for (var i = 0; i <= 3; i++) {
    ((j) => {
        setTimeout(() => console.log(j), 1000);
    })(i);
}
// Output: 0, 1, 2, 3 — kyunki IIFE ke andar j variable create hota hai jo current value of i ko capture karta hai

//Q3: Private variale kaise banaye?
function createCounter() {
    let count = 0; // private variable

    return {
        increment() {
            count++;
            console.log(count);
        },
        decrement() {
            count--;
            console.log(count);
        },
        getCount() {
            return count;
        }
    };
}

const counter1 = createCounter();
counter1.increment(); // 1
counter1.increment(); // 2
counter1.decrement(); // 1
console.log(counter1.getCount()); // 1

// counter1.count ❌ undefined — direct access possible nahi, closure ke through hi access kar sakte hain
