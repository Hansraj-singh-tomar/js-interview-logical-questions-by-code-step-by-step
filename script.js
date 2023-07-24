// 1. 
// let a = [];
// let b = [];
// jab bhi ham 2 array ko compare karte hai to ham unki memory ko compare karte hai 
// console.log(a==b);  // false 
// console.log(a===b); // false

// 2. yha hamne a array ki memory ka reference b me pass kar diya hai
// let a = [];
// let b = a;
// console.log(a==b);  // true 
// console.log(a===b);  // true

// 3.
// let a = [20]; 
// let b = [20]; 
// yha par memory compare nhi hogi, yha par element ki value compare hogi 
// console.log(a[0] == b[0]);  // true
// console.log(a[0] === b[0]); // true

// let a = [20]; 
// let b = ['20']; 
// yha par memory compare nhi hogi, yha par element ki value compare hogi 
// console.log(a[0] == b[0]);  // true
// console.log(a[0] === b[0]); // false

// 4. 
// let z = [1,2,3,4]
// let a = { name: "anil"};
// console.log(...z); // 1 2 3 4 type is string 

// 5.  NaN - not a number
// console.log(typeof NaN); // number 
// console.log("hansraj"/2); // NaN

// 6. 
// let data = 10 -  -10;
// console.log(data); // 20

// 7. 
// const set = new Set([1,2,2,3,4,5,5]);
// console.log(set); // set(5) {1,2,3,4,5}

// 8. 
// let data = {name: "Anil"}
// console.log(delete data.name); // true
// console.log(data);  // {}

// 9. data object ko ham delete keyword ki help se direct delete nhi kar sakte hai 
// ham sirf object ki property ko hi delete kar sakte hai 
// const data = {name:"anil"};
// console.log(delete data); // false
// console.log(data); // {name: 'anil}

// 10.
// const data = ["a","b","c"]
// const [y] = data;
// console.log(y); // a
// console.log(typeof y); // string 
// const [ ,y] = data;
// console.log(y);  // b
 
// 11. how to get name and get property without using dot(.)
// const data = { name:"anil",age:29,skill:'js'}
// const {name, age} = data;
// console.log(name); // anil
// console.log(age); // 29

// 12. merge two object 
// let data = {name:"hansraj",age:23,skill:"js"};
// let info = {city:"noida",mail:"hans@gmail.com"};
// data = {...data,...info};
// console.log(data);  // {name: 'hansraj', age: 23, skill: 'js', city: 'noida', mail: 'hans@gmail.com'}

// 13. // isme value repeat ho sakti hai but in object we can't repeat key in same object
// let arr1 = [1,2,3,4];
// let arr2 = [4,5,6];
// let arr3 = [...arr1,...arr2];
// console.log(arr3); // [1,2,3,4,4,5,6]

// 14. yha skill key ki value value override ho jayegi js se react me 
// let data = {name:"hansraj",age:23,skill:"js"};
// let info = {city:"noida",skill:"react"};
// data = {...data,...info};
// console.log(data); // {name: 'hansraj', age: 23, skill: 'react', city: 'noida'}

// 15. name is not function it's a variable so we can't call  
// const name = "Hansraj";
// console.log(name()); // typeError: name is not a function 

// 16. OR operator rules
// const result = false || {} || null;
// // because {} epty object is a truthy value, truthy value ki priority jyada rehti hai  
// // falsy value - null,"",undefined,false,NaN,0,-0.
// // truthy value - {},[],34,-54,infinity,true,"text"," "
// console.log(result); // {}

// 17. 
// const result = null || "" || undefined;
// console.log(result);  // undefined 
// // here are all falsy value jo bhi last me hoga usse show kar dega as a output 
// // agar sari truthy value hai to jo pehli vali value hai usse as a output show kar dega 

// 18. 
// let obj = {
//     name:'hansraj',
//     name:"shivani"
// }
// console.log(obj);

// 19.
// console.log(Promise.resolve(5));  // Promise {<fulfilled>: 5}

// 20. emojis ke compare me ham unke unicode ko compare karte hai
// console.log("❤" === "❤"); // true 

// 21. JSON.parse();
// Ans - parse JSON to a js value
// Wrong - parse JSON to a js object only

// 22. hoisting concept in let and const
// let name = "hansaraj";
// function getName(){
//     console.log(name);  // ReferenceError: Cannot access 'name' before initialization
//     let name = 'anil';
// }
// getName();

// 23. another example of hoisting
// let name = "hansraj";
// function getName(){
//     console.log(name); // hansraj 
// }
// getName();

// 24.
// console.log(`${(x =>x)('I love')} to program`); // i love to program

// Breaking down it.
// ((x) => {
//     // return x;
//     console.log(x); // i love
// })("i love")


// 25.
// function sumValues(x,y,z){
//     return x+y+z;
// }
// console.log(sumValues(...[1,2,3])); // 6
// console.log(sumValues(1,2,3));


// 26. left to right operation run karna hai 
// let name =  " code step by step";
// console.log(typeof name); // string
// console.log(!typeof name); // false
// console.log(!typeof name === "object"); // false // yha ham false === "object" check kar rhe hai 
// console.log(!typeof name === "string"); // false
// console.log(!typeof name === false); // true // kyonki false === false check kar rhe hai 


// 27
// const name = "hansraj";
// const age = 25;

// console.log(isNaN(name)); // true 
// console.log(isNaN(age)); // false

// 28. Object.seal(person); is method ka use karke ham person object me or koi nyi property add nhi kar sakte hai
// jo property already hai unhe ham sirf modify kar sakte hai  
// let person = {name : 'hansraj'};
// Object.seal(person);
// person.age = 24;
// console.log(person); // {name : 'hansraj'}  age property add hi nhi hui 
// person.name = "nikita";
// console.log(person); // {name : 'nikita'}


// 29. remove first element from array
// let data = [2,3,4,5];
// data.shift();
// console.log(data); // [3,4,5]

// 29(1)
// let data2 = [2,3,4,5];
// data2 = data2.shift();
// console.log(data2); // 2

// 30. remove last element from array
// let data = [1,2,3,4,5];
// data.pop();
// console.log(data); // [1,2,3,4]


// 31. check any value is odd or even
// let n = 23;
// if(n%2==0){
//     console.log('even number');
// }else{
//     console.log("odd number");
// }


// 32.
// let data = {
//     name : "hansraj",
//     age : 23
// }
// delete data.name;
// console.log(data); // {age:23}
// delete data;
// console.log(data); //  {name: "hansraj", age: 23}


// 33. convert data to boolean false value 
// let data = "true";
// console.log(typeof data); // string
// console.log(typeof !data); // boolean // string ka ulta false kar diya
// console.log(!data); // false

// 34. convert data to boolean true value
// let data = "true";
// console.log(typeof data); // string
// console.log(typeof !data); // boolean // string ka ulta false kar diya
// console.log(!data); // false
// console.log(!!data); // true

// 35. array me jab bhi ek value ko delete karte hai to vo ek dam blank space (empty) ban jata hai 
// null or undefined bhi apne aap me kuch space lete hai but here empty is not taking any space  
// let data = ["anil","hansraj","avani"]
// delete data[1];
// console.log(data); // (3)["anil",empty,"avani"]
// console.log(data.length); // 3 

// 36. 
// let arr = [1,2,2,3,4];
// let arr2 = [3,5,6];
// let obj = new Set([...arr,...arr2]);
// console.log(obj); // set(5) {1,2,3,4,5,6}


// 37.
// // wrong - 
// let 10A = "hansraj"
// console.log(10A); // syntaxError: Invalid or unexpected token 
// // right - 
// let A10 = "hansraj"
// console.log(A10);  // hansraj


// 38(1) - yha plus operator string ko number me convert kar deta hai

// console.log("b" + "a" + + "a" + "a"); // baNANa  // here nan is NAN
// console.log(("b" + "a" + + "a" + "a").toLowerCase()); // banana  

// console.log('5'); // 5 (in white color)
// console.log(5); // 5 (in blue color)

// console.log(-'5'); // -5
// console.log(typeof (-'5')); // number
// console.log('5' - '5'); // 0
// console.log(5 - '5'); // 0
// console.log('5' - 5); // 0
// console.log('5'- -'5'); // 10

// console.log(+'5'); // 5
// console.log(typeof (+'5'));  // number 
// console.log(5+5);  // 10 
// console.log('5'+'5'); // 55
// console.log(5+'5'); // 55
// console.log('5'+5); // 55
// console.log(5+ +'5'); // 10

// console.log("A" - "B" + "2"); // NaN2
// console.log("A"-"B"); // NaN
// console.log(NaN + 2); // NaN
// console.log("A" - "B" + 2); // NaN


// console.log(NaN === NaN); // false
// console.log(NaN === 'number'); // false
// console.log(typeof NaN); // number
// console.log(typeof NaN === 'number'); // true

// console.log({} + [] === 0); // false
// console.log([] + [] === ''); // true
// console.log([] == 0); // true
// console.log([] * 1 === 0); // true
// console.log(false + 1 === 1); // true


// 39. 
// let a = 3;
// setTimeout(()=>{
//     console.log(a); // 26
// },0);
// a= 26;


// 40. small a and capital A ka unicode alag alag hota hai
// let a = 20;
// let A = 35;
// console.log(a); // 20
// console.log(A); // 35


// 42.
// let a = "like";
// let b = `like`;
// console.log(a===b); // true


// 43.
// let a = 1;
// let c = 2;
// console.log(--c === a); // true

// 44. 
// let a = 1;
// let b = 1;
// let c = 2;
// console.log(a===b); // true
// console.log(true === --c); // false
// console.log(a === b === --c); // false

// 45.
// console.log(3*3); // 9
// console.log(3**3); // 27
// console.log(3***3);  // unexpected token '*'

// 46. 
// console.log(a); // undefined
// var a ;

// 47.
// console.log(a);
// let a;  // ReferenceError: Cannot access 'a' before initialization

// 48.
// console.log([[[[]]]]); // ye hame ek array ke andar dusra and dusre ke andar tisra and so on
// last vale array ke andar zero element ke baki sab me ek ek element hai

// 49. How to find OS Name
// console.log(navigator.platform);  // Win32

// 50. let for = 200; // it won't work because for is a reserved keyword

// 51.
// function fruit(){
//     console.log(name); // undefined
//     console.log(price); // ReferenceError: Cannot access 'price' before initialization
//     var name = 'apple';
//     let price = 20;
// }
// fruit();

// 52. using var 
// for(var i=0; i<3; i++){
//     setTimeout(()=>console.log(i),1); // 3 3 3
// }

// 53. using let 
// for(let i=0; i<3; i++){
//     setTimeout(()=>console.log(i),1); // 0 1 2
// }

// 53(2) using var
// function outer(){
//     for(var i=0;i<3;i++){
//     function inner(i){
//         setTimeout(()=>console.log(i),1); // 0 1 2 
//     }
//     inner(i);
//     }
// }
// outer();

// 54. use of plus(+) operator
// console.log(+true); // 1
// console.log(+false); // 0
// console.log(typeof +true); // number

// 55. not(!) operator 
// console.log("anil"); // anil
// console.log(!"anil"); // false
// console.log(typeof("anil")); // string

// 56. 
// let data = 'size';
// const bird = {
//     size: "small",
// };
// bird["pin-number"] = 1234;
// console.log(bird);  // {size: 'small', pin-number: 1234}
// console.log(bird["pin-number"]); // 1234
// console.log(bird[data]); // small
// console.log(bird["size"]); // small
// console.log(bird.size); // small
// console.log(bird.data); // undefined

// 57.


// 60 
// let a = 3;
// let b = new Number(3);

// console.log(a == b); // true
// console.log(a === b); // false 
// console.log(typeof b); // object 


// 63.
// function sum(a,b){
//     return a + b;
// }
// console.log(sum(1,'2')); // 12

// 64. 
// let number = 0;
// console.log(number++); // 0 
// console.log(++number); // 2
// console.log(number); // 2

// 65. // spread operator - iska typeof object aayega
// function getAge(...args) {
//     console.log(typeof args); // object 
// }
// getAge(21);  // object
    
// JS ke andar array kabhi bhi data type nhi hota hai object hota hai
// let a = [1,2,3,4];
// console.log(typeof a);  // object
// console.log(typeof {}); // object
// console.log(typeof []); /// object
// console.log(Array.isArray([])); // true
// console.log([] instanceof Array); // true

// 66. 
// function getAge(){
//     'use strict';
//     age = 21;
//     console.log(age); // age is not defined // without let/var ka use na karne par 
// }
// getAge();

// 67
// const sum = eval("10+10+5");
// console.log(sum); // 25
// console.log(typeof sum); //number

// 69. ham variable ko number jaise define nhi kar sakte but object ki key ko kar sakte hai 
// uss value ko as a string or number kisi bhi tarah se check kar sakte hai 

// const obj = { 1:'a',2:'b',3:'c'};
// console.log(obj.hasOwnProperty("1")); // true
// console.log(obj.hasOwnProperty(1)); // true


// 71.
// for(let i=1;i<5;i++){
//     if(i===3) continue; // i =3 ke liye loop nhi chalega
//     console.log(i);  // 1 2 4
// }

// 73.  ye code html file me chalega not in js file
{/* <div>
<div onclick="console.log('first div')">
    <div onclick="console.log('second div')">
        <button onclick="console.log('button')">
            click!
        </button>
    </div>
</div>
</div> 
output - button -> second div -> first div*/}


// 74.
// const person = {name: 'anil'};

// function sayHi(age){
//     return `${this.name} is ${age}`;   
// }
// console.log(sayHi.call(person,21));  // anil is 21
// console.log(sayHi.bind(person,21));  // f sayHi(age){ return `${this.name} is ${age}`; }
// console.log(sayHi.bind(person,21)());  // 21
// let ans = sayHi.bind(person,21);
// console.log(ans()); // anil is 21

// 75. 
// function sayHi(){
//     return (() => 0)();
// }
// console.log(sayHi()); // 0
// console.log(typeof sayHi()); // number

// 76(1)
// function sayHi(){
//     return () => 0;
// }
// console.log(sayHi()); // () => 0
// console.log(typeof sayHi()); // function
// console.log(typeof sayHi()()); // number

// 76(2)
// let num = (() => 0);
// console.log(num); // () => 0

// 77.
// console.log(typeof 1); // number
// console.log(typeof number); // undefined
// console.log(typeof 'number'); // string
// console.log(typeof typeof 1); // string

// 78.
// const numbers = [1,2,3];
// numbers[6] = 11;
// console.log(numbers); // [1,2,3,empty,empty,empty, 11]

// 79. 
// const numbers = [1,2,3];
// numbers[9] = numbers;
// console.log(numbers); // [1, 2, 3, empty × 6, Array(10)]

// 80. everthing in js is either a...
// Ans. primitive(string,number,boolean) or object
// jab bhi ham typeof check karte hai tab hame ye sab milte hai 

// 81(1). null bhi falsy value hai 
// console.log(null); // null
// console.log(!null); // true
// console.log(!!null); // false

// 81(2). "" ye falsy value hai
// console.log(""); // 
// console.log(!""); // true
// console.log(!!""); // false

// 81(3)
// console.log(1); // 1
// console.log(!1); // false
// console.log(!!1); // true

// 82. ye teeno console different-different id's return karenge jinka use karke ham setInterval ko rokenge/band kar sakte hai
// console.log(setInterval(() => console.log('hi'), 1000));
// console.log(setInterval(() => console.log('hi'), 1000));
// console.log(setInterval(() => console.log('hi'), 1000));
// 1 2 3 and then hi hi hi and har ek second me hi hi hi print karte jayega

// 83. spread operator (...)
// console.log([..."anil"]); // (4) ['a', 'n', 'i', 'l']
// console.log(...'anil'); // a n i l
// console.log({...'anil'}); // {0: 'a', 1: 'n', 2: 'i', 3: 'l'}

// 84. Promise.race() means inn dono promise me se jo bhi pehle vala promise resolve hoga vo chalega  
// const firstPromise = new Promise((res,rej) => {
//     setTimeout(res,500,'one');
// })
// const secondPromise = new Promise((res,rej) => {
//     setTimeout(res,100,'two');
// })
// Promise.race([firstPromise, secondPromise]).then(res => console.log(res));


// 85(1). 
// let person = { name: 'peter'};
// const members = [person];
// person = null;
// console.log(members); // [{ name: 'peter'}]
// console.log(person); // null 

// 85(2).
// let person = { name: 'peter'};
// let members = person;

// members = null;
// console.log(members); // null
// console.log(person); // {name: 'peter'}

// 85(3).
// let person = {
//     name:"peter"
// }
// let members = person;

// members.name = 'hassnraj';
// console.log(person);  // {name: 'hassnraj'}
// console.log(members);  // {name: 'hassnraj'}

// members.name = null;
// console.log(person); // {name:null}
// console.log(members); // {name:null}

// 86.
// const person = {
//     name:'hansraj',
//     age: 21,
// };
// for(const item in person){
//     console.log(item); // name age
//     console.log(`key is ${item} and value is ${person[item]}`);
//     // key is name and value is hansraj 
//     // key is age and value is 21 
// }

// 87. hamare jo operation hai vo left to right chalte hai
// let data = 3 + 4 + '5';
// console.log(data); // 75
// console.log(typeof data); // string

// yha bhi left to right chla operation
// console.log(typeof 3); // number 
// console.log(4 + '5'); // 45 
// console.log(typeof 3 + 4 + '5'); //  number 45

// ab yha bracket ki priority jyada ho gyi hai 
// console.log(typeof (3 + 4 + '5')); // string
// console.log(typeof (3 + 4 + +'5')); // number

// let data2 = 3 + 4 + +'5';
// console.log(data2); // 12
// console.log(typeof data2); // number

// 88.


// 90. dono array ka memory location alag alag hai to false aayega output
// console.log([]==[]); // false
// console.log([]===[]); // false

// 91. return hame bydefault undefined return karta hai
// let data = [1,2,3].map(num => {
//     if(typeof num ==='number') return ;
//     return num * 2;
// });
// console.log(data);  // (3) [undefined, undefined, undefined]

// 92.
// function getInfo(member){
//     member.name = "hansraj";
// }
// const person = { name: 'bhole'};
// getInfo(person);
// console.log(person); // {name : 'hansraj'}

// 93. 
// function Car(){
//     this.make = 'tata';
//     return {make: 'kia'};
// }

// const myCar = new Car();
// console.log(myCar.make); // kia

// 94.
// (() => {
//     let x = (y = 10);
// })();
// console.log(typeof x); // undefined, because x ka scope bahar tak nhi hai x ka block scope hai so we can't get x outof it's scope

// 95.
// (() => {
//     let x = y = 10; // let x=10; var y=10;
// })();
// console.log(typeof y); // number // bydefault y = 10; var y = 10; ho gya 

// 96.
// (() => {
//     let x = 10;
// })();

// (() => {
//     let x = 10;
// })();

// console.log(typeof x); // undefined

// 97.
// (() => {
//     let x = y = 10;
// })();

// (() => {
//     let x = y = 20;
// })();

// console.log(y); // 20 

// 98(1)
// let x = 100;
// (() => {
//     var x = 20;
// })();
// console.log(x); // 100

// 98(2)
// (function(){
//     a=b=3; // yha a and b dono ka scope global ho gya hai 
// })();
// console.log(typeof a); // number
// console.log(typeof b); // number

// 98(3)
// (function(){
//     // b = 3 ; // ye global scope me aa jayega
//     // var a = b ;
//     var a=b=3;   
// })();
// console.log(typeof a); // undefined
// console.log(typeof b); // number

// 98(4)
// function fun(){
// 	const a = b = c = 1;  // const a and var b and var c
//    console.log(typeof a, typeof b, typeof c);  // "number" "number" "number" 
// }
// fun();
//  console.log(typeof a, typeof b, typeof c);  // "undefined" "number" "number" // const a ko ham bahar access nhi kar sakte hai isliye hame undefined dekhne ko mil rha hai 

// 99.
// true = 1
// false = 0
// !true = 0
// !false = 1
// console.log(!true - true); // -1

// 100.
// console.log(true + +'10'); // 11 

// 101
// const nums = [1,2,3,2,4,3];
// const res = nums.reduce((acc, curr) => {
// 	return !acc.includes(curr) ? [...acc,curr] : acc; // [1,2,3,4]
//   // return acc.includes(curr) ? [...acc,curr] : acc; // []
//   // return acc; // []
// },[])

// console.log(res); // [1,2,3,4]

// 102
// const num1 = 0;
// const num2 = "0";

// const res1 = num1 || null;
// const res2 = num2 || null;

// console.log(res1); // null
// console.log(res2); // "0"
// console.log(true || null) // true
// console.log(false || null) // null
// console.log(true || false || null)  // true
// console.log(undefined || null)  // null
// console.log(null || undefined)  // undefined

// 103
// const str = "Jayesh-Jc";
// const result = str.split("-");

// console.log(str); // "Jayesh-jc"
// console.log(result); // ["Jayesh", "jc"]

// 104
// const arr1 = new Array(3);
// const arr2 = new Array(1,2,3);
// console.log(arr1); // [undefined, undefined,undefined]
// console.log(arr2); // [1,2,3]

// 105
// let name = "jayesh"
// let result = "";
// for(let char of name){
// 	result = char + result;
// }
// console.log(result); // "hseyaj"


// 105(2)
// let fruits = ["apple","banana","kiwi"];
// for(name of fruits){
//     console.log(name);  // "apple" "banana" "kiwi"
// }



// -----------------------------------------------------------------------------------------------------
// other output based logical questions - Code step by step

// 1.
// (function(){
//     var a=b=3;

//     // we will write it like that
//     // b=3;
//     // var a = b;

//     console.log(a); // 3
//     console.log(b); // 3
// })();
// console.log(typeof a); // undefined 
// console.log(typeof b); // number
// console.log(a); // ReferenceError: a is not defined 
// console.log(b); // 3

// 2. return must be like that return { ... } curly brackes must be start with in a line otherwise it will give us error
// function foo(){
//     return 
//     {
//         name: "hansraj"
//     }
// }
// console.log(foo()); // undefined


// 3. 
// let a = 3;
// let b = +"4";
// let c = -"5";
// console.log(typeof a); // number 
// console.log(typeof b); // number
// console.log(typeof c); // number
// console.log(c); // -5
// console.log(typeof (a+c)); // -2 // typeof (a+c) number 
 

// 4.
// var a = 0;
// function b(){
//     a = 10;
//     return ;
//     var a = function(){}
// }

// console.log(b()); // undefined
// console.log(a); // 0

// 5.
// var a = 0
// function fun(){
//     a = 15
//     console.log(a); // 15
// }
// console.log(a); // 0
// fun();

// 6. - concept of hoisting 
// test();
// function test(){
//     console.log("test fun called");
// }

// 7. 
// function expression ki hoisting nhi hoti hai => const temp = function(){ ... }
// but function declaration ki hoisting hoti hai => fun(){....}

// console.log(test); // undefined
// test(); // test is not a function 
// var test = function(){
//     console.log("function called");
// }
 

// 8. - This is also concept of hoisting
// function test(){
//     function foo(){
//         return 100;
//     }

//     return foo()

//     function foo(){
//         return 10;
//     }
// }
// console.log(test());// 10 // return 10 vale foo function ne isse override kar diya hai before retunring foo function  

// 9. Based on Boolean 
// console.log(true + true); // 2
// console.log(true + false); // 1
// console.log(-true+true+false); // 0

// 10. This Question is asked in Microsoft Interview 
// you will have given 
// var addSix = createBase(6);
// addSix(19); // return 16
// addSix(21); // return 27,  so we will use in that case closure

// function createBase(a){
//     return function(b){
//        console.log(a+b);
//     }
// }
// var addSix = createBase(6);
// addSix(10);
// addSix(21);

// 11. 
// console.log(!10); // false 
// console.log(!false); // true
// console.log(!!10+20); // !10 = false then !false = true and true = 1 and 1 + 20 = 21

// 12.
// let x = 0;
// console.log(x++); // 0
// console.log(x); // 1 
// console.log(++x); // 2
// console.log(++x); // 3

// 13.
// console.log(3+4+"5"); // "75"

// 14.
// const obj = {
//     a: "one",
//     b: "two",
//     a: "three"
// };
// console.log(obj); // {a: 'three', b: 'two'}

// 15.
// let person = {name: "hansraj"};
// const members = [person];
// person = null;
// console.log(members); // [{name: "hasnraj"}]
// console.log(person); // null

// 16.
// let person = {
//     name: "hansraj"
// }

// const member = person;
// person = null;
// console.log(person); // null
// console.log(member); // {name: "hasnraj"}

// 17.
// let person = {
//     name: "hansraj"
// }

// const member = person;
// member.name = "Rohit"
// console.log(person); // {name: "rohit"}
// console.log(member); // {name: "rohit"}

// 18.
// function getAge(...args){
//     console.log(typeof args); // 'object'
// }
// getAge<(21); 

// 19. how will you optimize performance of loop

// let arr = [1,2,3,]
// let length = arr.length; // isse yha alag se variable me assign karne par hamare loop ki performance optimize hogi 
// for(let i = 0; i < length; i++){
    // Do some work
// }

// 20.
// console.log(typeof NaN); // number

