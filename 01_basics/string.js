//concatination of two strings 

let Student_name = "Harsh";
let Student_id= 12345;

console.log(Student_name+Student_id);

//String Interpolation // In Python it is like fstring .

console.log(`The student name is ${Student_name} and student id is ${Student_id}`);
const gamename= new String("Harsh");
console.log(gamename);
console.log(gamename[0]);

let Id = "Harsh@12345 ";
console.log(Id.length);// Lenght function shows how many index number are there .
console.log(Id.toUpperCase());// It converts all lower case characthers to uper case.
console.log(Id.charAt(2));// By this function we can see at which index charater is .
console.log(Id.indexOf("r"));//It show the characters at which position.

let newstring = Id.substring(0,4);//Indexing 
console.log(newstring);

let secondString = Id.slice(-8,2);
console.log(secondString);

let thirdString = "   Sachine   "
console.log(thirdString);
console.log(thirdString.trim());// It trims the extra spaces in the string

const url = "http//harsh.com//%20//Dhangekar";
console.log(url.replace('harsh.com','harshdhangekar.com'));//It replace the string
console.log(url.includes('harsh'));//It show weather there is any string in the variable or not 
