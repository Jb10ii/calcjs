const num1 = document.getElementById('num1');
const num2 = document.getElementById('num2');
const operation = document.getElementById('operation');
const calculateBtn = document.getElementById('calculateBtn');
const resultDisplay = document.getElementById('result');
const errorMsg = document.getElementById('errorMsg');

    
const calculate = (number1, number2, operation) => {
    let result = 0;

    if (operation === 'add') {
        result = number1 + number2;
    } else if (operation === 'subtract') {
        result = number1 - number2;
    } else if (operation === 'multiply') {
        result = number1 * number2;
    } else if (operation === 'divide') {
        if (number1 === 0) {
            return "undefined";
        }
        if (number2 === 0) {
            return "undefined";
        }
        result = number1 / number2;
    } else if (operation === 'modulus') {
        if (number1 === 0) {
            return "undefined";
        }
        if (number2 === 0) {
            return "undefined";
        }
        result = number1 % number2;
    } else {
        result = "Invalid operation";
    }

    return result;
};

    
calculateBtn.addEventListener('click', (e) => {
    e.preventDefault();  
    errorMsg.textContent = "";  
    
    const number1 = parseFloat(num1.value);
    const number2 = parseFloat(num2.value);
    const selectedOperation = operation.value;
    
   
    if (isNaN(number1) || isNaN(number2)) {
        errorMsg.textContent = "Please enter valid numbers.";
        resultDisplay.textContent = 0;  
    } else {
        const result = calculate(number1, number2, selectedOperation);
        
        
        if (typeof result === 'string') {  
            errorMsg.textContent = result; 
            resultDisplay.textContent = 0;  
        } else {
            resultDisplay.textContent = result; 
        }
    }
});
