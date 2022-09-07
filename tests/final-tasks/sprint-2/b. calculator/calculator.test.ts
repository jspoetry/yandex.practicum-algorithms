import { Calculator } from "~/src/final-tasks/sprint-2/b.calculator/calculator";

test('operand checking', () => {
  expect(Calculator.checkIsOperator('+')).toBeTruthy()
  expect(Calculator.checkIsOperator('-')).toBeTruthy()
  expect(Calculator.checkIsOperator('*')).toBeTruthy()
  expect(Calculator.checkIsOperator('/')).toBeTruthy()

  expect(Calculator.checkIsOperator('%')).toBeFalsy()
  expect(Calculator.checkIsOperator('f')).toBeFalsy()
})

test('addition', () => {
  expect(Calculator.add(3, 7)).toBe(10)
})

test('subtraction', () => {
  expect(Calculator.subtract(19, 7)).toBe(12)
})

test('multiplying', () => {
  expect(Calculator.multiply(3, 5)).toBe(15)
})

test('dividing', () => {
  expect(Calculator.divide(12, 5)).toBe(2)
})