let display = document.getElementById('display');
let buttons = document.querySelectorAll('button');

let calculator = {
    displayValue: '',
    firstOperand: null,
    secondOperand: null,
    operator: null,
    waitingForSecondOperand: false,
};

function updateDisplay() {
    display.value = calculator.displayValue;
}

function handleNumber(button) {
    if (calculator.waitingForSecondOperand) {
        calculator.displayValue = button.textContent;
        calculator.waitingForSecondOperand = false;
    } else {
        calculator.displayValue += button.textContent;
    }
    updateDisplay();
}

function handleOperator(button) {
    const operator = button.textContent;
    const inputValue = parseFloat(calculator.displayValue);

    if (calculator.firstOperand === null) {
        calculator.firstOperand = inputValue;
    } else if (calculator.operator) {
        calculator.secondOperand = inputValue;
        calculator.firstOperand = performCalculation();
        calculator.displayValue = '';
    }

    calculator.waitingForSecondOperand = true;
    calculator.operator = operator;
}

function performCalculation() {
    let result = 0;
    switch (calculator.operator) {
        case '+':
            result = calculator.firstOperand + calculator.secondOperand;
            break;
        case '-':
            result = calculator.firstOperand - calculator.secondOperand;
            break;
        case '*':
            result = calculator.firstOperand * calculator.secondOperand;
            break;
        case '/':
            result = calculator.firstOperand / calculator.secondOperand;
            break;
        default:
            break;
    }
    return result;
}

function handleEquals() {
    if (calculator.firstOperand === null) {
        return;
    }

    const inputValue = parseFloat(calculator.displayValue);
    calculator.secondOperand = inputValue;
    const result = performCalculation();
    calculator.displayValue = result;
    updateDisplay();
    calculator.firstOperand = null;
    calculator.secondOperand = null;
    calculator.operator = null;
    calculator.waitingForSecondOperand = false;
}

function handleClear() {
    calculator.displayValue = '';
    calculator.firstOperand = null;
    calculator.secondOperand = null;
    calculator.operator = null;
    calculator.waitingForSecondOperand = false;
    updateDisplay();
}

function handleScientificFunctions(button) {
    const inputValue = parseFloat(calculator.displayValue);
    let result = 0;

    switch (button.textContent) {
        case 'sin':
            result = Math.sin(inputValue);
            break;
        case 'cos':
            result = Math.cos(inputValue);
            break;
        case 'tan':
            result = Math.tan(inputValue);
            break;
        case 'e^x':
            result = Math.exp(inputValue);
            break;
        case 'log':
            result = Math.log(inputValue);
            break;
        case '10^x':
            result = Math.pow(10, inputValue);
            break;
        case '√':
            result = Math.sqrt(inputValue);
            break;
        case 'x^2':
            result = inputValue ** 2;
            break;
        case 'π':
            result = Math.PI;
            break;
        case '1/x':
            result = 1 / inputValue;
            break;
        case '|x|':
            result = Math.abs(inputValue);
            break;
        default:
            break;
    }

    calculator.displayValue = result;
    updateDisplay();
}

buttons.forEach(button => {
    if (button.textContent === 'C') {
        button.addEventListener('click', handleClear);
    } else if (button.textContent === '=') {
        button.addEventListener('click', handleEquals);
    } else if (['+', '-', '*', '/'].includes(button.textContent)) {
        button.addEventListener('click', () => handleOperator(button));
    } else if (['sin', 'cos', 'tan', 'e^x', 'log', '10^x', '√', 'x^2', 'π', '1/x', '|x|'].includes(button.textContent)) {
        button.addEventListener('click', () => handleScientificFunctions(button));
    } else {
        button.addEventListener('click', () => handleNumber(button));
    }
});