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
console.log(logInUserMessage("Sivram"))
console.log(logInUserMessage());