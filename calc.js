/**
 * Calculator class that represents a calculator application.
 */
class Calculator {
  /**
   * Constructor for the Calculator class.
   */
  constructor() {
    /** @private */
    this.result = 0;
  }

  /**
   * Adds two numbers.
   *
   * @param {number} a - The first number.
   * @param {number} b - The second number.
   * @returns {number} The sum of the two numbers.
   */
  add(a, b) {
    this.result = a + b;
    return this.result;
  }

  /**
   * Subtracts two numbers.
   *
   * @param {number} a - The first number.
   * @param {number} b - The second number.
   * @returns {number} The difference between the two numbers.
   */
  subtract(a, b) {
    this.result = a - b;
    return this.result;
  }

  /**
   * Multiplies two numbers.
   *
   * @param {number} a - The first number.
   * @param {number} b - The second number.
   * @returns {number} The product of the two numbers.
   */
  multiply(a, b) {
    this.result = a * b;
    return this.result;
  }

  /**
   * Divides two numbers.
   *
   * @param {number} a - The dividend.
   * @param {number} b - The divisor.
   * @returns {number} The quotient of the division.
   * @throws {Error} Throws an error if the divisor is zero.
   */
  divide(a, b) {
    this.result = a / b;
    return this.result;
  }

  /**
   * Resets the calculator's result to zero.
   */
  reset() {
    this.result = 0;
  }

  /**
   * Retrieves the current result of the calculator.
   *
   * @returns {number} The current result.
   */
  getResult() {
    return this.result;
  }
}

// Usage Example for Calculator

// const calculator = new Calculator();

// // Adding two numbers
// const sum = calculator.add(5, 3);
// console.log(`Sum: ${sum}`);

// // Subtracting two numbers
// const difference = calculator.subtract(10, 4);
// console.log(`Difference: ${difference}`);

// // Resetting the calculator
// calculator.reset();
// console.log(`Result after reset: ${calculator.getResult()}`);
