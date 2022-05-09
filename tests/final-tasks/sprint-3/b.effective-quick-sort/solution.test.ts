import { solution } from '../../../../src/final-tasks/sprint-3/b.effective-quick-sort/solution'

test('#1', () => {
  const input = [
    5,
    ['alla', 4, 100],
    ['gena', 6, 1000],
    ['gosha', 2, 90],
    ['rita', 2, 90],
    ['timofey', 4, 80],
  ]

  const result = solution(input)


  expect(result).toEqual([
    'gena',
    'timofey',
    'alla',
    'gosha',
    'rita'
  ])
})