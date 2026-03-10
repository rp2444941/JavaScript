//2: =============Call Stack(JavaScript Ka Brain)=========

/**
 * call stack is a data struture use by js to keep track of function execution.
 * when function is called  it is pushed into the stack and when it finish execution it is pop out.
 * it follows the LIFO principle--Last in First out.
 */
function a(){
    console.log("A");
}
function b(){
    a()
}
b()
/**
 * global()
    ↓
    b()
    ↓
    a()
    ↓
    console.log()

 Stack LIFO (Last In First Out) follow karta hai.
 */
/**js single thread hai 
 * Call Stack

| console.log |
| function b  |
| function a  |
| global      |
 */

// Practice (Important)
// Q1:
function one(){
console.log("One");

}
function two(){
    one()
    console.log("Two");  
}
two()
/*ans:  One 
       Two

|  one()  |  
|  two()  |
| global  |
After execution it pops:
one() removed
two() removed
Stack back to:
| global |
*/
//Q2:

function r(){
    console.log("R");  
}
function p() {
    console.log("P");  
}
r();
p();
//outpu: R 
//   and P
/* 
Correct Stack Flow

Step 1

| global |

Step 2 → r()

| r() |
| global |

Output

R

Pop r()

| global |

Step 3 → p()

| p() |
| global |

Output

P

Pop p()

| global |

p() aur r() ek saath stack me nahi hote, kyunki JS one function at a time execute karta hai.

*/

//Q3: (Stack Thinking)
function x(){
    y();
}
function y(){
    z()
}
function z(){
    console.log("Z");
    
}
x();
//ans: Z
/*
|  z()   |
|  y()   |
|  x()   |
| global |

After execution it pops:
z() removed
y() removed
x() removed

Stack back to:
| global |
*/