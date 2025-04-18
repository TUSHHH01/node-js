// calculator.js

function addition(x, y) {
    return Number(x) + Number(y);
}

function subtract(x, y) {
    return x - y;
}

function multiply(x, y) {
    return x * y;
}

function divide(x, y) {
    if (y === 0) {
        return "Error: Division by zero!";
    }
    return x / y;
}

module.exports = { addition, subtract, multiply, divide };
