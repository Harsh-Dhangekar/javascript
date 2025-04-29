
//const user= new Object(); // It is the singleton object 
 const user = {} // And it is not singleton object
 user.id=1234
 user.fname="Harsh"
 user.hobbies="Playing Guitar"
console.log(user);

const regular_user={
        email:"abc@gmail.com",
        logged_In:true,
        name:{
        user_name:{
            First_name:"xyz",
            Last_name:"abc"
        }
    }

}
console.log(regular_user.name);
console.log(regular_user.name.user_name);
console.log(regular_user.name.user_name.First_name);

//Combining two objects 

const user_1={1:"a",2:"b"};
const user_2={3:"c",4:"d"};

let return_user_info= Object.assign(user_1,user_2);// In this commant line we are combining two different object into an single object
console.log(return_user_info);

//Using spread operators for combining two objects

const old_user={logged_In:true,Name:"qwertyuiopasdfghjk"};
let new_user={logged_out:false,Name_1:"asdfghjkqwertyu"};

let All_user_info={...old_user,...new_user};
console.log(All_user_info);


//Consept in which there are multiple object in the array
//1)This case happens when you get the data from backend

let multiple_users=[
    {
        fname1:"Harsh",
        email:"abc@"
    },
    {
        fname2:"Kabir",
        email:"Kabir@1122"
    },
    {
        fname3:"Prajwal",
        email:"prajwal123"
    },
    {
        fname4:"Darshan",
        email:"Darshan@1232345"
    },
]
console.log(multiple_users[0].email)

//Accessing only the keys and value of the objects

let exam_form = {
    Student_id:12345,
    Student_name:"abc",
    Date_of_birth:"23/09/2003"
}
console.log(exam_form);

console.log(Object.keys(exam_form));//It returns the answer in the array form
console.log(Object.values(exam_form));//It returns the answer in the array format