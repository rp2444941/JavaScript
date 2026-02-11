//a closure is the combination of a function together with reference to its surrounding state(the lexical environment)

// Basic 
function outer(){
    let count=0;
    function outer(){
        count++;
        console.log(count);
            
    }
    return inner;
}

const counter=outer();
counter()  // 1
counter()  // 2
counter()  // 3

//what's happening ?

/**
 * 1. outer() runs.
 * 2. it creates a veriable count
 * it returns inner function.
 * normally count should be destroyed after outer() finishes.
 * but inner() remebers count.   and that remebering ability =closure.
 */

//# why closures are important
//cloures help in:

//1.Data Privacy(Encapsulation)

function createBankAccount(balance){
    return{
        deposite(amount){
            balance=balance+amount;
            console.log(balance);
            
        },
        getBalance(){
            return balance;
        }
    };
}

const account=createBankAccount(10000);
account.deposite(5000);
console.log(account.getBalance()); // 

//account.balance ❌ undefined   # balance cannot be accessed directly:

//2. Function Factories
function multiply(x){
    return function(y){
        return x*y;
    };
}
 const double=multiply(2)
 console.log(double(5));

 //double remembers x = 2.
 