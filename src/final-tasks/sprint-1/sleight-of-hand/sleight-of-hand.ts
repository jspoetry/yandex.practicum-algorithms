import { receiveInput } from "~/src/utility/receiveInput";

const parser = (arg) => {
  if (!arg) return;

  return arg.length === 1
    ? Number(arg)
    : arg.split('').map((n) => n === '.' ? n : Number(n))
}

receiveInput(solve, parser)

function solve(input) {
  const [keypress, ...matrix] = input

  console.log(calculateHowManyKeypressInTimes(matrix, keypress))
}

const calculateHowManyKeypressInTimes = (matrix, keypressCapacity) => {
  const countMap = new Map()
  let howMany = 0;

  matrix.forEach(row => {
    row.forEach((el) => {
      if (typeof el !== "number") return;
      const count = countMap.has(el) ? countMap.get(el) + 1 : 1
      countMap.set(el, count)
    })
  })

  countMap.forEach(value => {
    if (value <= keypressCapacity * 2) {
      howMany++
    }
  })

  return howMany
}