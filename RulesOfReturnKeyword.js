//  rules of return keyword
// 1.
// function abc(){
//     return (
//         "hansraj"
//     )
// }
// console.log(abc()); // hansraj

// 2.
// function abc2(){
//     return {
//         "hansraj"
//     }
// }
// console.log(abc2()); // SyntaxError: Unexpected string

// 3. 
// function abc2(){
//     return {
//         hansraj
//     }
// }
// console.log(abc2()); // ReferenceError: hansraj is not defined at abc2

// 4. 
// function abc2(){
//     let name = "hansraj";
//     return {
//         name,
//     }
// }
// console.log(abc2()); // {name: 'hansraj'}

// 5. 
// function foo(){
//     return {
//         name:'anil'
//     }
// }
// console.log(foo()); // {name: 'anil'}

// 6.
// function foo(){
//     return 
//     {
//         name:'anil'
//     }
// }
// console.log(foo()); // undefined
