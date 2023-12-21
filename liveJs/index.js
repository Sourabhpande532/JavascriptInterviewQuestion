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

// Another way to solve question

/* let char = "sourrabh ppande";
let isSeen = {};
if(!isSeen[char]){
    console.log(`${char} has not been seen.`);
    isSeen[char] = true
}else{
    console.log(`${char} has been seen before.`);;
} */

/* function removeDuplicates(inputString) {
    // Initialize an empty string to store the result
    let resultString = '';
  
    // Create an object to keep track of seen characters
    const seenCharacters = {};
  
    // Iterate through each character in the input string
    for (let char of inputString) {
        console.log(char);
      // Check if the character has been seen
      if (!seenCharacters[char]) {
        // If not seen, add it to the result string and mark it as seen
        resultString += char;
        seenCharacters[char] = true;
      }
    }
    return resultString;
  }
  // Example usage:
  const inputString = 'hello sameer hello';
  const stringWithoutDuplicates = removeDuplicates(inputString);
  console.log('Original String:', inputString);
  console.log('String without Duplicates:', stringWithoutDuplicates);*/

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
  console.log(countDouble);
/* uniqueValue.forEach((el) => {
    countDouble.set(el, (countDouble.get(el) || 0) + 1);
  }); Option/OR*/
  uniqueValue.forEach((el)=>{
     // Check if the element is already a key in the map
     if (countDouble.has(el)) {
        // If yes, increment the count by 1
        countDouble.set(el, countDouble.get(el) + 1);
    } else {
        // If no, set the count for the el to 1
        countDouble.set(el, 1);
    }
  })
  return countDouble;
}

let arr = [55, 44, 55, 67, 67, 67, 67, 8, 8, 8, 8, 8, 65, 1, 2, 3, 3, 34, 5];
let result = removeDuplicateAndShowCount(arr);
console.log("with unique coutt", result);
