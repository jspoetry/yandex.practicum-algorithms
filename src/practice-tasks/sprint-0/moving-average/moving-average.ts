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
  const [len, records, shift] = input

  const result = calculateAverageMoving(records.split(' ').map(r => Number(r)), Number(shift))

  process.stdout.write(`${result.join(' ')}`)
}

function calculateAverageMoving(records, shift) {
  let sum = records.slice(0, shift).reduce((acc, el) => acc + el)
  const timeseries = [sum / shift]

  for (let i = 0; i < records.length - shift; i++) {
    sum -= records[i]
    sum += records[i + shift]

    timeseries.push(sum / shift)
  }

  return timeseries
}