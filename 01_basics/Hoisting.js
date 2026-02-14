// hoisting kya hai ?

//JavaScript execution se pahle variable aur functionss ko memory me upar le jata hai.

//lekin...
//Hoisting != value assign ho jana

//=========================================
/*VAR vs LET vs CONST (Real Difference)

| Keyword | Hoisted? | Initial Value | Access before declaration |
| ------- | -------- | ------------- | ------------------------- |
| var     | Yes      | undefined     | ✅ Allowed                 |
| let     | Yes      | uninitialized | ❌ Error                   |
| const   | Yes      | uninitialized | ❌ Error   
|
*/

console.log(a);
var a = 10;

//Output: undefined (a--->undefined because of hoisting)


console.log(b);
let b = 20;

//Output: ReferenceError: Cannot access 'b' before initialization (b--->uninitialized because of hoisting  TDZ me hai isliye error aata hai)


//=============Temporal Dead Zone (TDZ)============================
//TDZ kya hai?
//Declaration or initialization ke beech ka time.

let x=5;
//line se pahle wala area = TDZ
//is zone me variable exist karta hai but access nahi kar sakte.



//Q let v hoisted hai to error kyu deya hai ?

//let memory me jata hai but initialize nhi hota isiliye TDZ  me rhta hai.
//access krunga to ReferenceError aayega.


//function Declaration 
foo();
function foo(){
    console.log("Hello");
}
//Output: Hello (function declaration hoisted hota hai)

//function Expression   
foo1();
var foo1 = function(){
    console.log("Hello");
}
//Output: TypeError: foo1 is not a function (foo1--->undefined because of hoisting, so function call karne pe error aata hai)
//foo1 memory me undefined 
// undefined ko function ki tarah call nhi kr skte.

//Q: const ko hoist kiya jata hai?

//han,but TDZ me rhta hai.

//Q: var ko block scope kyu nhi bolte?
// kyuki var  function scoped hota hai.


{
    var c = 30;
}
console.log(c);
//Output: 30 (var block scope me nhi hota, isiliye c global variable ban jata hai)


//Q1:

let a=5;
{
    let a=10;
    console.log(a); //Output: 10 (block scope ke andar wala a print hoga)
}
console.log(a);
//Output: 5 (block scope ke bahar wala a print hoga)
//10,5

var y=1;
function test(){
    console.log(y);
    var x=2;
}
test();
//Output: 1 (y global variable hai, isiliye function ke andar access ho jata hai)



//MINI ASSIGNMENT

//Q1: var,let,const differnce apne word me ?;
//Ans: var function scoped hota hai, let aur const block scoped hote hai. var ko redeclare aur reassign kiya ja sakta hai, let ko reassign kiya ja sakta hai lekin redeclare nahi kiya ja sakta, const ko na redeclare kiya ja sakta hai na reassign kiya ja sakta hai. var hoisted hota hai aur initial value undefined hoti hai, let aur const hoisted hote hai lekin unki initial value uninitialized hoti hai, isiliye TDZ me rhta hai.

//Q2:trick example do mujhe Hoistiong ka ?
//Ans:

var fooo=1; //globale variable 
function magic(){
    //kya yanha 'fooo' 1 hoga
    console.log("1:", fooo); //Output: undefined (fooo--->undefined because of hoisting)

    if(!fooo){
        var fooo=10;
    }
    console.log("2:",fooo);
    
}
magic();
//Output:
//1: undefined (fooo--->undefined because of hoisting)
//2: 10 (if condition true hone ke karan fooo ki value 10 ho jati hai)


let z=10;
function testing(){
    console.log(z); //Output: ReferenceError: Cannot access 'z' before initialization (z--->uninitialized because of hoisting TDZ me hai isliye error aata hai)
    let z=20;
}
testing();
//Output: ReferenceError: Cannot access 'z' before initialization (z--->uninitialized because of hoisting TDZ me hai isliye error aata hai)
//function ke ander wala let z  global z ko shadow krta hai.
// isiliye console.log(10) access nhi krega  wo local z access krega----->jo TDZ me hai.

//the inner let z shadows the outer variable and stays in TDZ until initialized.


var a=5;
function demo(){
    console.log(a); //Output: undefined (a--->undefined because of hoisting)
    if(true){
        var a=10;
    }
}
demo();
//Output: undefined 
// inside demo()   a--- undefined -->because var a is function scoped block scoped nhi hota.


// so entire function me:
var a; // hoisted
console.log(a); // undefined
if(true){
    a=10;
}
//global a=5 completely shadowed ho jayega by local a inside demo() function, but since local a is hoisted and initialized to undefined, it will shadow the global a and print undefined.

// var --> function scoped not block scoped
// so if block ke andar ka var  bhi function ke top pe hoist hota hai.

