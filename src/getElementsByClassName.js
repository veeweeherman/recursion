// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className){
  // your code here
};

// Object.keys
// search the HTML and find somethign by class classNamelike like the traverse-DOM w buttons from twittler

//notes
// function factorial(n) {
//   //base case
//   if (n === 0) {
//     return 1;
//   } 
//   //terminal case
//   else if (n < 0) {
//     console.log("cannot enter negative numbers")
//   } //recursive case
//   return n * factorial(n-1) //this leads to base case
// }
// function loopFactorial(n) {
//   var result = n;
//   while (n > 1) {
//     result = result * (n-1);
//     n--;
//   }
//   return result;
// }

// function recursiveFactorial(n) {
//   if (n < 0) {
//     return console.log("Must be a positive integer.");
//   }
//   else if (n === 0) {
//     return 1;
//   }
//   return n * recursiveFactorial(n - 1);
// }

// var loopResult = loopFactorial(7);
// var recursiveResult = recursiveFactorial(7);

// console.log("The loop function returned: " + loopResult);
// console.log("The recursive function returned: " + recursiveResult);

// function factorial(n) {
//     if (n === 1) {
// 		return 1;
// 	} else {
// 		return n * factorial(n-1);
// 	}
// }

// // 1. Create an empty array called "stack"
// var stack = [];
// // 2. Define the function countDown(int) 
// function countDown(int) {
//     stack.push(int);
    
//     if (int === 1) { //base case
//         return 1;
//     }
//     return countDown(int-1);
// }
// // 3. Call countDown() on an integer
// countDown(6);


// // And now let's have a look at that stack:
// console.log(stack);