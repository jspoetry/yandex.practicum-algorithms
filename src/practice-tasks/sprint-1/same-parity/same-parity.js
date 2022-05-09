const readline = require('readline')

const rl = readline.createInterface({
  input: process.stdin
})

const input = []

rl.on('line', (line) => {
  input.push(processDataFrom(line))
})

const processDataFrom = (arg) => {
    if (!Number.isNaN(Number(arg))) {
      return Number(arg)
    }

    if (/\s/.test(arg)) {
      return arg.split(' ').map(el => processDataFrom(el))
    }

    if (!arg) return;

    return arg
}

const solve = () => {
  const [numbers] = input

  process.stdout.write(checkParity(numbers))
}

const checkParity = (numbers) => {
  const paritySet = new Set(
    numbers.map(num => num % 2 === 0)
  )

  return paritySet.size > 1
    ? 'FAIL'
    : 'WIN'
}

process.stdin.on('end', solve)
