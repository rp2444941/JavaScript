//Array Methods


//*map – transform array (same length)  
const arr=[1,2,3,4,5];
const squared=arr.map(x=>x*x);
console.log(squared); //[1, 4, 9, 16, 25]



//*filter – condition wali items rakhna
const even=arr.filter(x=>x%2===0);
console.log(even); //[2, 4]

//*reduce – ek value banaana (sum, object, etc.)
const sum=arr.reduce((acc,curr)=>acc+curr,0);
console.log(sum); //15(ek value bana di array se sab add kr ke initial value 0 se start krke)

//*forEach – loop (return value ignore hota hai)*/
arr.forEach(x=>console.log(x)); //1 2 3 4 5 (har element pe function apply kr diya, return value ignore hoti hai)

//*find– pehla matching element
const firstEven=arr.find(x=>x%2===0);
console.log(firstEven); //2 (pehla even number mil gaya)

//*some– koi ek true?
const hasEven=arr.some(x=>x%2===0);
console.log(hasEven); //true (koi ek even number hai)

//*every– sab true?
const allEven=arr.every(x=>x%2===0);
console.log(allEven); //false (sab even nahi hai)

//*sort– sorting (dangerous if not understood)
const arr2=[3,1,4,5,2];
arr2.sort();
console.log(arr2); //[1, 2, 3, 4, 5] (numbers ko string ki tarah sort karta hai by default)

//*reverse– reverse order
arr2.reverse();
console.log(arr2); //[5, 4, 3, 2, 1] (array ko reverse kar diya)



//*slice – non-mutating copy / portion
const arr3=[1,2,3,4,5];
const sliced=arr3.slice(1,4);
console.log(sliced); //[2, 3, 4] (index 1 se start krke index 4 se pehle tak ka portion copy kar diya)


//*splice – mutating remove/insert
const arr4=[1,2,3,4,5];
arr4.splice(2,1);
console.log(arr4); //[1, 2, 4, 5] (index 2 se start krke 1 element remove kar diya)

arr4.splice(2,0,3);
console.log(arr4); //[1, 2, 3, 4, 5] (index 2 se start krke 0 element remove kar ke 3 insert kar diya)


//Chaining
const users=[
    {name:'Rudra',age:25},
    {name:'Rahul',age:30},
    {name:'Riya',age:22},
    {name:'Rohan',age:28}
];

const namesOfAdults=users
    .filter(user=>user.age>=25)
    .map(user=>user.name);
console.log(namesOfAdults); //['Rudra', 'Rahul', 'Rohan'] (pehle filter kiya adults ko, fir unke names map kiye)


//Array Methods – Practice

const products = [
  { name: 'Pen', price: 10 },
  { name: 'Book', price: 50 },
  { name: 'Laptop', price: 50000 },
  { name: 'Pencil', price: 5 },
];

//1.products se sirf unke names ki array banao
const productNames=products.map(product=>product.name);
console.log(productNames); //['Pen', 'Book', 'Laptop', 'Pencil']

//2.Price > 100 wale products filter karo

const expensiveProducts=products.filter(product=>product.price>100);
console.log(expensiveProducts); //[{ name: 'Laptop', price: 50000 }] (sirf laptop hi 100 se mehenga hai)
 

//3.Total price calculate karo (sum of all prices)

// const price=products.map(product=>product.price); 
// const sum1=price.reduce((acc,curr)=>acc+curr,0);
// console.log(sum1);

const totalPrice=products.reduce((acc, product)=>acc+product.price,0)

//4.Names ko alphabetically sort karo (without modifying original array)
const sortedName=products
     .map(product=>product.name)
     .sort();

     console.log(sortedName);
     /*
map → ['Pen', 'Book', 'Laptop', 'Pencil']
sort → alphabetically sort karta hai (default string comparison)
products array safe rahega, mutate nahi hoga.

*/
/*
Agar interview mein woh ye bolein:

but original array modify nahi hona chahiye */

//tab hum likhenge

const productsSortedByName=[...products]//shallow copy
   .sort((a,b)=>a.name.localeCompare(b.name));

   console.log(productNames);
   console.log(products);// original as-it-is
   
   
     
