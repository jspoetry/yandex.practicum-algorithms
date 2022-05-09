const readline = require('readline')

const rl = readline.createInterface({
  input: process.stdin
})

const input = []

rl.on('line', (line) => {
  input.push(line)
})

process.stdin.on('end', solve)

function solve() {
  const [len, values, sum] = input

  const result = twoSum(values.split(' ').map(Number), Number(sum))

  process.stdout.write(result.join(' '))
}

function twoSum(chips, sum) {
  for (let i = 0; i < chips.length; i++) {
    for (let j = i + 1; j < chips.length; j++) {
      if (chips[i] + chips[j] === sum) {
        return [chips[i], chips[j]]
      }
    }
  }
  return ['None']
}