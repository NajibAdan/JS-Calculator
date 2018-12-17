const format = (calculations) => {
    var number = '';
    var operator = '';
    for(x in calculations){
        if(parseInt(calculations[x]!=NaN)){
            number += calculations[x];
        }
        else {
            operator = calculations[x];
            number += ' ';
        }
    }
    var space = number.indexOf(' ');
    return operate(operator,parseInt(number.slice(0,space-1)),parseInt(number.slice(space)))
}
const add = (a,b) => {
    return a+b;
}
const subtract = (a,b) => {
    return a-b;
}
const multiply = (a,b) => {
    return a*b;
}
const divide = (a,b) => {
    return a/b;
}

const operate = (operator,operandA,operandB) => {
    switch (operator) {
        case '+':
            return add(operandA,operandB);
            break;
        case '-':
            return subtract(operandA,operandB);
            break;
        case '*':
            return multiply(operandA,operandB);
            break;
        case '/':
            return divide(operandA,operandB);
            break;
        default:
            break;
    }
}

let buttonPressed = Array.from(document.querySelectorAll("button"));
let display = document.querySelector("#display");
let displayText ='';
buttonPressed.forEach((number) => {
    number.addEventListener('click', (e)=>{
        if ((number.getAttribute('class')=='number')||(number.getAttribute('class')=='operand')){
            console.log(displayText);
            displayText += number.textContent;
            display.setAttribute('value',displayText);
            displayText = display.getAttribute('value');
        }
        else if (number.getAttribute('id')=='clear'){
            displayText = '';
            display.setAttribute('value',displayText);
        }
        else if (number.getAttribute('id')=='equals'){
            let answer = format(displayText);
            displayText = '';
            display.setAttribute('value',answer);
        }
    });
});
