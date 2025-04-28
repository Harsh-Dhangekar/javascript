//Dates
let myDate = new Date();
console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toISOString());
console.log(myDate.toJSON());
console.log(myDate.toLocaleDateString());
console.log(myDate.toLocaleString());
console.log(myDate.toLocaleTimeString());
console.log(myDate.toUTCString());

let New_Date= new Date(2003,8,23);//Note:- In javascript the month starts with 0 (Example:- jan 0,feb 1,Mar 3) only if u dont give it in a string format
console.log(New_Date.toDateString());
let Date_demo=new Date("2003-09-23");
console.log(Date_demo.toLocaleDateString());

let Sec_Date= new Date("09-23-2003")
console.log(Sec_Date.toLocaleString());

let Meeting_Date= new Date();
console.log(Meeting_Date);
console.log(Meeting_Date.getDate());
console.log(Meeting_Date.getDay());
console.log(Meeting_Date.getFullYear());
console.log(Meeting_Date.getHours());
console.log(Meeting_Date.getMinutes());
console.log(Meeting_Date.getMonth());//it will show the mont 0 as jan , coz in javascript month starts with 0










