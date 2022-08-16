const binarySum = (first: string, second: string) => {
  const len = Math.max(first.length, second.length)
  const bits = []
  let remainder = 0
  for (const i = 0; i < len; i++) {
    const bit1 = first[i]
    const bit2 = second[i]
    const result = Number(bit1) + Number(bit2)
  }
}
