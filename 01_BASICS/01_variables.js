const accountId = 210305105516
let accountEmail = "Programmersiv21@gmail.com"
var accountPassword = "12345"
accountCity = "Vadodara"
let accountState

// accountId = 2    Not allowed
console.log(accountId)

accountEmail = "abc12@gmail.com"
accountPassword = "2341"
accountCity = "Surat"

/* 
Prefer not to use var because of issue in block scope and functional scope
*/

console.table([accountId,accountEmail,accountPassword,accountCity,accountState])
