// Project: Fake E-Commerce Flow
/**
 * 1:user login
 * 2:fetch products
 * 3:add to cart
 * 4:make payment
 */

//1:====Login====
function loginUser(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve({userId:1,username:"Rudra_Pratap"});
        },1000);
    });
}


//2:====Fetch User Details====Get Products

function getProducts(userId){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(["Laptop","Mobile","Headphones"]);
        },1000);    
    });

}

// 3:============= Payment
function makePayment(products){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            let paymentSuccess=true;
            if(paymentSuccess){
                resolve("Payment Successful !!");
            }else{
                reject("Payment Failed !!");
            }   
        },1000);
    })
}


//Final Flow
logicUser()
.then(user=>{
    console.log("User Logged In: ",user.name);
    return getProducts(user);
})
.then(products=>{
    console.log("Products Fetched: ",products);
    return makePayment(products[0]);
})
.then(paymentStatus=>{
    console.log(paymentStatus);
})
.catch(err=>{
    console.log("Error: ",err);
});
