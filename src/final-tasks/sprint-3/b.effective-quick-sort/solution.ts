import {quicksort} from "./quick-sort";

export const solution = (input) => {
  const [count, ...rest] = input

  const participants = rest.slice(0, count)

  quicksort(participants)

  return participants.map(p => p[0])
}