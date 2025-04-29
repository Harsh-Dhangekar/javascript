let Programming_language= ["java","Python","javascript","C++"];

let Backend_and_Frontend_framework= ["Reactjs","django","SQL",];

Programming_language.push(Backend_and_Frontend_framework);
console.log(Programming_language);
console.log(Programming_language[4][1]);// it will give answer as array inside the array.

let my_new_array=Programming_language.concat(Backend_and_Frontend_framework);//Combines the two array.
console.log(my_new_array);


//Spread operation:- combines the two array.

let all_languages=[...Programming_language,...Backend_and_Frontend_framework];
console.log(all_languages);


let an_array=[11,22,33,[44,55],66,[77,[88,99,111]]]
let another_new_array=an_array.flat(Infinity);//The flat() method of Array instances creates a new array with all sub-array elements concatenated into it recursively up to the specified depth
console.log(another_new_array);

console.log(Array.isArray("Harsh"));//To chech wheather the give input is array or a string
console.log(Array.from("Harsh"));//to convert the string into array

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1,score2,score3)); 

