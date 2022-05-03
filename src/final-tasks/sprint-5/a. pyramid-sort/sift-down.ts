import { ParticipantRecord } from "./types";

export const siftDown = (heap: ParticipantRecord[], idx: number) => {
  const leftIdx = 2 * idx
  const rightIdx = 2 * idx + 1
  const heapSize = heap.length - 1

  // heap doesn't have children
  if (heapSize < leftIdx) return idx;

  // heap has left and right children
  const largestIdx = rightIdx <= heapSize && heap[leftIdx] > heap[rightIdx]
    ? rightIdx
    : leftIdx

  if (heap[idx] > heap[largestIdx]) {
    [heap[idx], heap[largestIdx]] = [heap[largestIdx], heap[idx]]
    idx = siftDown(heap, largestIdx)
  }

  return idx
}