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
/* Q3 Give me Exapmple of return value via using above same questions but using different Array Value*/

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
let array = [45, 46, 46, 47, 48, 47, 49, 50, 51, 52, 49, 53, 54, 55, 53];
let results = removeDuplicate(array);
//   console.log(results.unique);
//   console.log(results.uniqueCount);

// ------------------------------------------------------------------]

/*Q4: Explain MAP & SET
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

/*Q5 String reverse with reversing of individual words */

/* function reverseString(string) {
  let listOfChar = string.split("");
  let reverse = listOfChar.reverse();
  let reJoinString = reverse.join("");
  return { key: reJoinString };
}
let word = "india is my country";
let result = reverseString(word);
console.log(result.key);
// output : yrtnuoc ym si aidni */

// Prictice
/* function reverseWord(){
  let char = "India is quite famous for tradition";
  let reverChar = char.split("").reverse().join("");
  return reverChar
}
console.log(reverseWord()); 
output: noitidart rof suomaf etiuq si aidnI
*/
// ----------------------------------------------------------------]

/* Q6.  Swapping of 2 numbers with third variable*/

/* let a = 10;
let b = 13;
let c;
c = a; //13
a = b; //13
b = c; //10
console.log(a,b,c);//13,10,10 */
// ----------------------------------------------------------------]
/* Q7 - To find the index of an element from an array*/

/* let country = ["india","USA","china","japan"];
let findIndex = country.indexOf('japan');
console.log(findIndex); */
// ----------------------------------------------------------------]

/* Q8 - To find the unique in array*/
/* let listOfNum = new Set([12,332,3,32,12,12,3,1,2,3,4,2,5]);
console.log(listOfNum); */ //remove duplicate

// ----------------------------------------------------------------]
/* Q9 - Write a JavaScript program which accept a number as input and insert dashes (-) between each two even numbers. For example if you accept 025468 the output should be 0-254-6-8. */

/*Ex:1  function addDashOnEvenNum(num) {
  let userString = num.toString();
  console.log(userString);

  let resultString = userString[0]; //2

  for (let i = 1; i < userString.length; i++) {
    let currentValue = parseInt(userString[i]);
    // console.log(currentValue); //5,4,6,8,0,1,2
    let previousValue = parseInt(userString[i - 1]);
    // console.log(previousValue);//2,5,4,6,8,0,1
    if (currentValue % 2 === 0 && previousValue % 2 === 0) {
      resultString = resultString + "-"; //add befour currentValue
    }
    resultString = resultString + currentValue;
  }
  console.log(resultString);

}
let inputNum = 3434364545;
addDashOnEvenNum(inputNum);
 */
// OR
/*Ex:2 let input = document.getElementById("user-input");
let buttonEvent = document.getElementById("button-check");
let output = document.getElementById("para");
buttonEvent.addEventListener("click", insertDash);

function insertDash() {
  let str = input.value;
  // console.log(str[1]);
  let result = [str[0]];
  // console.log(result);
  for (var x = 1; x < str.length; x++) {
    if (str[x - 1] % 2 === 0 && str[x] % 2 === 0) {
      result.push("-", str[x]);
    } else {
      result.push(str[x]);
    }
    output.innerText = result.join("");
  }
  console.log(result);
}

insertDash(); */
// --------------------------------------------------------------}

/* 
Q10 - Write a JavaScript program to find the leap years in a given range of years. */

/* function findLeapYear(startYear, endYear) {
  // leap year either divided by 4 or 400 Not 100
  for (let year = startYear; year <= endYear; year++) {
    if ((year % 4 === 0 && year !== 100) || year % 400 === 0) {
      console.log(year);
    }
  }
}
findLeapYear(2000, 2016); */
//OR
/* let btn = document.getElementById("button-check");
let userInputA = document.getElementById("user-input");
let userInputB = document.getElementById("input2");
let para = document.getElementById("para");

btn.addEventListener("click", checkLeapYear);

function checkLeapYear() {
  const a = Number(userInputA.value);
  const b = Number(userInputB.value);
  let emptyArr = [];
  // console.log(a, b);
  for (let i = a; i <= b; i++) {
    emptyArr.push(i);
  }
  console.log(emptyArr);
  emptyArr.map((data) => {
    if (data % 4 === 0) {
      console.log(`it is a leap ${data} year`);
      para.innerText += `it is a leap ${data} year\n`;
    } else {
      console.log(` It's Not leap year ${data}`);
      para.innerText += `It's Not leap ${data} year\n `;
    }
  });
} */

// --------------------------------------------------------------}
/* Q11 - Write a JavaScript program which accept a string as input and swap the case of each character. For example if you input 'The Quick Brown Fox' the output should be 'tHE qUICK bROWN fOX'.  */

/* function swapCase(swapChar) {
  let resultSwap = "";
  for (let i = 0; i < swapChar.length; i++) {
    let currentValue = swapChar[i];
    if (currentValue === currentValue.toUpperCase()) {
      resultSwap += currentValue.toLowerCase();
    } else {
      resultSwap += currentValue.toUpperCase();
    }
  }
  return resultSwap;
}
const viseVarsa = "The Quick Brown Fox rocK";
const result = swapCase(viseVarsa);
console.log(result); */

/* let btn = document.getElementById("button-check");
let userInputA = document.getElementById("user-input");
btn.addEventListener("click", turnToSwap);

function turnToSwap() {
  let user = userInputA.value;
  // console.log(user);
  let turnInArray = user
    .split("")
    .map((eachItem) => {
      // console.log(eachItem);
     return eachItem === eachItem.toUpperCase()
        ? eachItem.toLowerCase()
        : eachItem.toUpperCase();
    })
    .join("");
  console.log(turnInArray);
}
 */

// --------------------------------------------------------------}

/* Q12 - Create a index.js file and declare variables and assign string, boolean, undefined and null data types, Display all the value with there type. */

/* let a = "sourabh";
let number = 34;
let b = true;
let c = false;
var d = undefined;
const e = null;
console.log(`The data type value of name ${a} is ${typeof a}`);
console.log(`The data type of ${number} is ${typeof number}`);
console.log(`Value of b is ${b} and type of b ${typeof b}`);
console.log(`Value of c is ${c} and type of c ${typeof c}`);
console.log(`Value of d is ${d} and type of d ${typeof d}`);
console.log(`Value of e is ${e} and type of e ${typeof e}`); */

// --------------------------------------------------------------}

/*  Q13 - Declare variables to store your first name, last name, marital status, country and age and display them using interploation method. */
/* let name = "sourabh"
let lname = "pande"
let maritalStatus = "no"
let age = 23
country = "india";
console.log(`Hey, This is ${name} ${lname} & I'm form ${country} current age is ${age}`); 
output : Hey, This is sourabh pande & I'm form india current age is 23
*/

// --------------------------------------------------------------}

/*  Q14  Decalre a varibale and assign value to it and change all the string characters to capital letters using toUpperCase() method. */

/* let name = "Hey,How are you doing";
console.log(name.toUpperCase()); */
// output : HEY,HOW ARE YOU DOING

// --------------------------------------------------------------}

/*  Q15  Check if the string contains a word Script using includes() method. */

/* let text = "India is my country"
let result = text.includes("country");
console.log(result); */
// output: true

// --------------------------------------------------------------}

/*  Q16 Split the string into an array using split() method using js */

/* function splitString(char){
let x = char.split(" ");
return x;
}
console.log(splitString("The Quick box wrapped it into paper")); */

// output: ['The', 'Quick', 'box', 'wrapped', 'it', 'into', 'paper']

// --------------------------------------------------------------}

