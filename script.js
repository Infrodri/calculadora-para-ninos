let currentInput = '';
let operator = '';
let previousInput = '';

function playSound(soundFile) {
    const audio = new Audio(soundFile);
    audio.play();
}

function addNumber(number) {
    playSound(`sounds/${number}.mp3`); // Reproduce sonido del número
    currentInput += number;
    document.getElementById('result').value = currentInput;
}

function operate(op) {
    playSound(`sounds/${op}.mp3`); // Reproduce sonido de la operación
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
        playSound('sounds/equals.mp3'); // Reproduce sonido al calcular
        document.getElementById('result').value = result;
        currentInput = result.toString();
        operator = '';
        previousInput = '';
    }
}

function clearResult() {
    playSound('sounds/clear.mp3'); // Reproduce sonido al limpiar
    currentInput = '';
    previousInput = '';
    operator = '';
    document.getElementById('result').value = '';
}

