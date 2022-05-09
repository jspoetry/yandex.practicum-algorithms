import {isGreater} from "../../../../src/final-tasks/sprint-3/b.effective-quick-sort/is-greater";

test('compare task count', () => {
  const participant1 = ['gena', 6, 1000]
  const participant2 = ['gosha', 2, 90]

  const result = isGreater(participant1, participant2)

  expect(result).toEqual(true)
})

test('compare fine amount', () => {
  const p1 = ['timofey', 4, 80]
  const p2 = ['rita', 4, 100]

  const result = isGreater(p1, p2)

  expect(result).toEqual(true)
})

test('compare name', () => {
  const p1 = ['gosha', 4, 100]
  const p2 = ['rita', 4, 100]

  const result = isGreater(p1, p2)

  expect(result).toEqual(true)
})