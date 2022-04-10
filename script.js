// Write one example explaining how you can write a callback function ?
// function

function greet(name, callback) {
    console.log('Hi' + ' ' + name);
    callback();
}

function callMe() {   // callback function

    console.log('callback');
}

greet('Yukesh', callMe);   // passing function as an argument



// "Write callback function to print numbers from 1 to 7, in which 1 should be printed after 1 sec ,
//  2 should be printed after 2 sec, 3 should be printed after 3 sec and so on. 

// Explain callback hell.
// Numbers
// 1
// 2
// 3
// 4
// 5
// 6
// 7"

let Hell = () => {
       setTimeout(()=>{
           console.log("1");
            setTimeout(()=>{
              console.log("2");
               setTimeout(()=>{
                  console.log("3");
                   setTimeout(()=>{
                      console.log("4");
                        setTimeout(()=>{
                          console.log("5");
                          setTimeout(()=>{
                              console.log("6");
                              setTimeout(()=>{
                                  console.log("7");
                              },1000)
                          },1000)
                     },1000)
                 },1000)
             },1000)   
         },1000)
     },1000)
    }
    Hell()     //the triangle formed is known as call back hell it prints 1 after 1sec and so on
    


// "Write promise function to print numbers from 1 to 7, in which 1 should be printed after 1 sec , 2 should be printed after 2 sec, 3 should be printed after 3 sec and so on. 

// Numbers
// 1
// 2
// 3
// 4
// 5
// 6
// 7"

function promisess(num){
       return new Promise((resolve,reject)=>{
           setTimeout(()=>{
               console.log(num);
               resolve('promise done')
           },1000)
       })
    }
    promisess("1").then(()=>promisess("2")).then(()=>promisess("3")).then(()=>promisess("4"))
    .then(()=>promisess("5")).then(()=>promisess("6")).then(()=>promisess("7"))



//Create a promise function accepting a argument, if yes is passed to the function then it should go to resolved state and print Promise Resolved,and if nothing is passed then it should go to reject state and catch the error and print Promise Rejected 

function  promise(result){
    return new Promise((resolve,reject)=>{
       if(result=="yes"){
           console.log("Promise Resolved");
       }
       else{
        console.log("Promise Rejected");

       }
    })
}
promise("yes").then((result)=>{console.log(result);}).catch((result)=>{console.log(result);})
promise().then((result)=>{console.log(result);}).catch((result)=>{console.log(result);})



// Create examples to explain promises function




let promiseA = new Promise((resolve, reject) => {  // creating a new promises
    console.log("this is A")
    resolve('A')
})

setTimeout(() => {
    console.log('timeout')
}, 0)

promiseA.then((result) => {
    console.log('Me second')
})




// Create examples to explain async await function



function printLetter(letter) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                // console.log(letter)
                resolve(letter)
            }, 1000)
        })
    }
    

async function prinAlphabets() {
        let ans1 = await printLetter('A')
        console.log(ans1)
        console.log('Before B gets resolved')
        let ans2 = await printLetter('B')
        console.log(ans2)
        console.log('Before C gets resolved')
        let ans3 = await printLetter('C')
        console.log(ans3)
    }

    prinAlphabets()
    

    // Create examples to explain promise.all function

const promise1 = Promise.resolve(3);
const promise2 = 42;
const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, 'foo');
});

Promise.all([promise1, promise2, promise3]).then((values) => {
  console.log(values);
});
