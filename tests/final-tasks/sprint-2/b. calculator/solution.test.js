import { solution } from "../../../../src/final-tasks/sprint-2/b.calculator/solution";

test('calculation with one operand', () => {
  const addition = '3 4 +'
  const subtraction = '10 8 -'

  const additionResult = solution(addition)
  const subtractionResult = solution(subtraction)

  expect(additionResult).toEqual(7)
  expect(subtractionResult).toEqual(2)
})

test('calculation with two operands', () => {
  const calculationOne = '10 2 4 * -'
  const calculationTwo = '2 1 + 3 *'

  const resultOne = solution(calculationOne)
  const resultTwo = solution(calculationTwo)

  expect(resultOne).toEqual(2)
  expect(resultTwo).toEqual(9)
})

test('calculation with three operands', () => {
  const calculation1 = '7 2 + 4 * 2 +'
  const calculation2 = '2 4 + 4 6 + *'

  const result1 = solution(calculation1)
  const result2 = solution(calculation2)

  expect(result1).toEqual(38)
  expect(result2).toEqual(60)
})

test('complex calculations with many operands', () => {
  const calculation1 = '4 2 * 4 / 25 * 2 - 12 / 500 2 * + 2 / -999 + 71 + -1 * 2 / 1000 + 6 * 8065 -'

  const result1 = solution(calculation1)

  expect(result1).toEqual(-787)

})

test('#14', () => {
  const calculation = '4 2 * 4 / 25 * 2 - 12 / 500 2 * + 2 / -999 + 71 + -1 *'

  const result = solution(calculation)

  expect(result).toEqual(426)
})