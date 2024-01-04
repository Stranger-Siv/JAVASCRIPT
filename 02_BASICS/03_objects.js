// singleton
//object.create

// object literals
const mySym = Symbol("key1")
const jsUser = {
    name:"Hitesh",
    "fullName" :"Hitesh Chaudhary",
    [mySym]:"mySymbol",
    age:18,
    email:"hello@123gmail.com",
    Location:"Surat",
    isLoggedIn: false,
    lastLoggedInDays:["Monday","Saturday"]
 }
// console.log(jsUser.email);
// console.log(jsUser["email"]);
// console.log(jsUser["fullName"]);
// console.log(jsUser[mySym]);
// console.log(typeof jsUser[mySym]);

jsUser.email="hitesh@gmail.com"
// Object.freeze(jsUser)
jsUser.email="siv@gmail.com"

// console.log(jsUser);

jsUser.greeting = function(){
    console.log("Hello JS user");
}
jsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());