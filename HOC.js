// Q. Default high order function
// Q. make custom High order function
// 1. 
// let data = 10;
// Number.prototype.customFun = function(fun1){
//     console.log(this); // Number {10}
//     // console.log(x); // (x) => x*100
//     // console.log(fun1(this)); // 1000
//     // return fun1(this)
// }
// let result = data.customFun((x) => x*100);
// console.log(result); // 1000

//2.
// let data = [2,3,4,5,6];

// Array.prototype.custumMap = function(x){
//     // console.log(this); // (5) [2,3,4,5,6]
//     return 20;
// }

// let output = data.custumMap((item) => item*2)
// console.log(output); // 20 

//3.
// let data = [2,3,4,5,6];

// Array.prototype.custumMap = function(fun){
//     console.log(this); // (5) [2, 3, 4, 5, 6]
//     const result = [];
//     for( let i = 0; i<this.length; i++){
//         // console.log(this[i]); // 2 3 4 5 6
//         // console.log(fun(this[i])); // 4 6 8 10 12
//         result.push(fun(this[i]))
//     }
//     return result;
// }
// // let output = data.custumMap(function(item){
// //     return item*2;
// // })
// // or
// let output = data.custumMap((x) => x*2);
// console.log(output);  // (5) [4,6,8,10,12]