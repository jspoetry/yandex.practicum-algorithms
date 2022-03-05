const readline = require('readline')

const rl = readline.createInterface({
  input: process.stdin
})

const input = []

rl.on('line', (line) => {
  input.push(line.split(' ').map(n => Number(n)))
})

process.stdin.on('end', () => solve(input[0]))

function solve(input) {
  process.stdout.write(String(calculateQuadratic(...input)))
}

const calculateQuadratic = (a, x, b, c) => (a * x * x) + (b * x) + c