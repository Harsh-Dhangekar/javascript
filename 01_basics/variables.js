const account_Id = 4543
let account_Email="abc@gmail.com"
var account_Password="12345"
let account_City = "Pune"

//account_Id = 1234 // it can't be change coz it is the valuue is constant. 
console.log(account_Id);
/*
Prefer not to use var 
because of issue in block scope and functional scope 
*/
account_Email="xyz@gmail.com"
account_Password="10101010101"
account_City = "Mumbai"
console.log(account_Email)
console.log(account_Password)
console.log(account_City)
console.log([account_Id,account_Email,account_Password,account_City])
console.table([account_Id,account_Email,account_Password,account_City])