import {receiveInput} from "../../../utility/receiveInput.js";

class StackMax {
  constructor() {
    this._highs = [];
  }

  push(value) {
    if (this._highs.length === 0 || this._highs[this._highs.length - 1] < value) {
      this._highs.push(value)
    } else {
      this._highs.push(this._highs[this._highs.length - 1])
    }
  }

  pop() {
    if (this._highs.length > 0) {
      this._highs.pop()
    } else {
      return 'error'
    }
  }

  get_max() {
    return this._highs.length !== 0 ? this._highs[this._highs.length - 1] : 'None'
  }
}

receiveInput((input) => {
  const [countOperation, ...operations] = input
  const stack = new StackMax()

  for (let i = 0; i < countOperation; i++) {
    let result;
    const operation = operations[i]

    if (Array.isArray(operation)) {
      stack[operation[0]](operation[1])
    } else {
      result = stack[operation]()
    }

    if (result !== undefined) console.log(`${result}`)
  }
})
