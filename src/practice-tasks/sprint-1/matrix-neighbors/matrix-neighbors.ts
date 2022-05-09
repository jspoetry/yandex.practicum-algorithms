const readline = require('readline')

const rl = readline.createInterface({
  input: process.stdin
})

const input = []

rl.on('line', (line) => {
  input.push(processDataFrom(line))
})

const processDataFrom = (arg) => {
  if (!arg) return;

  if (!Number.isNaN(Number(arg))) {
    return Number(arg)
  }

  if (/\s/.test(arg)) {
    return arg.split(' ').map(el => processDataFrom(el))
  }

  return arg
}

const solve = () => {
  const [rowCount, colCount] = input.slice(0, 3)
  const MATRIX_START = 2
  const MATRIX_END = MATRIX_START + rowCount
  const rawMatrix = input.slice(MATRIX_START, MATRIX_END)
  // handle cases when a matrix has one column, so we convert numbers in arrays with number
  const matrix = colCount === 1
    ? rawMatrix.map(el => Array.of(el))
    : rawMatrix
  const coors = input.slice(MATRIX_END, MATRIX_END + 2)

  process.stdout.write(
    findNeighbors(coors, matrix, rowCount - 1, colCount - 1)
      .sort((a, b) => a - b)
      .join(' ')
  )
}

const findNeighbors = (coors, matrix, rowCount, colCount) => {
  const [row, col] = coors
  const neighborsIndexes = [
    [row - 1, col], // top
    [row + 1, col], // bot
    [row, col + 1], // right
    [row, col - 1], // left
  ]
  const neighbors = []

  neighborsIndexes.forEach(([nRow, nCol]) => {
    if (nRow >= 0 && nCol >= 0 && nRow <= rowCount && nCol <= colCount) {
      neighbors.push(matrix[nRow][nCol])
    }
  })

  return neighbors
}

process.stdin.on('end', solve)
