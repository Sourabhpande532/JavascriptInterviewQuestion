/* 
Live practice in practice folder on local machine adding answer hear .
Practicing the code question from Running Github
*/
/* ======================================================================= */
/* CODE 1: Remove Duplicate characters from String */

/* function removeDuplicateStringChar() {
  let stringChar = "Hello Souurabhh";
  let charArray = stringChar.split("");
  let filterOut = charArray
    .filter((item, index, arr) => {
      return arr.indexOf(item) == index;
    })
    .join("");
  console.log(filterOut);
}
removeDuplicateStringChar(); */

// ---OR---

/* function removeRepativeChar(userQueryChar) {
  let splitQuery = userQueryChar.split("");
  let figureOutQuery = splitQuery.filter(
    (char, index) => splitQuery.indexOf(char) === index
  );
  let resultString = figureOutQuery.join("");
  return resultString;
}
let userQuery = "hello sameer";
let x = removeRepativeChar(userQuery);
console.log(x); */


// ---OR---
// Another way to solve question

/* let char = "sourrabh ppande";
let isSeen = {};
if(!isSeen[char]){
    console.log(`${char} has not been seen.`);
    isSeen[char] = true
}else{
    console.log(`${char} has been seen before.`);;
} */

// ---OR---
/* NOTE: (!seenCharacters[char])  why we use like arr[char] this bcz when you want access property of objecy either it could be access by dot.or ["..."] or array this is way */

// ----------------------------------------------------------------------------//


/*
  CODE:2 Remove Duplicate characters from array of element and find the count of an elements using set object [55, 44, 55,67,67,67,67,8,8,8,8,8,65,1,2,3,3,34,5];*/

function removeDuplicateAndShowCount(inputArr) {
  /*   let x = inputArr;
  let y = [...inputArr] //create new array 
  console.log(x===y); */
  let uniqueValue = [...new Set(inputArr)];
  // Create empty object by using set(key-value) and get(retrive) we can create key-value pair
  let countDouble = new Map();
  // console.log(countDouble);
  /* uniqueValue.forEach((el) => {
    countDouble.set(el, (countDouble.get(el) || 0) + 1);
  }); Option/---OR---*/

  uniqueValue.forEach((el) => {
    // Check if the element is already a key in the map
    if (countDouble.has(el)) {
      // If yes, increment the count by 1
      countDouble.set(el, countDouble.get(el) + 1);
    } else {
      // If no, set the count for the el to 1
      countDouble.set(el, 1);
    }
  });
  return countDouble;
}

let arr = [55, 44, 55, 67, 67, 67, 67, 8, 8, 8, 8, 8, 65, 1, 2, 3, 3, 34, 5];
let result = removeDuplicateAndShowCount(arr);
// console.log("with unique coutt", result);

// ----------------------------------------------------------------------------//
/* CODE:3 Remove Duplicate characters from array of element using filter 
          [23,"sourabh",23,'tom','jerry','tom','nobita','doremon']
*/

/* function removeSameChar(userQuery){
 let userFileter = userQuery.filter((val,index,arr)=>{
 return arr.indexOf(val) === index
}) 
console.log(userFileter);
}
let userQuerry = [23,"sourabh",23,'tom','jerry','tom','nobita','doremon'];
// removeSameChar(userQuerry);
removeSameChar(userQuerry) */

// ---OR---
/* const array = [23, "sourabh", 23, 'tom', 'jerry', 'tom', 'nobita', 'doremon'];
const searchUnique = new Set(array);
console.log(searchUnique);
// Convert the Set back to an array using the spread operator
const hello = [...searchUnique];
//---Or--- const hello = Array.form(searchUnique)
console.log(hello); */
// ----------------------------------------------------------------------------//

/* CODE:4 String reverse without reversing of individual words (Array of elements can be reverse with reverse() method but for string it is won't possible so required to split 
and then join(). */

function reverseStringWithoutWord(string) {
  let listOfChar = string.split("");
  // console.log(listOfChar);
  let reverseListOfChar = listOfChar.reverse();
  // console.log(reverseListOfChar);
  let constructString = reverseListOfChar.join("");
  // console.log(constructString);
  /* till Now output is : llew sa rof ddog si ycilop tseb si ytsenoH but according to condition we don't to change Original position */
  let reverseAndReconstructAgain = constructString
    .split(" ")
    .reverse()
    .join(" ");
  return reverseAndReconstructAgain;
}

let userString = "Honesty is best policy is good for as well";
// console.log(reverseStringWithoutWord(userString));
// output: ytsenoH si tseb ycilop si doog rof sa llew

// --OR---

/* function reverseFromItsSpace(string) {
  let reverseChar = "";
  for (let i = string.length - 1; i >= 0; i--) {
     console.log(string[i]);
    reverseChar += string[i];
  }
  
  let x = reverseChar.split(" ").reverse().join(" ")
  return x
}

let string = "Honesty is best policy is good for as well";
console.log(reverseFromItsSpace(string)); */
// Or simple way 


// -------------------------------------------------------------------//

/* CODE:5 String reverse with reversing of individual words */

let x = "india is my country";
let z = x.split("").reverse().join("");
// let p = z.split(" ").reverse("").join(" ");
// console.log(p);

// -----------------------------((END))---------------------------//
