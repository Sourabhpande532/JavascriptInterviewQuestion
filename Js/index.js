/* Q1-> Write a JavaScript function to check whether an input is a string or not  */

// 1)E.x
// let x = "sourabh";
// console.log(typeof x);

// 2)E.x
// function isString(input){
//     // return input !== null && input !== undefined && input.constructor === String;
//     return input instanceof String || typeof input === "string"
// }
// let userInput = [4,3];
// if(isString(userInput)){
//     console.log("Yehh! true it's string");
// }else{
//     console.log("Ohh! Not String");
// }

// 3)E.x
// const userInput = document.getElementById("user-input");
// console.log(userInput);
// const checkButton = document.getElementById("button-check");
// checkButton.addEventListener("click", isString);

// function isString(){
//     let x = userInput.value;
//     // console.log(x);
//     if(isNaN(x)){
//         console.log(true,"string");
//     }else{
//         console.log(false,"Not string");
//     }
// }

// ---------------------------------------------------------------------------]
/*Q2 - Remove Duplicate characters from array of element and find the count of an elements using set object
var arr = [55, 44, 55, 67, 67, 67, 67, 8, 8, 8, 8, 8, 65, 1, 2, 3, 3, 34, 5];
*/
let arr = [55, 44, 55, 67, 67, 67, 67, 8, 8, 8, 8, 8, 65, 1, 2, 3, 3, 34, 5];
// console.log(arr);
let uniqueValue = [...new Set(arr)]; // ||
// let uniqueValue = Array.from(new Set(arr))

let countDoubleNumber = new Map();
arr.forEach((el) => {
  // Check if the element is already a key in the map
  if (countDoubleNumber.has(el)) {
    // if yes, increment ++
    countDoubleNumber.set(el, countDoubleNumber.get(el) + 1);
  } else {
    // If no, set the count for the element to 1
    countDoubleNumber.set(el, 1);
  }
  /* Or could be satisfy with below one by using or operator */
  // countDoubleNumber.set(el, (countDoubleNumber.get(el) || 0) + 1);
});

// console.log("double value count No.", countDoubleNumber);
// console.log("Unique value is ", uniqueValue);

// -------------------------------------------------------------------]
/* Q6 Give me Exapmple of return value via using above same questions but using different Array Value*/

function removeDuplicate(arrVal) {
    let findUniqueVal = [...new Set(arrVal)];
    let findeDoubleNo = new Map();
    // console.log(findeDoubleNo);// size 0
  
    arrVal.forEach((element) => {
      //Check if already exits or not
      if (findeDoubleNo.has(element)) {
        // if yes, ++
        findeDoubleNo.set(element, findeDoubleNo.get(element) + 1);
      } else {
        // o.w as it is
        findeDoubleNo.set(element, 1);
      }
      // check looping line by line 
      // console.log(findeDoubleNo); size:10
    });
  
    return {
      unique: findUniqueVal,
      uniqueCount: findeDoubleNo,
    };
  }
  let array = [45,46,46,47,48,47,49,50,51,52,49,53,54,55,53];
  let result = removeDuplicate(array);
//   console.log(result.unique);
//   console.log(result.uniqueCount);

// ------------------------------------------------------------------]

/*Q5: Explain MAP & SET
Explanation:A Map object in JavaScript is a collection of key-value pairs where each key and value can be of any data type.
It allows you to associate values with keys and provides methods for adding, retrieving, and deleting elements.
It initializes an empty map that can be populated with key-value pairs later.
*/
//MAP & SET
const myMap = new Map(); //crete an empty map
myMap.set("name", "sourabh");
myMap.set("1", 34);
myMap.set("pin", 123232);

// console.log(myMap.get('pin'));
// console.log(myMap.get('name'));
// console.log(myMap.get('1'));

for (let [key, value] of myMap) {
  // console.log(`${key}:${value}`);
}
for (let key of myMap.keys()) {
  // console.log(`${key}`);
}
for (let value of myMap.values()) {
  // console.log(value);
}
for (let [key, value] of myMap.entries()) {
  // console.log(`${key}:${value}`);
}
/* 
A Set is another built-in object in JavaScript, similar to an array, but it only stores unique values.
It does not allow duplicate values, making it useful for removing duplicates from an array. */
const mySet = new Set();
mySet.add(1);
mySet.add(2);
mySet.add(1);
// console.log(mySet);
// ----------------------------------------------------------------]
// Ex. of return 
/* function remove(input){
    let y = [...new Set(input)]
    return {
        key:y
    }
}
let x = [12,12,13,14,15,14,16,17,16,18,19,16,20];
let output = remove(x);
console.log(output.key); */
// ----------------------------------------------------------------]







