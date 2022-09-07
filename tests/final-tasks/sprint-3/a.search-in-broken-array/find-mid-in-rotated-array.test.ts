import { findMidInBrokenArray } from "~/src/final-tasks/sprint-3/a.search-in-broken-array/find-mid-in-broken-array";

test('#1', () => {
  const input = [19,21,100,101,1,4,5,7,12]

 const result = findMidInBrokenArray(input)

  expect(result).toEqual(3)
})

test('#2', () => {
  const input = [5, 1]

  const result = findMidInBrokenArray(input)

  expect(result).toEqual(0)
})

test('#3', () => {
  const input = [1,2,3,5,6,7,9,0]

  const result = findMidInBrokenArray(input);

  expect(result).toEqual(6)
})