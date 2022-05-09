import { Stack } from './stack'
import { Calculator } from "./calculator";

export const solution = (calcString) => {
  const stack = new Stack()
  const symbols = calcString.split(' ')

  for (let char of symbols) {
    if (!Number.isNaN(Number(char))) {
      stack.push(Number(char))
    }

    if (Calculator.checkIsOperator(char)) {
      const b = stack.pop()
      const a = stack.pop()

      const result = Calculator.calc(a, b, char)

      stack.push(result)
    }
  }

  return stack.pop()
}