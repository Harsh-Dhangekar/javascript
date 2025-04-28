let Account_balance=100;
console.log(Account_balance);

let Bank_Balance=new Number(120)
console.log(Bank_Balance);
console.log(Bank_Balance.toString());//It converts the number to the string.
console.log(typeof Bank_Balance);

let number= 123.789986;
console.log(number.toPrecision(5));//It give the precise value of the number but returens the value as string

let first_number = 1000000;
console.log(first_number.toLocaleString('en-IN'));//It adds commas in the number 

//------------------------------Maths-----------------------------------------

console.log(Math);
console.log(Math.abs(-4));// It converts the negative value into positive value.
console.log(Math.round(2.99999));//It round off the number or any value
console.log(Math.ceil(3.00000000000001));//The Math.ceil() static method always rounds up and returns the smallest integer greater than or equal to a given number.
console.log(Math.floor(2.767676));//The Math.floor() static method always rounds down and returns the largest integer less than or equal to a given number
console.log(Math.sqrt(100));//The Math.sqrt() static method returns the square root of a number.
console.log(Math.min(100000,43423456,663243456,66342210000,4343412775));//The Math.min() static method returns the smallest of the numbers given as input parameters
console.log(Math.max(12341234567,6000000000,55423149,6631317490));//The Math.max() static method returns the largest of the numbers given as input parameters

console.log(Math.random());//The Math.random();static method returns a floating-point, pseudo-random number that's greater than or equal to 0 and less than 1, with approximately uniform distribution over that range — which you can then scale to your desired range.
console.log(Math.random()*10+1);
console.log((Math.random()*10)+1);

let min = 10;
let max = 20;
 
console.log(Math.floor(Math.random()*(max-min+1)+min));




