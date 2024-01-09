const promiseOne = new Promise(function(resolve,reject){
    //DO and Async task
    // DB calls,cryptography,network
    setTimeout(function(){
        console.log('Async task is complete');
        resolve()
    },1000)

})

promiseOne.then(function(){           // connection with resolve
    console.log('promise is consumed');
})             


new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Async task 2");
        resolve()
    },1000)
}).then(function(){
    console.log('Async 2 resolved');
})

const promise3 = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username:"chai",email:"chai@gmail.com"})
    },1000)
})
promise3.then(function(user){
    console.log(user);
})

const promise4 = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true    // change to false and check non error return
        if(!error){
            resolve({username:"abc",password:"123"})
        }else{
            reject('ERROR something went wrong')
        }
    },1000)
})

promise4.then((user) => {
    console.log(user);
    return user.username
})
.then((username)=>{
    console.log(username)
}).catch(function(error){
    console.log(error)
}).finally(function(){
    console.log("promise is either resolved or rejected")
})

const promise5 = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true    // change to false and check non error return
        if(!error){
            resolve({username:"Javascript",password:"123"})
        }else{
            reject('ERROR: JS went wrong')
        }
    },1000)
})

async function consumePromise5(){
  try {
    const response = await promise5
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}

consumePromise5()


// async function getAllUsers(){
//     try {
//         const response = await fetch('https://api.github.com/users/hiteshchoudhary')

//         const data = await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log("E: ", error);
//     }
// }

// getAllUsers()

fetch('https://api.github.com/users/hiteshchoudhary')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))

// promise.all