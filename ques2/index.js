/*
## Sample Q2 
Create a web app where I can input a text. Now create two buttons + and -. On clicking + increase the fontSize by 2px and vice versa.
*/

const textInput = document.getElementById("text-input");
const increaseBtn = document.getElementById("increase-btn");
const decreaseBtn = document.getElementById("decrease-btn");
const result = document.getElementById("result");

let defaultFontSize = 16;

function updateSize(){
    textInput.style.fontSize = defaultFontSize;
    result.textContent = `Size:${defaultFontSize}px`
}

increaseBtn.addEventListener("click",()=>{
    defaultFontSize += 2;
    updateSize();
})

decreaseBtn.addEventListener("click",()=>{
    defaultFontSize -= 2;
    updateSize();
})


updateSize();