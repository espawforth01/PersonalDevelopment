// Get the display element
const display = document.getElementById('display');

// Initialize the display value
let displayValue = '';

// Initialize the operator
let operator = '';

// Initialize the previous value
let previousValue = '';

// Function to update the display value
function updateDisplay(value) {
  displayValue += value;
  display.value = displayValue;
}

// Function to clear the display value
function clearDisplay() {
  displayValue = '';
  operator = '';
  previousValue = '';
  display.value = displayValue;
}

// Function to set the operator
function setOperator(op) {
  operator = op;
  previousValue = displayValue;
  displayValue = '';
}

// Function to calculate the result
function calculateResult() {
  let currentValue = displayValue;
  let result = 0;

  switch (operator) {
    case '+':
      result = parseFloat(previousValue) + parseFloat(currentValue);
      break;
    case '-':
      result = parseFloat(previousValue) - parseFloat(currentValue);
      break;
    case '*':
      result = parseFloat(previousValue) * parseFloat(currentValue);
      break;
    case '/':
      result = parseFloat(previousValue) / parseFloat(currentValue);
      break;
    default:
      result = currentValue;
  }

  displayValue = result.toString();
  display.value = displayValue;
  operator = '';
  previousValue = '';
}

// Add event listeners to the buttons
document.getElementById('clear').addEventListener('click', clearDisplay);

document.getElementById('divide').addEventListener('click', () => {
  setOperator('/');
});

document.getElementById('multiply').addEventListener('click', () => {
  setOperator('*');
});

document.getElementById('subtract').addEventListener('click', () => {
  setOperator('-');
});

document.getElementById('add').addEventListener('click', () => {
  setOperator('+');
});

document.getElementById('equals').addEventListener('click', calculateResult);

// Add event listeners to the number buttons
document.querySelectorAll('.button-grid button').forEach(button => {
  if (button.id !== 'clear' && button.id !== 'divide' && button.id !== 'multiply' && button.id !== 'subtract' && button.id !== 'add' && button.id !== 'equals') {
    button.addEventListener('click', () => {
      updateDisplay(button.textContent);
    });
  }
});