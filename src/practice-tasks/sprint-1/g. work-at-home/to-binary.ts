export const toBinary = (num: number) => {
  const bits: number[] = []
  let left = num
  
  while (left > 0) {
    bits.push(left % 2)
    left = Math.floor(left / 2)
  }
  
  return bits.reverse().join('')
}
