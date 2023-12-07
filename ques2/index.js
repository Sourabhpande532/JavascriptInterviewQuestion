/*
## Sample Q2 
Create a web app where I can input a text. Now create two buttons + and -. On clicking + increase the fontSize by 2px and vice versa.
*/

const textInput = document.querySelector(".text-input");
const increaseBtn = document.querySelector(".increase-btn");
const decreaseBtn = document.querySelector(".decrease-btn");
const result = document.querySelector(".result");

let defaultFontSize = 16;

increaseBtn.addEventListener("click",()=>{
defaultFontSize += 2;
textInput.style.fontSize = `${defaultFontSize}px`
})
decreaseBtn.addEventListener("click",()=>{
defaultFontSize -= 2;
textInput.style.fontSize = `${defaultFontSize}px`
})
















// increaseBtn.addEventListener("click", increseText);
// decreaseBtn.addEventListener("click", decreseText);

// let defaultFontSize = 16;

// function increseText() {
//   defaultFontSize += 2;
//   textInput.style.fontSize = `${defaultFontSize}px`;
//   result.textContent = `${defaultFontSize}px`;
// }
// function decreseText() {
//   defaultFontSize -= 2;
//   textInput.style.fontSize = `${defaultFontSize}px`;
//   result.textContent = `${defaultFontSize}px`;
// }

