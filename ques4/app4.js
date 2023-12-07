/* 
Sample Q4

Create a web app where I can input a text. Now, create three buttons: red, green, blue. Clicking on the button should change the text color.
*/

const userInputValue = document.querySelector(".inputValue");
const result = document.querySelector(".result");
const turnRed = document.querySelector(".color-red");
const turnBlue = document.querySelector(".color-blue");
const turnGreen = document.querySelector(".color-green");

userInputValue.addEventListener("input", () => {
  showMessage(userInputValue.value);
});

function showMessage(text) {
  result.textContent = text;
}

turnRed.addEventListener("click", () => {
  userInputValue.value === ""
    ? (result.textContent = "invalid")
    : (result.style.color = "red");
});

turnBlue.addEventListener("click", () => {
  userInputValue.value === ""
    ? (result.textContent = "invalid")
    : (result.style.color = "blue");
});

turnGreen.addEventListener("click", () => {
  userInputValue.value === ""
    ? (result.textContent = "invalid")
    : (result.style.color = "green");
});
