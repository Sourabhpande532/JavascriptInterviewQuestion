// console.log(typeof []); //Object
// console.log(Boolean([])); //True->Why? i.e Truthy value
// console.log(!![]); //True->Why? i.e Truthy value
// console.log(Boolean(""));//false-> i.e falsy value false, 0, '' (empty string), null, undefined, and NaN.
// console.log(typeof Boolean([])); //boolean -> it treated as string which is true i.e boolean
/* ============================================================================== */

/* Concept of True condition */
// console.log(true); //true
// console.log(typeof true); //boolean
// console.log(typeof true === "boolean"); // true
/* ============================================================================== */

/* Concept of false condition */
// console.log(false); // false
// console.log(typeof false); // boolean
// console.log(typeof false === "boolean"); // true
/* ============================================================================== */

// console.log(typeof ""); // string
// console.log(Boolean("")) // false : data types
// console.log(Boolean(0)) // false
//console.log(typeof Boolean("")); // boolean
// console.log(Boolean("rahim")); // true bcz  non-empty strings are considered truthy values as well as {} empty object,!! also treated as truthy

/* ============================================================================== */

//## Coercion expressions to booleans in JavaScript:
// let num = "[]";
// let sumString = Boolean(num);
// console.log(sumString); //true
// Note:by using + it turn number to string or Number() user turn string to number furthermore to defined type use Boolean

// true ? console.log(true) : console.log(false);//true
// false ? console.log(false) : console.log(true);//true

/* ============================================================================== */
/* Evalution of true or false base on truthy and Falsy value*/
// let emptyObject = []; //are all truthy value i.e
// emptyObject ? console.log(true) : console.log(false); //true
// let emptyArrayOfObject = [{}];
// emptyArrayOfObject ? console.log(true) : console.log(false);//true
// let iSEmpty = !!"";
// iSEmpty ? console.log(true):console.log(false); //false
//  let isArray = !![];
//    isArray ? console.log(true) : console.log(false);//true
// let emptyString = ""; // Falsy value i.e
// emptyString ? console.log(true) : console.log(false);
// let isFalsy = !!NaN; //falsys one
// isFalsy?console.log(true):console.log(false);
// When not operator attach it'd go for either true or false

/* ============================================================================== */

/* Boolean function evaluate value in form of true or false with respect truthy & falsy value */
// Boolean("") ? console.log(true) : console.log(false);//false
// Boolean([]) ? console.log(true) : console.log(false);//true
// Boolean({}) ? console.log(true) : console.log(false);//true
// Boolean(!![]) ? console.log(true) : console.log(false);//true
// Boolean(!!"") ? console.log(true) : console.log(false);//false
// Boolean(!!"rahim") ? console.log(true) : console.log(false);//true
// Boolean(!!undefined) ? console.log(true) : console.log(false);//false
// Boolean(!!NaN) ? console.log(true) : console.log(false);//false
// Boolean(!!null) ? console.log(true) : console.log(false);//false
/* 
@CONCLUDE:
Falsy Value:null,undefined,0,NaN,"",-ve value,0n,0..
Truthy Value: besides all are truthy value including array and object,non empty string e.g ("xyz")
*/
//e.g if("string",[1,2,3],34,{key:"value"}){
//     console.log("truthy value");
// }
/* ============================================================================== */
/* @FALSY-[false, 0, -0, 0n, null, undefined, NaN, and the empty string ""]*/
// console.log(Boolean(false));//false
// console.log(Boolean(true));//true
// console.log(Boolean(0n));//false
// console.log(Boolean(-0)); //false
// console.log(typeof Boolean("")); boolean

/* @TRUTHY - [ true, 1, -1, 1n, -1n, Infinity, -Infinity, " ", {}, []] */
// console.log(Boolean(-2));//true
// console.log(Boolean([])); //true
// console.log(Boolean(Infinity));
// console.log(Boolean(-Infinity));
// console.log(typeof Boolean([]));
/* ============================================================================== */
/* boolean Value: we are checking true and false base on Truthy and falsy value as i mentioned above if any of them e.g 0,-0,infinity.... gave answer */
// console.log("===== Boolean Value!");
// console.log(1 ? "true" : "false");//true
// console.log(0 ? "true":"false");//false
// console.log(!!""?"true":"false");false
// console.log(!![]?"true":"false");true;
// console.log(""? true: false);//false
// console.log("rahim" ? true: false);//true
// console.log(-1?"true":"false"); //true
// console.log(-1n?"true":"false"); //true
// console.log(-0n?"true":"false"); //true
// console.log(0n?"true":"false"); //false
// console.log(-Infinity?true:false);//true
// console.log([], {}, Infinity ? true : false);
// console.log(undefined,null,NaN?true:false);false

/* ============================================================================== */

/* QUESTION AND EXPLANATION */
// let x = [];
// let y = [];
// console.log(x == y); //false "==" operator check for string
// console.log(x === y); // false check both type and value

/* EXPLANATION: when comparing objects or arrays with == or ===, you're comparing their memory references, not their content. If the objects or arrays are distinct instances, even if their content is the same, the comparison will be false due to differing memory locations.
besides Here we are comparing memory location, not an array. Memory location of 2 arrays are not same. */

// let arrayX = [];
// let arrayY = arrayX;
// console.log(arrayX == arrayY); //true
// console.log(arrayX === arrayY); //true

/*EXPLANATION: Here, arrayX and arrayY refer to the same array object in memory, so the equality check (===,==) returns true.
besides Here we are assigning arrayX to arrayY, where memory location is now same. */
/* ============================================================================== */
/* Swapping  */

// let arjun = "wadhai";
// let krishna = "singh";
// let exchangeSirname;
// exchangeSirname = arjun;
// arjun = krishna;
// krishna = exchangeSirname;
// console.log(`The real name is arjun ${arjun} & krishana ${krishna}`);
/*The real name is arjun singh & krishana wadhai */

// let a=10;
// let b=20;
// let c;
//    c=a;
//    a=b;
//    b=c;
// console.log (a,b,c) //a:20;b=10;c=10
/* EXPLANATION:the values of a and b have been swapped. The variable c is used as a temporary storage space to hold the value of a during the swap process.  */

/* ============================================================================== */
/* IMPORTANT QUESTION!! TOP 10 */
/* 
1)Question: what is typeof [];

Answer  : typeof [] returns "object" because the typeof operator doesn't distinguish between arrays and generic objects in JavaScript. If you want to check array use Array.isArray(arr)
e.g 
let arr = [];
console.log(Array.isArray(arr)); // Outputs: true

2)Question: What is typeof arguments?

Answer: When you use typeof on arguments, it returns "object." The arguments object is array-like but not a true array. It shares some characteristics with arrays, such as having a length and allowing access by index, but it lacks certain array methods like push and pop. In essence, it behaves like an array but has limitations compared to a real array.

e.g 
function exampleArgument(){
console.log(typeof arguments);// Object
console.log(arguments instancesOf Array ) //false;
console.log("Number of arguments:", arguments.length);
for(let i=0;i<arguments.length;i++){
    console.log("Index at " + i + " is " + arguments[i]);
}
}
exampleArgument('apple','banana','berry')

3)Question:Difference between array and object in javascript? or Array Vs Object
Answer: As everything in js are objects,we know see e.g below to more 

let arr = []
let obj = {}
if(typeof arr == typeof obj){
    console.log(true);
}else{
    console.log("false");
}
if(arr instanceof Object && arr instanceof Array){
    console.log(true);
}

3) Question: what is value of typeof null?
Answer: "Object" Why it's js bug that's why 
console.log(typeof null == "object");

4)Question: what is console.log(true+false)
Answer: 1 because true value consider as 1 and false 0 therefour console.log(1+0); // 1

5)Question : what is 2+true;
Answer: 3 
Explaination: console.log(2+true);
The '+' operator performs type coercion in this case to enable the operation, effectively casting the boolean 'true' to its numeric equivalent, which is '1'.

5)Question : what is "2"+true;
Answer: 2true
Explaination:
The + operator is acting as a concatenation operator in this context due to the presence of a string operand.
In JavaScript, when you use the + operator with a string and another type, it performs concatenation and converts the non-string operand to a string. This is known as type coercion.

6)Question:  What is the value of -'34'+14
Answer: -20
Explaination: console.log(-"34"+14);
The - '34' part is performing a unary negation operation on the string '34'.
JavaScript converts the string '34' to the number 34 due to the unary negation.

6)Question:  What is the value of +"hello"
Answer: NaN
Explaination: console.log(+"hello"); 
same process as we performed earlier it turn string to number but Js failed to identified this time that's why NaN
*/

// 7)Question: If you have var y = 1, x = y = typeof x; What is the value of x?
// Answer: undefined
// Explaination: typeof x: The typeof operator is applied to x. At this point, x is declared but not yet initialized, so its type is 'undefined'.
// ----------------------------------------------------------------------------]

// 8)Question: for var a = (2, 38, 50); what is the value of a?
// Answer: 50. The comma operator evaluates each of its operands (from left to right) and returns the value of the last operand. ref: MDN
// Code eg: let a = (2,3,4);
// console.log(a);
// ---------------------------------------------------------------------------]

// 9)Question: for var a = ((34,43),50-5) * 2 what is the value of a?
// Answer: 90
// Explaination:The comma operator is used to evaluate multiple expressions but only returns the value of the last one.The result of the comma operator, 4, is then multiplied by 2, resulting in the final value of a being 8.
// code ex:
// let a = (3,34-4) * 2;
// console.log(a); //60

// let x = ((34,43),50-5) * 2;
// console.log(x);//90

// let y = (4,(34-3),4)*3;
// console.log(y);

// ---------------------------------------------------------------------------]
// 10)Question: What is the value of !'bang'
// Answer: false. ! is NOT.
// ---------------------------------------------------------------------------]

/* BASIC QUESTION ON JS  */
// Question: What is the value of parseFloat('12.3.4')
// Answer: 12.3
// console.log(parseFloat("3.47 is more power ful 2.3"));
// ---------------------------------------------------------------------------]
// Question: What is the value of Math.max([2,3,4,5]);
// Answer: NaN
// Explaination: The Math.max function in JavaScript is designed to accept a list of numeric arguments and return the largest value among them. so in order to perform use below one
//CODE:
// let numericValue = [3434,4,343,5500,34];
// let maxVal = Math.min(...numericValue);
// console.log(maxVal);

// let x = [34,343,43,4];
// console.log(Math.max(...x));
// ---------------------------------------------------------------------------]
// Question: typeof(NaN)
// Anwser:"number
// console.log(typeof NaN);
// console.log(typeof undefined);

// ---------------------------------------------------------------------------]
// Question:null == undefined
/* 
   Answer:
   undefined: undefined is a primitive value that is automatically assigned to variables that have been declared but have not been assigned any value.
   null: null is a special value that represents the intentional absence of any object value.
   It must be assigned explicitly and is often used to indicate that a variable should have no value or that an object property should be empty.
*/
//Code:
// console.log(null == undefined); //true loosely/explicitely check
// console.log(null === undefined); //false stricly check type also

// let a;
// console.log(a); //undefined type is 'undefined'

// let b = null;
// console.log(b); //null type is "object"

// console.log(a == b); // true(loose equality, they are both considered "falsy")
// console.log(a === b); // false (strict equality, different types)

// function newOne() {}
// let result = newOne();
// console.log(result); //undefined

// let userData = {
//   name: "sourabh",
//   age: null,
// };
// console.log(userData.age); //null
// ---------------------------------------------------------------------------]

// Question: If var a = 2, b =3 what would be value of a && b
// Answer: here the concept came of &&(AND) Operator what it does if first value is truthy value in case  it return majority of time after & operator value which is here 3
// var a = 2,
//   b = 3;
// console.log(a && b);
// ---------------------------------------------------------------------------]

// Question: What is -9%2
// Answer: -1 it return always first value symbol that is result of remainder
// console.log(-9%2);
// ---------------------------------------------------------------------------]

/* Array base Question */

// let a = [34,343,23,4];
// let b = [34,2,34,4];
// let result = a[3] === b[3];
// console.log(result) // true
/*here we'r comaparing for array element which is inside one,not for memory location, for more clear we specify index that we can easily compared value's  */
// -------------------------------------------------//

// let a = [34,343,2,2,3];
// console.log(...a);
/* "Destructuring, indicated by 'a', involves extracting all the elements from an array or object." */
// -------------------------------------------------//

// let data = -10 - 3;
// console.log(data); //  - -x = +
// let data2 = 10 - -12;
// console.log(data2); //22 -- = +
// -------------------------------------------------//

// let set = new Set([1,23,4,4,3,4,2,5,1,3,2,6])
// console.log(set);// {1, 23, 4, 3, 2, 5,6}
// console.log(set instanceof Set); // true
// console.log(typeof set); //object
/*Note: A Set can only contain unique values. If you try to add a value that already exists in the set, it won't be added again.*
 */
// -------------------------------------------------//
// let data = {name:"sourabh pande"};
// console.log(delete data.name);
// console.log(data); //{}
// data.name = "prajwal zingare" // add
// console.log(data);
// data.name = "rahim sheikh"
// console.log(data);// modify
// console.log(delete data.name);//true
// console.log(data);
// delete either it will return true or false
// -------------------------------------------------//

// let data = {age:34};
// console.log(delete data);//false not be able to delete object
/* if in case want to delete use null or undefined */
// data = null;
// console.log(data);
/* Explaination:The delete operator is specifically designed for deleting properties from objects, not for deleting the entire object itself. If you attempt to use delete on the entire object, it results in a syntax error. */
// -------------------------------------------------//
// Array distructuring
// let userData = ["rahul","shankar","sourabh","chiku"];
// let [x,,,p] = userData;
// console.log(x,p);//rahul chiku
/* The second element in the array is skipped by using an empty slot between commas , ,. consept of destructing is one*/
// -------------------------------------------------//
// let x = ["raj","suresh","dilshan"];
// let [,y] = x;
// console.log(y);// suresh
//Explaination : To access any element without taking previous values, we can do just write comma.
// Explaination : Here we did object destructuring.It's not store in continuos memory location but array store in continuoes memory location so that's why we used comma in an array.
// -------------------------------------------------//

// Object distructuring & loop


// ex 1
// let userData = {name:"sidharth",age:34,city:"nagpur"};
// let {name:x,age,city:z} = userData;
// console.log(x + " from " + z + " age is " + age)

// ex 2
// let userData = {name:"sourabh",deatails:{age:34,city:"nagpur"},address:"Guru deo 8",assets:{property:"farming",location:"near tea house"},pin:441201,area:"rular"};
// let {name,deatails:{age,city:cityModerate},assets:{property:istates}, country="india", state="Maharashtra", ...x} = userData;
// console.log(name,cityModerate,age,x,istates,country,state);
// Explaination: here your all doubt clear reagarding distructuring;

// ------------------------LOOP
// for of and Object.entries

// let userData = {name:"sourabh",city:"bhuyar", age:34};
// // console.log(Object.values(userData));
// let entryArray = Object.entries(userData); //it return array 
// // console.log(entryArray);
// for(let [key,value] of entryArray){
//     console.log(key + ":" + value);
// }

// for in
// let userData = { name: "sourabh", city: "bhuyar", age: 55 };
// for (let key in userData) {
//   // console.log(userData[key]);//it's way to access property in object
//   console.log(key + ":" + userData[key]);
// }

// for loop 
// let userData = { name: "sameer", city: "chandrapur", age: 50 };
// let turnToArray = Object.values(userData);
// 1st console.log(turnToArray);

// for loop 
// for(let i=0; i<turnToArray.length; i++){
//     console.log(i + ":" + turnToArray[i]);
// }

// for Each  
// turnToArray.forEach(val=>{
//     console.log(val);
// })
// map loop 
// let userValue = turnToArray.map((v)=>{
// console.log(v);
// })
// -------------------------------------------------//

let data ={name:"chandu"}
let data1={city:"bangulore",address:"azhad chouk",pin:23232}
let result = {...data, ...data1} //merge 2 objects
console.log(result);