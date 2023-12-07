/* 
Sample Q3

Create a web app where I can input a text. Now, create three buttons h1, h2, h3. When I click on any of the button, the text should become h1, h2, or h3.
*/

const userInput = document.querySelector(".inputValue");
const heading1 = document.querySelector(".heading-one");
const heading2 = document.querySelector(".heading-two");
const heading3 = document.querySelector(".heading-three");
const result = document.querySelector(".result");

userInput.addEventListener("input", () => {
  displayResult(userInput.value);
});

function displayResult(text) {
  result.innerHTML = text;
}

heading1.addEventListener("click", () => {
  displayResult(`<h1>${userInput.value}</h1>`);
});
heading2.addEventListener("click", () => {
  displayResult(`<h2>${userInput.value}</h2>`);
});

heading3.addEventListener("click", () => {
  displayResult(`<h3>${userInput.value}</h3>`);
});
