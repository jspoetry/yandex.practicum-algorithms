const readline = require('readline')

const rl = readline.createInterface({
  input: process.stdin
})

const input = []

rl.on('line', (line) => {
  input.push(line)
})

process.stdin.on('end', solve.bind(null, input))

function solve(input) {
  const [len, values, sum] = input

  process.stdout.write(twoSum(values.split(' ').map(Number), Number(sum)).join(' '))
}

function twoSum(numbers, sum) {
  const sortedNumbers = Array.from(numbers).sort((a, b) => a - b)
  let left = 0;
  let right = sortedNumbers.length - 1

  while (left < right) {
    let currentSum = sortedNumbers[left] + sortedNumbers[right]

    if (currentSum === sum) return [sortedNumbers[left], sortedNumbers[right]]
    if (currentSum < sum) left += 1
    if (currentSum > sum) right -= 1
  }

  return ['None']
}