import { receiveInput } from "../../../utility/receiveInput";

class StackMax {
  constructor() {
    this._storage = [];
  }

  push(value) {
    this._storage.push(value)
  }

  pop() {
    if (this._storage.length > 0) {
      this._storage.pop()
    } else {
      return 'error'
    }
  }

  get_max() {
    return this._storage.length ? [...this._storage].sort((a, b) => b - a)[0] : 'None'
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

    if (result !== undefined) console.log(result)
  }
})