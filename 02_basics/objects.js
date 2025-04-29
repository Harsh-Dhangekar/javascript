//Objects literals

 let mySym= Symbol("key1")

let user_info={
    name:"Harsh",
    [mySym]:"mykey1",
    age:21,
    id:"harsh_d23",
    email_id:"abc@google.com",
    isLoggedIn:false
}
console.log(user_info.id);
console.log(user_info["id"]);
console.log(user_info[mySym]);

user_info.email_id="xyz@microsoft.com"// it is use to change the email or any other info in the object.
console.log(user_info.email_id);

Object.freeze(user_info);//It is use to freeze (keep constant) the information in the object 
user_info.age=22;
console.log(user_info.age);
console.log(user_info);

// //Adding function in the objects

user_info.greeting= function(){
console.log("hello world");
}

user_info.greetingTwo= function(){
    console.log(`hello world ${this.name}`);//"this"keyword is use to refrence the object, means we are refering the name in the function which is present in "user_info" object 
}
console.log(user_info.greeting());
console.log(user_info.greetingTwo());