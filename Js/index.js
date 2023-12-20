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

/* Q17 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' split the string at the comma and change it to an array. */

/* const hubIt = "Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon"
const result = hubIt.split(",");
console.log(result); */
// output
/* [
    'Facebook',
    ' Google',
    ' Microsoft',
    ' Apple',
    ' IBM',
    ' Oracle',
    ' Amazon'
  ] */
// --------------------------------------------------------------}

/* Q18 Use search to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
Explaination: indexOf it's property is used to determine index number;
*/

/* let text = "You cannot end a sentence with because because because is a conjunction"
let searchIndexNumber = text.indexOf("cannot");
console.log(searchIndexNumber); */ //4

// --------------------------------------------------------------}
/* Q19 Explain lastIndexOf
   Explain:
   -The lastIndexOf() method returns the index (position) of the last occurrence of a specified value in a string. The lastIndexOf() method searches the string from the end to the beginning. The lastIndexOf() method returns the index from the beginning (position 0)
   -The lastIndexOf() method returns -1 if the value is not found.

*/

/* var str = "Departed Train";
var index = str.lastIndexOf("ed Tr");
console.log(index);
console.log("Departed Train before another Train".lastIndexOf("Train"));
 */
// let text = "Hello planet earth, you are a great planet.";
// let result = text.lastIndexOf("planet", 100);
// console.log(result);

/* let a = "sourabh is web developer,web devloper";
console.log(a.lastIndexOf("web"));
console.log(a.lastIndexOf("w")); */

//last index of means last occurence of specified value in stiring.
// let a = "Two writers collaborated on the script for the film script.";
// console.log(a.lastIndexOf("script"));
// --------------------------------------------------------------}

/* Q20: Use trim() to remove any trailing whitespace at the beginning and the end of a string.
Explain: The trim() method removes whitespace from both sides of a string.
         The trim() method does not change the original string.
*/

/* let text = "     sourabh pande home is near to temples    "
// console.log(text);
let removeSpace = text.trim();
// console.log(removeSpace); */

// --------------------------------------------------------------}
/* Q21 Boolean value is either true or false.
   Write three JavaScript statement which provide truthy value.
   Write three JavaScript statement which provide falsy value.
*/

// Truth value
// let truthyValue = 1 ; // numric value other than 0;

// let truthyValue2 = "sourabh" // true it's non-empty
// console.log("hello" === true);//false why false type is different
// console.log([] === true); //false
// console.log({} === true); // false
// console.log(1 == true); // true
// console.log(true === true);//true
// console.log(12>11); // true
// console.log((function(){}) === true);
/* An empty function is truthy, but the strict equality check returns false due to the type difference between the function and the boolean true. */

// console.log((b1 = true && true)); // true
/* In the expression b1 = true && true, the && (logical AND) operator is used. The && operator returns the value of the second operand if the first operand is truthy; otherwise, it returns the value of the first operand. */

// let p = "sourabh"
// let q = 34;
// console.log(typeof p === "string" && typeof q === "number");

// -------------------------

// falsy value
// console.log("" == false); // false
// console.log(0 == false); //true
// console.log(false === false); // true
// console.log(-0 == false);// true
// // console.log([] === false); //false
// // console.log({} === false); // false .
// console.log(Symbol() === false); // false
// console.log(new Set() === false); //false
// console.log(new Map() === false); //false
// console.log((function(){})===false);//false
// console.log(null === false);//false
// console.log(undefined === false); //false
// console.log(true == 0); //false
// let a = 1;
// let b = -2
// console.log(a>0 && b>0); //false
// console.log(false && "rahim");//false

// --------------------------------------------------------------}
/* Q22: Figure out the result of the following comparison expression first without using console.log(). After you decide the result confirm it using console.log()
    - 4 > 3
    - 4 >= 3
    - 4 < 3
    - 4 <= 3
    - 4 == 4
    - 4 === 4
    - 4 != 4
    - 4 !== 4
    - 4 != '4'
    - 4 == '4'
    - 4 === '4'
    - Find the length of python and jargon and make a falsy comparison statement.
*/

// console.log(4 > 3); // true
// /* 4 is greter than 3 i.e true */
// console.log(4 >= 4); // true
// /* 4 is greter than equal to 4 i.e true */
// console.log(4 < 3); // false
// /* 3 is less than 4 but in case vice versa i.e false */
// console.log(4 <= 3); // false
// /* 4 is greter than equal to 3 but in case vice versa i.e false */
// console.log(4 == 4); // true - check for value
// console.log(4 === "4"); //false- check both type and value i.e false
// console.log(4 != 4); //false
// /* because 4 is equal to 4 i.e false */
// console.log(4 != 5); // true
// /* now 4 is not equal to 5 i.e true */
// console.log(4 != "4"); // false
// console.log(4 !== "4"); // true
// /* here check for data type as well value i.e true */
// console.log(4 !== 4); // false
// /* both are same i.e false */
// console.log(4 !== 9);
// /* the condition is true due to no equal to */
// console.log("4" !== 4); // true
// /* data type this time string  */
// console.log(4 == 4); //true
// console.log(4 === 4); // true
// console.log(4 == "4"); // true
// console.log(4 === "4"); //false

/* let p = "jargon";
let q = "python";
if (p.length !== q.length) {
  console.log(true);
} else {
  console.log(false,'both are same, thus');
}

// output : false 
let a = "12345";
let b = 12345;

if(a !== b){
  console.log(true,"check for both data type & value, thus");
}else{
  console.log(false);
}
 */

// --------------------------------------------------------------}
/* Q23: using expression perform operation on array object & function */

/* // Functions
let func1 = function() { return true; };
let func2 = function() { return false; };
console.log(func1 === func2);    // false (different function references)
console.log(func1 !== func2);    //true 


// Arrays
let array1 = [1, 2, 3];
let array2 = [1, 2, 3];
console.log(array1 === array2);  // false (different array references)
console.log(array1 !== array2); // true 


// Objects
let obj1 = { key: 'value' };
let obj2 = { key: 'value' };
console.log(obj1 === obj2);      // false (different object references)
console.log(obj1 !== obj2); // true 


// Combining objects and comparison
let anotherObj = { key: 'value' };
console.log(obj1 === anotherObj); // false (different object references)
console.log(obj1 !== anotherObj); //true 

// Arrays with length property
let arr1 = [1, 2, 3];
let arr2 = [1, 2, 3, 4];

console.log(arr1.length === arr2.length); // false (different array lengths)
console.log(arr1.length !== arr2.length); // true  */

// --------------------------------------------------------------}
/* Q24 
19. Use the Date object to do the following activities
    - What is the year today?
    - What is the month today as a number?
    - What is the date today?
    - What is the day today as a number?
    - What is the hours now?
    - What is the minutes now?
    - Find out the numbers of seconds elapsed from January 1, 1970 to now.
    Ans: 
*/

/* let date = new Date();
let elapsed = new date(1991,1,1)
console.log(date.getFullYear());
console.log(date.getMonth());
console.log(date.getDate());
console.log(date.getDay());
console.log(date.getHours());
console.log(date.getMilliseconds());
console.log(date - elapsed); */

// --------------------------------------------------------------}

/* Q25: Write a script that prompt the user to enter base and height of the triangle and calculate an area of a triangle (area = 0.5 x b x h). */

/* let promptA = prompt("Enter base of triangle ?");
let promptB = prompt("Enter hight of triangle ?")

let area = (promptA * promptB)/2
console.log(area);

function calculateAreaOfTriangle(base,height){
let calculateArea = 0.5 * base * height
console.log('area of triangle is ', calculateArea);
}

calculateAreaOfTriangle(promptA,promptB); */

// --------------------------------------------------------------}Q26. Slope is m = (y2-y1)/(x2-x1). Find the slope between point (2, 2) and point(6,10)

/* Q26: Slope is m = (y2-y1)/(x2-x1). Find the slope between point (2, 2) and point(6,10);
 */

/* function calculateSlop(x1, y1, x2, y2) { */
/*   let calculate = (y2 - y1) / (x2 - x1); */
/*   return calculate; */
/* } */
/*  */
/* const slope = calculateSlop(2, 2, 6, 10); */
/* console.log("The slope is between points", slope); */

// --------------------------------------------------------------}

/* Q27: Get radius using prompt and calculate the area of a circle (area = pi x r x r) and circumference of a circle(c = 2 x pi x r) where pi = 3.14. */

/* let radius = prompt("Enter the radius of Circle");

if (radius != 0) {
  let pi = 3.14;
  let areaOfCircle = pi * radius * radius;
  console.log("area of circle is ", areaOfCircle.toFixed(2));
  let circumferenceOfCircle = 2 * pi * radius;
  console.log("circumference of circle is ", circumferenceOfCircle.toFixed(2));
} else {
  alert("Enter valid Number !");
}
// OR
if (isNaN(radius)) {
  alert("Mention valid Number !");
} else {
  let pi = 3.14;
  let areaOfCircle = pi * radius * radius;
  console.log("area of circle is ", areaOfCircle.toFixed(2));
  let circumferenceOfCircle = 2 * pi * radius;
  console.log("circumference of circle is ", circumferenceOfCircle.toFixed(2));
}

OR// using function

let radius = parseFloat(prompt("Enter radius"));
function calculate(radius) {
  if (isNaN(radius)) {
    confirm("enter number");
  } else {
    let pi = 3.14;
    let areaOfCircle = pi * radius * radius;
    console.log("area of circle is ", areaOfCircle.toFixed(2));
    let circumferenceOfCircle = 2 * pi * radius;
    console.log(
      "circumference of circle is ",
      circumferenceOfCircle.toFixed(2)
    );
  }
}
calculate(radius);
 */

// --------------------------------------------------------------}
/* Q28: Get user input using prompt(“Enter your age:”). If user is 18 or older , give feedback:'You are old enough to drive' but if not 18 give another feedback stating to wait for the number of years he needs to turn 18.  */

/* let userAge = parseInt(prompt("Enter Your Age"));

if (isNaN(userAge)) {
  confirm("invalid Error! plese Enter valid Number");
} else {
  if (userAge >= 18) {
    console.log("You are old enough to drive");
  } else {
    let yearToLeft = 18 - userAge;
    console.log(
      `you need to wait at least ${yearToLeft} year to run car or any vehical.`
    );
  }
} */

// --------------------------------------------------------------}

/* Q29 Even numbers are divisible by 2 and the remainder is zero. How do you check, if a number is even or not using JavaScript? */

/* let userInput = parseFloat(prompt("Enter either even or odd number"));

if (isNaN(userInput)) {
  confirm("invalid Error, Please Enter Number");
} else {
  userInput % 2 === 0 ? alert("Even Number") : alert("Odd Number");
} */

// --------------------------------------------------------------}

/* Q30:
25. Write a code which can give grades to students according to theirs scores:
    - 80-100, A
    - 70-89, B
    - 60-69, C
    - 50-59, D
    - 0-49, F
 */
/* let calculateGrade = parseInt(prompt("Enter %"));
if (isNaN(calculateGrade)) {
  alert("invalid");
} else {
  if (calculateGrade >= 80 && calculateGrade <= 100) {
    alert("You pass with Grade A 🎉🎊");
  } else if (calculateGrade >= 65 && calculateGrade <= 79) {
    alert("You pass with Grade B 🎉🎊");
  } else if (calculateGrade >= 50 && calculateGrade <= 65) {
    alert("You pass with Grade c 😏");
  } else if (calculateGrade >= 35 && calculateGrade <= 50) {
    alert("You pass with Grade D 😥");
  } else {
    alert(":YOU Failed 🎺🕯️");
  }
} */

/* function assignGrade(score) {
  if (score >= 80 && score <= 100) {
    return "Congrates 🎊🎉 You Pass with A";
  } else if (score >= 50 && score <= 80) {
    return "congrates You pass with grade B";
  } else if (score >= 1 && score <= 35) {
    return "You Failed 😥";
  } else {
    return "invalid Score range between should be 1 to 100";
  }
}
let score = prompt("Enter Your Score !");
if (isNaN(score)) {
  alert("invalid Score");
} else {
  let grade = assignGrade(score);
  console.log(`Your Score is ${score} & ${grade}`);
}

 */
// --------------------------------------------------------------}
/* 
Q31:problem steatment find the area of triangle whose 3 sides are given. with javascript 
Explaination: to perform operation on that
we need formula
formula : A = s⋅(s−a)⋅(s−b)⋅(s−c)
​where s is the semi-perimeter of the triangle, calculated as:
formula : s = a+b+c/2
*/

/* function calculateTriangleThreeSides(a, b, c) {
  //calculate Semi-Perimeter
  let s = (a + b + c) / 2;
  // Calculate the area using Heron's formula
  let area = Math.sqrt(s * (s - a) * (s - b) * (s - c));
  return area;
}
let sideA = 3;
let sideB = 6;
let sideC = 7;
let resultTriangle = calculateTriangleThreeSides(sideA, sideB, sideC);
console.log("the area of triangle", resultTriangle.toFixed(2)); */

// OR

/* let input1 = document.getElementById("user-input");
let input2 = document.getElementById("input2");
let input3 = document.getElementById("input3");
let btn = document.getElementById("button-check");
btn.addEventListener("click", calculateArea);

function calculateArea() {
  let userLength1 = Number(input1.value);
  let userLenght2 = Number(input2.value);
  let userLenght3 = Number(input3.value);

  if(userLength1 && userLenght2 && userLenght3){
    let s = (userLength1 + userLenght2 + userLenght3)/2;

    let area = Math.sqrt(
      s * (s - userLength1) * (s - userLenght2) * (s - userLenght3)
    );
    console.log("area of triangle is ", area.toFixed(2));
  }else{
    alert("invalid")
  }

}  
// Ref: https://www.cuemath.com/measurement/area-of-triangle-with-3-sides/
*/

/* 
32. Write a JavaScript for loop that will iterate from 0 to 15. For each iteration, it will check if the current number is odd or even, and display a message to the screen
*/

/* for(let i = 0; i<=15;i++){
  if(i % 2 === 0){
    console.log(i, "is even Number");
  }else{
    console.log(i, "is odd Number");
  }
} */
// OR
/* let startNum = parseInt(prompt("Enter start Number"));
let endNum = parseInt(prompt("Enter end Number"));
if (isNaN(startNum) || isNaN(endNum)) {
  alert("Enter only number");
} else {
  for (let i = startNum; i <= endNum; i++) {
    if (i % 2 === 0) {
      console.log(i, "is even number");
    } else if (i % 2 !== 0) {
      console.log(i, " is Odd Number");
    }
  }
} */

/* let button = document.getElementById("button-check");
let output = document.getElementById("output");
button.addEventListener("click", IsOddOrEven);

function IsOddOrEven(){
  let a = 15;
  for(let i=0; i<=a; i++){
    if(i%2===0){
      console.log(i," is even Number");
    }else if(i%2 !== 0){
      console.log(i,"is odd number");
    }
  }
} */

/* what if store value in array example*/

/* let startNum = parseInt(prompt("Enter start Number"));
let endNum = parseInt(prompt("Enter end Number"));
if (isNaN(startNum) || isNaN(endNum)) {
  alert("Enter only number");
} else {
  let x = [];
  for (let i = startNum; i <= endNum; i++) {
    x.push(i);
  }
  console.log(x);
  x.map((num) => {
    if (num % 2 === 0) {
      console.log(num, "is even number");
    } else {
      console.log(num, "is odd number");
    }
  });
} */
