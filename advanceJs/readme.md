```Javascript
var num = 19;
var num = 20;
console.log(num)
```

<Details>
<Summery>
 Answer
</Summery>
 
 Answer 1 **Explanation — ** Empower your code with the 'var' keyword, enabling the declaration of multiple variables with the same name. These variables will hold the latest values, a unique feature not available with 'let' or 'const' due to their block-scoping nature.

</Details>

---

---

```
function check() {
    console.log(name);
    console.log(age)
    var name = "souabh"
    let age = 34;
}
check()
```

<Details>
<Summery>
Answer
<Summery>
Answer: undefined and ReferenceError **Explanation — **
Variables declared with var are hoisted and initialized with undefined. This means that the variable is moved to the top of its scope, and it's available for use throughout the entire function, but its value is undefined until the point in the code where it's assigned.

Variables declared with let are also hoisted, but they are not initialized. They are in a "temporal dead zone" until the actual declaration is reached during the normal program execution.

The console.log(name); line doesn't produce an error because var name is hoisted and initialized with undefined. So, console.log(undefined) is executed.

The console.log(age); line, however, produces an error. This is because let age is hoisted but not initialized. Trying to access it before the let age = 21; line results in a ReferenceError.

</Details>

---

---

```Javascript
/* Write a JavaScript program which prints the elements of the following array
Note : Use nested for loops.
Sample array : */
 var a = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]];
Sample Output :
"row 0"
" 1"
" 2"
" 1"
" 24"
"row 1"
```

<Details>
<summery>
Answer:
</summery>
Explaination:

```Javascript
var a = [
  [1, 2, 1, 24],
  [8, 11, 9, 4],
  [7, 0, 7, 27],
  [7, 4, 28, 14],
  [3, 10, 26, 7]
];

// outer loop for row
for(let i=0; i<a.length; i++){
  console.log("row is ", i);
// inner loop for coloumn
for (let j=0; j<a[i].length; j++){
  // console.log("colomn is ", j);
  console.log(" " , a[i][j]);
}
}
/* i and j is representation of row and coloumn
a[1] gives us the entire 2nd row: [8, 11, 9, 4].
a[1][2] then gives us the 3rd element in that row: 9.
*/
// console.log(a[1][3]);
// OR 
for(let row in a){
  console.log("row is ", a[row]);
  for(let colomn in a[row]){
  console.log(" ", a[row][colomn]);
  }
}
```

</Details>


## 1. What's the output?

```javascript
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1);
}
for (let i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1);
}
```

- A: `0 1 2` and `0 1 2`
- B: `0 1 2` and `3 3 3`
- C: `3 3 3` and `0 1 2`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: C

Now, due to the behavior of var and closures, all three setTimeout callbacks share the same i. By the time the callbacks execute, the loop has already completed, and i is equal to 3. Therefore, all three callbacks log the value of i, which is 3.

A for loop is used with the variable i declared using let.
setTimeout(() => console.log(i), 1) is inside the loop and uses block-scoping with let.
With let, each iteration of the loop has its own scope for i. Therefore, each setTimeout callback captures the correct value of i at the time the callback is created. As a result, the callbacks log the values 0, 1, and 2 respectively.

 the variable `i` was declared using the `let` keyword: variables declared with the `let` (and `const`) keyword are block-scoped (a block is anything between `{ }`). During each iteration, `i` will have a new value, and each value is scoped inside the loop.

</p>
</details> */