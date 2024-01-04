function sayMyName(){
    console.log("S");
    console.log("I");
    console.log("V");
    console.log("R");
    console.log("A");
    console.log("M");
}

// sayMyName()
function sumOfTwo(num1,num2){
    // console.log(num1+num2);
    let result = num1+num2
    return result

}
// sumOfTwo(3,4)
// sumOfTwo(3,"4")
const result = sumOfTwo(3,5)
// console.log("Result:",result);

function logInUserMessage(username="Sam"){
    // if(username === undefined){
        if(!username){
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`

}
// console.log(logInUserMessage("Sivram"))
// console.log(logInUserMessage());

function calculateCartPrice(val1,val2,...num1){
    return num1
}
// console.log(calculateCartPrice(200,300,400,500));

const user ={
    username : "Sivram",
    price : 199

}
function handleObject(anyObject){
    console.log(`username is ${anyObject.username} and price is ${anyObject.price}`)
}
// handleObject(user)\
handleObject({
    username:"Sam",
    price:399
})

const myNewArr = [200,300,400,500]
function returnSecondValue(getArr){
    return getArr[1]
}

console.log(returnSecondValue(myNewArr));
