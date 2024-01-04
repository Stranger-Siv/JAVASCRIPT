const array =[1,2,3,4,5]
const heros = ["Ironman","Shaktiman","Sivram"]

const myArray = new Array(1,2,3,4,5,6,7)
// console.log(myArray[1]);

// myArray.push(6)
// myArray.push(7)
// console.log(myArray);

// myArray.pop()
// console.log(myArray);

// myArray.unshift(9)
// myArray.shift()

// console.log(myArray.includes(9))

// const newArray = myArray.join()
// console.log(myArray);
// console.log(newArray);
// console.log(typeof newArray);

// spice and slice

console.log("A",myArray);

const myn1 = myArray.slice(1,3)
console.log(myn1);
console.log("B",myArray);


const myn2 = myArray.splice(1,3)
console.log(myn2);
console.log("C",myArray);