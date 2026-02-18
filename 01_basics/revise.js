// //# PART 1 — Execution Context (Deep Understanding)
// /**
//  * js 2 phase me code run krta ha.
//  * 1. memory creation phase 
//  * 2. code execution phase 
//  */  
//   console.log(a);
//   var a=10;
// //   output:undefind 
//   console.log(b);
//   let b=10;
//   //output:Reference Error (TDZ-temprol dead zone hoisted but uninitialized)
//   //Uncaught ReferenceError: can't access lexical declaration 'b' before initialization

//   //#interview trap:
//   var c=10;
//   function test(){
//     console.log(c);
//     var c=20 
//   }
//   test();
//   //undefined;(hoisted inside function)
//   // function scope shadowing global

// //# PART 2 — Scope & Lexical Environment
// //Lexical Scope Rule:
// //inner function outer function access kr skta hai but vice versa not possible.

// let x=10;
// function outer(){
//     let x=20;

//     function inner(){
//         console.log(x);
//     }
//     inner()
// }
// outer()
// //ans:20 kyuki nearest scope pick hota hai.

// //# PART 3 — Call Stack
// //stack --> LIFO

// function one(){
//     two();
//     function two(){
//         three();
//     }

//     function three(){
//         console.log("Done");
        
//     }
// }
//  one();
// /*
//  | GEC  |
//  | one  |   ====>>> first one push then pop then two push then pop like that                  
//  | two  |            reverse order  pop 
//  |three |
//  |      |

//   */
 
//  //# PART 4 — Dangerous Output Practice
//  var d=5;
//  function test(){
//     console.log(d);
//     var d=10;
    
//  }
//  //undefined
 
//  let r=5;
//  {
//     console.log(r);
//     let r=10;
    
//  }
//  // referenceError

//  console.log(foo);
//  function foo(){
//     return 1;
//  }
//  var foo=2;
//  //pura function

//   function test(){
//     console.log(z);    
//   }
//   var z=10;
//   test();
//   //10
 
// console.log(foo);

// function foo() {
//   return 1;
// }

// var foo = 2;

//[Function: foo]

//Q:
var s=1;
function test(){
    console.log(s);
    s=2;
    console.log(s);
    var s=3;
    console.log(s);
  
}
test();// undefined
console.log(s);
//2,3,1


console.log(e);
let e=5;
function test(){
    console.log(e);
    
}
test()
//Reference Error