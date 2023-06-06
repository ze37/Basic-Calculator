const buttonsEl = document.querySelectorAll("button")

const inputFieldEl = document.getElementById("result")

for(let i = 0; i < buttonsEl.length; i++){
    buttonsEl[i].addEventListener("click", ()=>{
        const buttonValue = buttonsEl[i].textContent
        if(buttonValue === "C"){
            clearResult()
        }else if(buttonValue == "="){
            calculatorResult()
        }else{
            appendValue(buttonValue)
        }
    })
}
function clearResult(){
    inputFieldEl.value = ""
}

function calculatorResult(){
    inputFieldEl.value = eval(inputFieldEl.value)
}

function appendValue(buttonValue){
    inputFieldEl.value += buttonValue
}