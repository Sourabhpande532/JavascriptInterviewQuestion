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
// emptyObject ? console.log(true) : console.log(false);
// let emptyArrayOfObject = [{}];
// emptyArrayOfObject ? console.log(true) : console.log(false);
// let iSEmpty = !!"";
// emptyArrayOfObject ? console.log(true) : console.log(false);
// let isArray = !![];
// isArray ? console.log(true) : console.log(false);
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
Truthy Value: besides all are truthy value including array and object,"xyz"
*/
//e.g if("string",[1,2,3],34,{key:"value"}){
//     console.log("truthy value");
// }
/* ============================================================================== */



