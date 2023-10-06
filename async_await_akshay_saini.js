      //By Akshay saini
      // const p = new Promise((resolve, reject) => {
      //   setTimeout(() => {
      //     resolve("Promise Resolved Value")
      //   }, 5000)
      // })

      // Note - jaise hi await dekhne ko milta hai js engine uss promise ko resolve karne me lag jata hai 
      // 1.
      // Using Promises 
      // async function getData(){
      //   p.then((res) => console.log(res));
      //   console.log("Namaste Javascript");
      // }
      // getData() 
      // output - Namaste javascript 
      //          Promise Resolved value 

      // 2.
      // Using Async_await 
      // async function handlePromise(){
      //   const val = await p;
      //   console.log(val);
      //   console.log("Namaste Javascript");
      // }
      // handlePromise();
      // // ye pura ek sath 5sec. baad execute hoga
      // // the code was waiting at line number 27 for 5 Sec then execute altogether
      // // JS engine was waiting for promise to resolved - But internally it's not happening
      // // output - Promise Resolved value
      // //          Namaste Javascript

      // 3.
      // async function handlePromise() {
      //   console.log("Hello World");

      //   // Js Engine was waiting for promise to resolved - But internally it's not happening
      //   const val = await p;
      //   console.log(val);
      //   console.log("Namaste Javascript");
      // }
      // handlePromise();
      // output - Hello world
      //          Promise Resolved value
      //          Namaste Javascript
      // Hello World run first then after 5Sec. next two line run

      // // 4. What will happen in case of two promises 
      // const p1 = new Promise((resolve, reject) => {
      //   setTimeout(() => {
      //     resolve("Promise Resolved Value")
      //   }, 5000)
      // })

      // const p2 = new Promise((resolve, reject) => {
      //   setTimeout(() => {
      //     resolve("Promise-2 Resolved Value")
      //   }, 10000)
      // }) 
      // async function handlePromise() {
      //   console.log("Hello World");

      //   // Js Engine was waiting for promise to resolved - But internally it's not happening
      //   const val = await p1;
      //   console.log(val);
      //   console.log("Namaste Javascript");

      //   const val2 = await p2;
      //   console.log(val2);
      //   console.log("Namaste Javascript");
      // }
      // handlePromise();
      // // output - Hello world
      // // pehle 5 Sec vala promise resolved hoga than 10 sec vala promise resolve hoga
      // //          Promise Resolved value
      // //          Namaste Javascript
      // // After 10 sec.
      // //          Promise-2 Resolved value
      // //          Namaste Javascript

      // 5. What will happen in case of two promises 
      const p1 = new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve("Promise Resolved Value")
        }, 10000)
      })

      const p2 = new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve("Promise-2 Resolved Value")
        }, 5000)
      }) 
      async function handlePromise() {
        console.log("Hello World");

        // Js Engine was waiting for promise to resolved - But internally it's not happening
        const val = await p1;
        console.log(val);
        console.log("Namaste Javascript");

        const val2 = await p2;
        console.log(val2);
        console.log("Namaste Javascript");
      }
      handlePromise();
      // output - Hello world
      // dono 10 Sec baad resolve honge
      //          Promise Resolved value
      //          Namaste Javascript
      //          Promise-2 Resolved value
      //          Namaste Javascript

      // Note - JS engine just appear to waiting, it not consuming memory or occupaying call stack
      // sabse pehle hamara handlePromise function call stack me aayega and then 
      // it will start executing line by line then 
      // it will print hello world and then 
      // as it see await this handlePromise execution suspent and this will move outof call stack or remove from call stack
      // and it won't block the call stack  
      // and then it will wait till than it p1 won't resolved than only it will move ahead
      // as promise resolved, this handlePromise function come again inside the call stack
      // and it again start executing but this time it will start executing where it actually left.
      