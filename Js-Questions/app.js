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
/* IMPORTANT QUESTION!! */
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
for(let i=0;i<arguments.length;i++){
    console.log("Index at " + i + " is " + arguments[i]);
}
}
exampleArgument('apple','banana','berry')

Question:Difference between array and object in javascript? or Array Vs Object
Answer: As everything in js are objects,we know see e.g below to more 
*/

let arr = []
let obj = {}
if(typeof arr == typeof obj){
    console.log(true);
}else{
    console.log("false");
}