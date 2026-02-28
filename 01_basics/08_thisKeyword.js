// 'use strict';

// //this in global space 
// console.log(this); //global object (window in browser, global in Node.js)
 

// //this inside a function
// function showThis() {
// // this value depends on strict/non strict mode. In non-strict mode, it will refer to the global object. In strict mode, it will be undefined.
//   console.log(this); //global object (window in browser, global in Node.js)
// }
// // showThis()

// // this in strict mode-(this substitution)
// /**
//  * if the value of this keyword is undefined or null,
//  * this keyword will be replaced with global object (window in browser, global in Node.js)
//  * only in non-strict mode.
//  */

// showThis(); //undefined in strict mode, global object in non-strict mode
// window.showThis(); //global object (window in browser) in both strict and non-strict mode

// //this keyword in object method

// const obj = {
//   name: 'Rudra',
//   showThis: function() {
//     console.log(this); //object itself
//     console.log(this.name); //Rudra
//   } 
// };
// obj.showThis();

// const obj2 = {
//   name: 'Pratap',
// };
// // obj2.showThis(); //TypeError: obj2.showThis is not a function ( we can not access showThis method of obj2 because it is not defined in obj2, it is defined in obj)

// // we can  reuse showThis overiding this keyword using call, apply and bind methods

// // call apply bind methos(sharing methods)

// // obj.showThis.call(obj2); //Pratap (using call method to set this to obj2)


// obj.showThis.apply(obj2); //Pratap (using apply method to set this to obj2)
// const boundShowThis = obj.showThis.bind(obj2);
// boundShowThis(); //Pratap (using bind method to set this to obj2) 


// // this inside an arrow function

// const student = {
//   name: 'Rudra',
//   showThis: function() {
//     // enclosing lexical context is the student object, so this will refer to the student object
//     const arrowFunction = () => {
//       console.log(this); //object itself (arrow function does not have its own this, it inherits this from the enclosing context)
//       console.log(this.name); //Rudra
//     };
//     arrowFunction();
//   }, 
// };
// student.showThis();


// // this keyword inside DOM ===> this refers to the HTMLelement.

// // this keyword inside class,constructor


//============================== this Keyword==============================

/*Golden Rule:
 * this = depends on how function is called, not where defined.
 
Main Cases:
1. Global scope(non-strict mode):
 *Browser: this = window
 *Node: this = global

 2.simple function call:
    *strict mode: this = undefined
    *non-strict mode: this = window(browser) global object

3.Method call(Object.method()):
 *this = woh object

4.Contructor function/class(with new keyword):
    *this = naya object jo ban rha hai

5.call/apply/bind:
 *this  hum manually set krte hai.

6. Arrow functions:
 * Arrow function ka apna this nhi hota.
 ye enclosing lexical context se this inherit krta hai.(outer scope ka this)

7. Event handlers:
 *this = event target (element jispe event listener laga hai)

 8. DOM elements:
 *this = element jispe event listener laga hai

 Example:
 */
//**===Method call

const user1 = {
  name: 'Rudra',
  sayHi() {
    console.log(`Hi, I am ${this.name}`);
    console.log(this.name);
    
  } 
};
user1.sayHi(); //Hi, I am Rudra (this refers to the user object)


//**====Function as callback (trap)

const user={
    name:'Rudra',  
    sayHi(){
        console.log(`Hi, I am ${this.name}`);//Hi, I am undefined (this refers to global object, which does not have name property)
        console.log(this.name);//undefined
        
    }   
}
const fn=user.sayHi;
fn(); //Hi, I am undefined (this refers to global object, which does not have name property)
     //this=window/indefined->error or undefined


 //====call / apply / bind=====
 function greet(){
    console.log(`Hello ` +this.name);
 }
 const user2={
    name:'Pratap'
 }
  
 const user3={
    name:'Rudra'
 }
 
 greet.call(user2); //Hello, + Pratap (using call method to set this to user2)
 greet.call(user3); //Hello, + Rudra (using call method to set this to user3)
 greet.apply(user3); //Hello, + Rudra (using apply method to set this to user3)

 const greetRudra=greet.bind(user2);
    greetRudra(); //Hello, + Pratap (using bind method to set this to user2)

//**====Arrow function this

const obj={
    value:42,
    regular(){
        console.log(this.value); //42 (this refers to obj)
    },
    arrow:()=>{
        console.log(this.value); //undefined (this refers to global object, which does not have value property)
    }
};
obj.regular(); //42 (this refers to obj(this=obj))
obj.arrow(); //undefined (this refers to global object, which does not have value property)(this global/outer scope ka)

//Arrow methods object ke liye usually avoid karo (jab this chahiye).