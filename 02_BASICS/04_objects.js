const tinderUser = new Object()
// console.log(tinderUser);

tinderUser.id="123abc"
tinderUser.name="Sam"
tinderUser.age=21
tinderUser.isLoggedIn=false

// console.log(tinderUser);

const regUser ={
    email:"sum@gmail.com",
    fullName:{
        userFullName:{
            firstName:"Sivram",
            lastName:"Pradhan"
        }
    }
}
// console.log(regUser.fullName.userFullName.firstName);

const obj1={1:"a" ,2:"b"}
const obj2={3:"a" ,4:"b"}

// const obj3 =Object.assign({},obj1 ,obj2)
// console.log(obj3);

const obj3={ ...obj1, ...obj2}
// console.log(obj3);

const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

users[1].email


// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

const course={
    courseName:"JS in Hindi",
    price:"999",
    instructor:"hitesh"
}

const{instructor:ins} = course
// console.log(instructor);
console.log(ins);

// {
//     "name":"Hitesh",
//     "courseNames":"Js in Hindi",      // API call
//     "courseFees":"Free",
// }

[
    {},
    {},
    {}
]