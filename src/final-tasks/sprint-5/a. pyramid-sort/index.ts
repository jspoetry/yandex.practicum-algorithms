
import { receiveInput } from '~/src/utility/receiveInput'
import { siftUp } from './sift-up'
import { Input } from './types'

receiveInput((input: Input) => {
  const [count, ...participants] = input


  for (let i = 1; i < participants.length; i++) {
    siftUp(participants, i)
  }
})