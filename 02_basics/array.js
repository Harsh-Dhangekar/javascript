//Arrays

let myArray = [1,2,3,4,5];
console.log(myArray);

let array_one= ["Nexon","Venue","i20","BMW-M3",];
console.log(array_one[3]);

let arry_two=new Array(1,2,3,4,5);
console.log(arry_two);

//Array methods 

let array=[10,20,30,40,50];
array.push(10,100);//it will push 10 at the end of the array
array.pop();//it removes the last element from the array
console.log(array);

let array_123= [1,2,3,4,5,6];
array_123.unshift(299);//it will  add the element at the start of the array
array_123.shift();//it removes the first element of the array
console.log(array_123);

let demo=[1,2,3,4,5];
console.log(demo.includes(9));

const myArr=[11,22,33,44,55,66,77] ;
let newArr=myArr.join();
console.log(myArr);
console.log(newArr);
console.log(typeof newArr);

// slice and splice operation 
const my_array=[0,11,22,33,44,55];
console.log("original array:- ",my_array);

const myn1=my_array.slice(1,3);
console.log("slice value",myn1);

const myn2 =my_array.splice(1,3);
console.log("splice value",myn2);
console.log(my_array);
