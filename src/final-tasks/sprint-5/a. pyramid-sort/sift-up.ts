import { ParticipantRecord } from "./types"

export const siftUp = (heap: ParticipantRecord[], idx: number) => {
  if (idx === 1) return idx

  const parentIdx = Math.ceil(idx / 2)

  if (heap[parentIdx] > heap[idx]) {
    [heap[idx], heap[parentIdx]] = [heap[parentIdx], heap[idx]]
    idx = siftUp(heap, parentIdx)
  }

  return idx
}