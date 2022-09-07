import {
  generateParenthesis
} from "~/src/practice-tasks/sprint3/a.parentheses-generator/generate-parenthesis";

test('generate parentheses on count 2', () => {
  const result = generateParenthesis(2)

  expect(result).toBe(
    '(())\n' +
    '()()'
  )
})

test('generate parentheses on count 3', () => {
  const result = generateParenthesis(3)

  expect(result).toBe(
    '((()))\n' +
    '(()())\n' +
    '(())()\n' +
    '()(())\n' +
    '()()()'
  )
})
