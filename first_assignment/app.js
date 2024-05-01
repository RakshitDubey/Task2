const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function performOperation(num1, num2, operator) {
  switch (operator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    case '/':
      if (num2 === 0) {
        throw new Error('Division by zero is not allowed');
      }
      return num1 / num2;
    default:
      throw new Error('Invalid operator');
  }
}

function startCalculator() {
  rl.question('Enter the first number: ', (num1) => {
    rl.question('Enter the second number: ', (num2) => {
      rl.question('Enter the operation (+, -, *, /): ', (operator) => {
        try {
          const result = performOperation(parseFloat(num1), parseFloat(num2), operator);
          console.log(`Result: ${result}`);
        } catch (error) {
          console.error(`Error: ${error.message}`);
        } finally {
          rl.close();
        }
      });
    });
  });
}

startCalculator();
