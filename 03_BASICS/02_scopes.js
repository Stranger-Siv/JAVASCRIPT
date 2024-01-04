var c=300
let a=200
if(true){
    let a=10
    const b=20
    // var c=30 // it is also applicable outside the scope so it makes confusion so we do not use var as a datatype in js
    // console.log("INNER:",a)
}

// console.log(a);
// console.log(b);
// console.log(c);

function one(){
    const username="Sivram"

    function two(){
        const website="youtube"
        // console.log(username)
    }
    // console.log(website);

    two()
}
one()

if(true){
    const username = "hitesh"
    if(username === "hitesh"){
        const website = "youtube"
        // console.log(username + website);
    }
    // console.log(website);
}
// console.log(username);

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
console.log(addone(5));
function addone(num){
    return num+1
}



// console.log(addTwo(5))  // in this way we cannot call function before initialization
const addTwo = function (num){
    return num+2
}
console.log(addTwo(5))
