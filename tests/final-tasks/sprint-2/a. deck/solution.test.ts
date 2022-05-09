import {solution} from "../../../../src/final-tasks/sprint-2/a.deck/solution.js";
import {parseArgument} from "../../../../src/utility/parseArgument";
import case4 from "./cases/case4";


const logMock = jest.fn()
console.log = logMock;

const testAnswer = (input, output) => {
  solution(input)

  expect(logMock.mock.calls.flat()).toEqual(output)
}

const splitStringArray = (strArr) => strArr.split('\n').map(parseArgument)

beforeEach(() => {
  logMock.mockClear();
})

test('case #1', () => {
  const input = [
    4,
    4,
    ['push_front', 861],
    ['push_front', -819],
    'pop_back',
    'pop_back'
  ]
  const output = [861,-819]

  testAnswer(input, output)
})

test('case #2', () => {
  const input = [
    7,
    10,
    ['push_front', -855],
    ['push_front', 0],
    'pop_back',
    'pop_back',
    ['push_back', 844],
    'pop_back',
    ['push_back', 823],
  ]
  const output = [-855, 0, 844]

  testAnswer(input, output)
})

test('case #4', () => {
  const { input, output } = case4

  testAnswer(
    splitStringArray(input),
    splitStringArray(output)
  )
})