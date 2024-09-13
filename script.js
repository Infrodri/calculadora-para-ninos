let currentInput = '';
let operator = '';
let previousInput = '';

function addNumber(number) {
    currentInput += number;
    document.getElementById('result').value = currentInput;
}

function operate(op) {
    previousInput = currentInput;
    operator = op;
    currentInput = '';
}

function calculate() {
    if (previousInput !== '' && currentInput !== '' && operator !== '') {
        let result;
        switch (operator) {
            case '+':
                result = parseFloat(previousInput) + parseFloat(currentInput);
                break;
            case '-':
                result = parseFloat(previousInput) - parseFloat(currentInput);
                break;
            case '*':
                result = parseFloat(previousInput) * parseFloat(currentInput);
                break;
            case '/':
                result = parseFloat(previousInput) / parseFloat(currentInput);
                break;
        }
        document.getElementById('result').value = result;
        currentInput = result.toString();
        operator = '';
        previousInput = '';
    }
}

function clearResult() {
    currentInput = '';
    previousInput = '';
    operator = '';
    document.getElementById('result').value = '';
}
