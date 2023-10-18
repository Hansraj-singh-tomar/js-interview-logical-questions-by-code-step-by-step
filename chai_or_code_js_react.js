// Q. we have an array and in that it has its some additional properties and
// we have to display only its original properties

// Array.prototype.extraProperty = "chai or code";
// const myNewArray = [1, 2, 3, 4, 5]

// for (let v in myNewArray) {
//     console.log(v); // output - 1,2,3,4,5,extraProperty

//     if (myNewArray.hasOwnProperty(v)) {
//         console.log(v);  // 1,2,3,4,5 - ye sab myNewArray ki khud ki properties hai
//     }
// }

// Q. Implement a custom forEach in javascript

// for_each loop - it's similar to map() function but it don't return new array
// let arr = [1, 2, 3, 4];
// arr.forEach((item, index, arr) => {
//     arr[index] = item * 2; // 2,4,6,8
// })

// console.log(arr);

// // pollyfill of for_each
// let arr = [2, 3, 4, 5];

// // First Way
// Array.prototype.forEachOne = function (callback) {
//     for (let i = 0; i < this.length; i++){
//         callback(this[i], i, this)
//     }
// }

// arr.forEachOne((item, i, arr) => {
//     arr[i] = item * 3;
// })

// console.log(arr);

// // Second Way - for SDE=2,3
// Array.prototype.forEachTwo = function (callback, thisContext) {
//     if (typeof callback !== "function") {
//         throw new Error("This is not callable");
//     }

//     const length = this.length;
//     let i = 0;
//     while (i < length) {
//         if (this.hasOwnProperty) {
//             callback.call(thisContext, this[i], i, this)
//         }
//         i++;
//     }
// }

// Interview Question on counter

// import React, { useState } from 'react';
// function App() {
//     const [count, setCount] = useState(15);
//     function increment() {

//         // esa karne par hamari value pehle  16 then 17 then so on.. ye 19 or 20 par nhi rukega
//         // ye run hote hi jayega
//         setCount(count + 1)
//         setCount(count + 1)
//         setCount(count + 1)
//         setCount(count + 1)

//         // ab hame 19 tak hi increment karna hai tab ham esse update karenge state ko
//         setCount((preCount) => preCount + 1);
//         setCount((preCount) => preCount + 1);
//         setCount((preCount) => preCount + 1);
//         setCount((preCount) => preCount + 1);
//         // output = 19
//     }

//     function decrement() {
//         setCount(count - 1);
//     }
//     return (
//         <>
//             <h1>{ count }</h1>
//             <button onClick={increment}>Inc</button>
//             <button onClick={decrement}>Dec</button>
//         </>
//     )
// }

// dengerouslySetInnerHTML attribute in React

import React from "react";

const data = "<h1 style='color: blue'>Some really useful content</h1>";
// Cross site Scripting(XSS) attacks
export default function App() {
  return <div dangerouslySetInnerHTML={{ __html: data }} />;
}
