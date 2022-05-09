import { binarySearch } from "../../../../src/final-tasks/sprint-3/a.search-in-broken-array/binary-search";

test('#1', () => {
  const input = [1, 2, 3, 4, 5, 6, 7, 8, 9]
  const toFind = 3
  const result = binarySearch(input, toFind)

  expect(result).toEqual(2)
})

test('#2', () => {
  const input = [5, 9, 15, 23, 54, 78, 85, 96, 112]
  const toFind = 85
  const result = binarySearch(input, toFind)

  expect(result).toEqual(input.indexOf(toFind))
})

test('#3', () => {

})

test('find not existed element', () => {
  const input = [4, 8, 9, 15, 19, 25]
  const toFind = 99
  const result = binarySearch(input, toFind)

  expect(result).toEqual(input.indexOf(toFind))
})

