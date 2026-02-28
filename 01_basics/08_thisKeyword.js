'use strict';
//this in global space 
console.log(this); //global object (window in browser, global in Node.js)
 

//this inside a function
function showThis() {
// this value depends on strict/non strict mode. In non-strict mode, it will refer to the global object. In strict mode, it will be undefined.
  console.log(this); //global object (window in browser, global in Node.js)
}
// showThis();

// this in strict mode-(this substitution)
/**
 * if the value of this keyword is undefined or null,
 * this keyword will be replaced with global object (window in browser, global in Node.js)
 * only in non-strict mode.
 */

showThis(); //undefined in strict mode, global object in non-strict mode
window.showThis(); //global object (window in browser) in both strict and non-strict mode

//this keyword in object method

const obj = {
  name: 'Rudra',
  showThis: function() {
    console.log(this); //object itself
    console.log(this.name); //Rudra
  } 
};
obj.showThis();

const obj2 = {
  name: 'Pratap',
};
// obj2.showThis(); //TypeError: obj2.showThis is not a function ( we can not access showThis method of obj2 because it is not defined in obj2, it is defined in obj)

// we can  reuse showThis overiding this keyword using call, apply and bind methods

// call apply bind methos(sharing methods)

// obj.showThis.call(obj2); //Pratap (using call method to set this to obj2)


obj.showThis.apply(obj2); //Pratap (using apply method to set this to obj2)
const boundShowThis = obj.showThis.bind(obj2);
boundShowThis(); //Pratap (using bind method to set this to obj2) 


// this inside an arrow function

const student = {
  name: 'Rudra',
  showThis: function() {
    // enclosing lexical context is the student object, so this will refer to the student object
    const arrowFunction = () => {
      console.log(this); //object itself (arrow function does not have its own this, it inherits this from the enclosing context)
      console.log(this.name); //Rudra
    };
    arrowFunction();
  }, 
};
student.showThis();

// this keyword inside DOM ===> this refers to the HTMLelement.

// this keyword inside class,constructor

