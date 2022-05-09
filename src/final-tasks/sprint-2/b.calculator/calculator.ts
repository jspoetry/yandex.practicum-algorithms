
export class Calculator {
  static operators = ['+', '-', '/', '*']

  static checkIsOperator(operator) {
    return this.operators.includes(operator)
  }

  static calc(a, b, operand) {
    switch (operand) {
      case '+':
        return this.add(a, b)
      case '-':
        return this.subtract(a, b)
      case '*':
        return this.multiply(a, b)
      case '/':
        return this.divide(a, b)
    }

    return 'error';
  }

  static add(a, b) {
    return a + b
  }

  static subtract(a, b) {
    return a - b
  }

  static multiply(a, b) {
    return a * b
  }

  static divide(a, b) {
    return Math.floor(a / b)
  }
}