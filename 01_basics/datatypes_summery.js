// Primitive dataType

// There are 7 Primitive dataTypes 
// 1) String
// 2) Number
// 3) Boolean
// 4)null
// 5)Symbol
// 6)undefined
// 7)BigInt

//Example

const score = 100;
const scorevalue= 101.90;
const temperature = null;
const log_in = false;
let user_Id;  // Answer would be undefined 
const student_Id = Symbol('123');
console.log(student_Id);
console.log(typeof Symbol);

let big_number= 654123456n  //If you add "n" at the last to the number it becomes large number which can be used in bigInt
console.log(big_number);
console.log(typeof big_number);



//Non-Primitive dataType
// There are 3 types of Non-Primitive dataTypes
// 1) Array
// 2) Object
// 3)function

// Example
//Array
let cars = ["Nexon", "Harrier", "XUV700", "Thar", "Creta"];
console.log(cars);
console.log(typeof cars);

//Object 
let Student_details={
    name: "abc",
    id_number:12345,
    date_of_Birth:undefined,
}

console.log(Student_details);
console.log(typeof Student_details);

// Function
let myFunction = function Employee_id(){
    console.log("hellow world");
}

console.log(myFunction);