export const parseArgument = (arg) => {
  if (!arg) return;

  const trimmedArg = arg.trim()

  if (!Number.isNaN(Number(trimmedArg))) {
    return Number(trimmedArg)
  }

  if (/\s/.test(trimmedArg)) {
    return trimmedArg.split(' ').map(el => parseArgument(el))
  }

  return trimmedArg
}