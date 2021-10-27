const readline = require('readline')

const rl  = readline.createInterface({
  input: process.stdin,
})

const inputLines = []

let currentLine = 0;

rl.on('line', line => {
  inputLines.push(line)
})

process.stdin.on('end', solve)

const zip = (len, arr1, arr2) => {
  const zippedArray = []

  for (let i = 0; i < len; i++) {
    zippedArray.push(arr1[i], arr2[i])
  }

  return zippedArray
}

function solve() {
  const len = readInt()
  const arr1 = readArray()
  const arr2 = readArray()

  process.stdout.write(`${zip(len, arr1, arr2).join(' ')}`)
}

function readInt() {
  return Number(inputLines[currentLine++])
}

function readArray() {
  return inputLines[currentLine++].trim().split(' ').map(num => Number(num))
}
