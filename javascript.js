let input="";







const calculatorBody = document.querySelector("#calculatorBody");

calculatorBody.addEventListener('click',(event) => {

    if(event.target.classList.contains('button')){
        if((event.target.textContent)=="=")
            operate(input);
        else if((event.target.textContent)=="C")
            input=""
        else{
        input+=(event.target.textContent);
        console.log(input)
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
    
    console.log(array)


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
        result=Number(array[0])/Number(array[1]);

    
    console.log(result)

    
}