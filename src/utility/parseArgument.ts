export type ParsedArg = string | number | (string | number)[]

export const parseArgument = (arg: string): ParsedArg | void => {
  if (!arg) return;

  const trimmedArg = arg.trim()

  if (!Number.isNaN(Number(trimmedArg))) {
    return Number(trimmedArg)
  }

  // If string contains spaces it's array
  const hasSpaces = /\s/.test(trimmedArg)
  if (hasSpaces) {
    return trimmedArg.split(' ').map(el => parseArgument(el)) as unknown as ParsedArg
  }

  return trimmedArg
}