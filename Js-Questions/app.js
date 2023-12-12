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
console.log(null == undefined);