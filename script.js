const format = (calculations) => {
    arrayOperands = [];
    operations = ''
    for (x in calculations){
        if((calculations[x]=='+')||(calculations[x]=='-')){
            arrayOperands.push(parse(operations))
            operations = calculations[x];
        }
        else{
            operations += calculations[x];
        }
    }
    arrayOperands.push(parse(operations))
    return bodmasCheck(arrayOperands);

}
const parse = (operations) => {
    if (!((operations.includes('*'))||(operations.includes('/')))){
        return parseInt(operations);
    }
    return operations
}
const add = (a,b) => {
    return a+b;
}
const subtract = (a,b) => {
    return add(-b,a);
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

const bodmasCheck = (arrayOperands) => {
    var sum = 0;
    console.log(arrayOperands)
    for (x in arrayOperands){
        if (Number.isInteger(arrayOperands[x])){
            console.log('check')
            sum = operate('+',sum,arrayOperands[x]);
        }
    }
    return sum;
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
            console.log(displayText);
            let answer = format(display.getAttribute('value'));
            displayText = '';
            display.setAttribute('value',answer);
        }
    });
});
