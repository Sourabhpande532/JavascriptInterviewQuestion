/* 
##Sample Question Q1

Create a web app which would take two inputs. It would also have 4 buttons: +, -, x /. Based on the button clicked perform the operation on the two inputs. You can do this in React or vanillaJS based on your choice. Your time starts now.
*/

const add = document.querySelector(".add");
const subtract = document.querySelector(".subtract");
const multiply = document.querySelector(".multiply");
const divide = document.querySelector(".divide");
const outputResult = document.querySelector(".result");

function performOperation(operation) {
  let inputA = document.querySelector(".inputA").value;
  let inputB = document.querySelector(".inputB").value;
  let numA = Number(inputA);
  let numB = Number(inputB);
  if (numA && numB) {
    let result = operation(numA, numB);
    outputResult.textContent = `The calcultion of both term is ${result}`;
  } else {
    outputResult.textContent = "invalid text";
  }
}

add.addEventListener("click", () => performOperation((a, b) => a + b));
subtract.addEventListener("click", () => performOperation((a, b) => a - b));
multiply.addEventListener("click", () => performOperation((a, b) => a * b));
divide.addEventListener("click", () =>
  performOperation((a, b) => (b !== 0 ? a / b : "Cannot divide by 0"))
);


