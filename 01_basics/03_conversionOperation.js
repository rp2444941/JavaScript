let score="100.50";

console.log(typeof score);
console.log(typeof(score));

let valueInNumber=Number(score);
console.log(typeof valueInNumber);
console.log(valueInNumber);

//"33" => 33
//"33abc" => NaN (Not a Number)
//"abc33" => NaN
//"abc" => NaN
//true => 1
//false => 0

let isLoggedIn=1;
let booleanIsLoggedIn=Boolean(isLoggedIn);
console.log(booleanIsLoggedIn); // true

isLoggedIn=0;
booleanIsLoggedIn=Boolean(isLoggedIn);
console.log(booleanIsLoggedIn); // false

isLoggedIn=100;
booleanIsLoggedIn=Boolean(isLoggedIn);
console.log(booleanIsLoggedIn); // true


 
