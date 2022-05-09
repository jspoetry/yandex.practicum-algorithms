import { solution } from '../../../../src/practice-tasks/sprint3/l)two-bycicles/solution'
import { cases } from "./cases";

cases.forEach(({ input, output}, index) => {
  test(`case #${index + 1}`, () => {
    expect(solution(input)).toEqual(output)
  })
})

