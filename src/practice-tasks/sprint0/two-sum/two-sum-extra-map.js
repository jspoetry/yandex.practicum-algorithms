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
  const previous = new Set()

  for (let num of numbers) {
    let diff = sum - num

    if (previous.has(diff)) {
      return [diff, num]
    } else {
      previous.add(num)
    }
  }

  return ['None']
}
