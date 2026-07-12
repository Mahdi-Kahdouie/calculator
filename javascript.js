let input="";
let i=0;
let resultDone=0;
let isEqualsPressed = false;
let operators = ["+", "-", "*", "/"];




const calculatorButton = document.querySelector("#calculatorButton");
const display = document.querySelector(".calculatorDisplay");

calculatorButton.addEventListener('click', (event) => {

    if (event.target.classList.contains('button')) {
        let clickButton = event.target.textContent;

        if (clickButton == "=") {
            if (input.includes("+") || input.includes("-") || input.includes("*") || input.includes("/")) {
                operate(input);
                resultDone = 1;
            }
        }
        else if (clickButton == "C") {
            input = "";
            display.textContent = 0;
            resultDone = 0;
        }
        else {
            let lastChar = input.slice(-1);

            if (resultDone == 1 && (!(operators.includes(clickButton)))) {
                input = "";
                resultDone = 0;
            }
            else if (resultDone == 1 && operators.includes(clickButton)) {
                resultDone = 0;
            }

            if (operators.includes(clickButton) && operators.includes(lastChar)) {
                input = input.slice(0, -1);
            }
            else if (operators.includes(clickButton)) {
                if (input.includes("+") || input.includes("-") || input.includes("*") || input.includes("/")) {
                    operate(input);
                    resultDone = 0;
                }
            }

            input += clickButton;
            display.textContent = input;
        }
    }
});



function operate(str){
    let array=[]
    if (str.includes("+")){
        array=str.split("+")
        calcute(array,"+")
        }
    if (str.includes("-")){
        array=str.split("-")
        calcute(array,"-")
        }
    if (str.includes("*")){
        array=str.split("*")
        calcute(array,"*")
        }
    if (str.includes("/")){
        array=str.split("/")
        calcute(array,"/")
        }
    


}




function calcute(array,operator){
    let result;
    if(operator=="+"){
        result=Number(array[0])+Number(array[1]);

    }
    if(operator=="-")
        result=Number(array[0])-Number(array[1]);

    if(operator=="*")
        result=Number(array[0])*Number(array[1]);

    if(operator=="/")
        if(Number(array[1])==0)
            result = "Error"
        else
            result=Number(array[0])/Number(array[1]);

    
    if(result=="Error"){
        display.textContent="Error"
        input=""

    }
    else if (Number.isInteger(result)) {
    display.textContent = result; 
    input=String(result)
    resultDone=1
    } else {
    display.textContent = result.toFixed(3); 
    result=result.toFixed(3);
    input=String(result)
    resultDone=1
    }

    

    
}