//1)Converting String to number 

let Name_age= "harsh";
console.log(Name_age);
console.log(typeof Name_age);

let valueofNumber = Number(Name_age);

console.log(typeof valueofNumber);
console.log(valueofNumber);

/*  
 As we know that , for example:-
 1)if we print "33" we will get the answer in number form and not 
 in string from.
 2) if we print "33abc" we will get the answer as NaN(Not a Number)
 3) if we print true we will get the answer as 1 and 0 if it is false
 */


// //2)Converting 1,0,null,and string into boolean(which gives true or false in return)
// // let account_of_user= "" ;

 let demo_account = Boolean(account_of_user);
 console.log(typeof demo_account);
 console.log(demo_account);
/*
1) if we insert the value 1 it will print true 
2) if we insert the value 0 it will print false 
3) if we insert the value "Harsh" it will give true
4)if we insert the value "" it will give false and same if we insert the value as null
*/


// //3) converting  into string 

 let number = 33;
console.log(number_string);
 let number_string = String(number);
console.log(number_string);

 console.log(typeof number_string);

// //******************************Operation*************************************

let a = 3;
let Negative_value = -a;
console.log(Negative_value);
 console.log(2+2);
 console.log(2-2);
 console.log(2*2);
 console.log(2**3);
 console.log(2/3);
 console.log(2%3);

 let string1 ="Hello my name is";
 let string2=" Harsh";
 let string3= string1+string2;
 console.log(string3);

/*
In this type of conversion as showen below 
1) if string is first and the number is next then the operation will be 
considered as string (eg:- "1"+2)=12
2)if number is first and the string is next then it would be arithmatic operaion 
(eg:- 3+2+"1"=51)
*/
 console.log("1"+2);
 console.log(2+"1");
console.log("1"+2+2);
 console.log(1+2+"1");

// //Increment (Prefix and Postfix)

 let x = 3;
 const y = x++;

 console.log(`x:${x}, y:${y}`);
// Expected output: "x:4, y:3"