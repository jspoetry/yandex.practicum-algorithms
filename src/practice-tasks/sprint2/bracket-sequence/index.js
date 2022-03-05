import {receiveInput} from "../../../utility/receiveInput";

class Stack {
  constructor() {
    this._storage = [];
  }

  get peek() {
    return this._storage[this._storage.length - 1];
  }

  push(value) {
    this._storage.push(value)
  }

  pop() {
    if (this._storage.length > 0) {
      this._storage.pop()
    }
  }

  isEmpty() {
    return this._storage.length === 0
  }

}

const oppositeBracketMap = {
  '(': ')',
  '[': ']',
  '{': '}'
}

const isCorrectBracketSeq = (seq) => {
  // Empty string is a right bracket sequence
  if (!seq) return 'True';

  const stack = new Stack()

  for (const bracket of seq) {
    const oppositeBracket = oppositeBracketMap[bracket]
    if (oppositeBracket) {
      stack.push(oppositeBracket)
    } else if (stack.peek === bracket) {
      stack.pop()
    } else {
      return 'False'
    }
  }

  return stack.isEmpty() ? 'True' : 'False'
}

receiveInput((input) => console.log(isCorrectBracketSeq(input[0])))