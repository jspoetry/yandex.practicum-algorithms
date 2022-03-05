export const transformToArrayIfIsNot = (value) => Array.isArray(value)
  ? value
  : Array.of(value)
