let displayValue = '';

function appendToDisplay(value) {
    displayValue += value;
    document.getElementById('display').value = displayValue;
}

function clearDisplay() {
    displayValue = '';
    document.getElementById('display').value = displayValue;
}

function clearLast() {
    displayValue = displayValue.slice(0, -1); // Remove last character
    document.getElementById('display').value = displayValue;
}

function calculate() {
    try {
        let result = eval(displayValue); // Using eval for simplicity (not recommended for production)
        document.getElementById('display').value = result;
        displayValue = ''; // Reset displayValue after calculation
    } catch (error) {
        alert('Error in calculation');
        clearDisplay();
    }
}
