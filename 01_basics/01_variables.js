const accountId = 144553
let accountEmail = "animesh@google.com"
var accountPassword = "12345"
accountCity = "Jaipur" // you can write in this way too but its not recommended
let accountstate;

// accountId = 2 // not allowed

// {} -> Scope

accountEmail = "ab@outlook.com"
accountPassword = "696969"
accountCity = "mumbai"

/*
Prefer not to use var
because of issue in block scope and Functional Scope
*/

console.table([accountId,accountEmail,accountPassword,accountstate]);

