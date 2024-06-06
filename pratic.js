

// Function to perform calculation based on operator
function calculate(num1, operator, num2) {
    switch (operator) {
        case '+':
            return add(num1, num2);
        case '-':
            return subtract(num1, num2);
        case '*':
            return multiply(num1, num2);
        case '/':
            return divide(num1, num2);
        default:
            return "Invalid operator";
    }
}

// Example usage
const num1 = 2;
const operator = '+'
const num2 = 2;

console.log(calculate(num1, operator, num2)); // Output: 15



