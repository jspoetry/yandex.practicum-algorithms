type ToArray<T = unknown> = (value: T) => T extends unknown[] ? T : T[]

export const transformToArrayIfIsNot: ToArray = (value) => Array.isArray(value)
  ? value
  : Array.of(value)
