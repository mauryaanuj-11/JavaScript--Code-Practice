// ******************* Method- 1 **************************

const promiseOne=new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Asyn task is complete");
        resolve();
    },1000)
})

promiseOne.then(function(){
    console.log("Promise Consumed");
})

// ******************* Method- 2 **************************

new Promise(function(resolve,reject){
    setTimeout(() => {
        console.log("Asyc 2 task is complete");
        resolve();
    }, 1000);
}).then(function(){
    console.log("Promise 2 is consumed");
})

// ******************* Method- 3 **************************

const obj={
    myName: "Hitesh Chauhdary",
    email: "chai@example.com",
    phoneNo: "888xxxx"
}
const promiseThree=new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve(obj);
    },1000)
})

promiseThree.then(function(data){
    console.log(data);
    console.log(data.myName);
    return data.email;
}).then(function(data2){
    console.log(data2)
} )

// ******************* Method- 4 **************************

const promiseFour=new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=true;
        if(!error){
            resolve({myName:"Hitesh Choudhary", email:"chaiaurcode@example.com"});
        }else{
            reject("ERROR : Something went wrong");
        }
    },1000)
})

promiseFour.then(function(data){
    console.log(data);
    return data.myName;
})
.then(function(againData){
    console.log(againData);
})
.catch(function(data){
    console.log(data)
}).finally(function(){
    console.log("This is give the message on the Success or Rejection");
})

// ******************* Method- 5 **************************

const promiseFive=new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=true;
                if(!error){
                    resolve({myName:"Hitesh Choudhary", email:"chaiaurcode@example.com"});
                }else{
                    reject("Something went wrong");
                }
    },1000);
})

async function consumedFive(){
    try {
        const promise=await promiseFive;
        console.log(promise)
    } catch (error) {
        console.log("Reject Message:", error)
    }
}
consumedFive();

// ******************* Some Fetch Mehtod-1 **************************

async function getAllUsers(){
    try {
        const urlData=await fetch('https://jsonplaceholder.typicode.com/users');
        const data=await urlData.json();
        console.log(data)
    } catch (error) {
        console.log("We get some here")
    }
}

getAllUsers();

// ******************* Some Fetch Mehtod-2 **************************

fetch('https://api.github.com/users/mauryaanuj-11')
.then(function(response){
    return response.json();
})
.then(function(data){
    console.log(data);
})