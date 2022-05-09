export class Stack {
  _storage = []

  get isEmpty() {
    return this._storage.length === 0
  }

  push(value) {
    this._storage.push(value)
  }

  pop() {
    if (this.isEmpty) return 'error';

    return this._storage.pop()
  }
}