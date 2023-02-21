let display = document.getElementById('display');
let calculation = '';

function appendToDisplay(value) {
    calculation += value;
    display.value = calculation;
}

function clearDisplay() {
    calculation = '';
    display.value = '';
}

function calculate() {
    try {
        let result = eval(calculation);
        display.value = result;
        calculation = '';
    } catch (error) {
        display.value = 'Error';
    }
}