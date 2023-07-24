// Example of prototype

// 1. Prototype Example

// const user ={
//     getDetail : function(){
//         console.log(`My name is ${this.name} and age is ${this.age}`);
//     }
// } 

// const student = {
//     name : "hansraj",
//     age : 23,
//     // getDetail : function(){
//     //     console.log(`My name is ${this.name} and age is ${this.age}`);
//     // }
//     // getDetail: user.getDetail,
//     __proto__ : user
// }

// const teacher = {
//     name : "akash sir",
//     age : 32,
//     // getDetail : function(){
//         //     console.log(`My name is ${this.name} and age is ${this.age}`);
//         // }
//         // getDetail : user.getDetail, // ye hame hamara data load hone ke sath hi dikhega
//         __proto__ : user // ye hamare prototype me store hoga jo load hone par dikhega nhi 
// }

// // student. __proto__ = user;
// // teacher. __proto__ = user;

// student.getDetail(); // My name is hansraj and age is 23
// teacher.getDetail(); // My name is akash sir and age is 32

// // getDatail : user.getDetail ka use karne par
// // console.log(student); // {name: 'hansraj', age: 23, getDetail: ƒ}
// // console.log(teacher); // {name: 'akash sir', age: 32, getDetail: ƒ}

// // __proto__ : user ka use karne par
// // isme getDetail function output me nhi dikhega kyonki vo prototype me store ho gya hai jab  hame uski jarurat hogi tab ham usse call kar sakte hai 
// console.log(student); // {name: 'hansraj', age: 23}
// console.log(teacher); // {name: 'akash sir', age: 32} 


// 2. myAppData globally object ki ek property ban gyi hai jise koi bhi use kar sakta hai 

// Object.prototype.myAppData = "this is a sample project";

// const student = {
//     name: "hansraj",
//     age: 24
// }
// console.log(student.myAppData);  // this is sample project

// let y = {}
// console.log(y.myAppData); // this is sample project


// 3. property ki jagah ham function bhi add kar sakte hai

// Object.prototype.myAppData = function(){
//     return "custum function"
// }

// let y = {}
// console.log(y.myAppData());  // custum function


// 4. object ki jagah ham string bhi use kar sakte hai 

// String.prototype.otherData = "this is a proto for string"
// let student = {
//     name: 'hansraj',
// }
// console.log(student.name.otherData); // this is a proto for string
// console.log("hello".otherData); // this is a protot for string

// 5. string datatype ke liye ek function create karenge

// String.prototype.custumLength = function(){
//     return this.length+2;
// }

// let student = {
//     name: 'hansraj',
// }

// console.log(student.name.custumLength()); // 9 // actual length hai 7 or usme 2 add kar diya hamne 
// we should not change bydefault properties. 