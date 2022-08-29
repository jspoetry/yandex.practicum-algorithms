export class Stack {
  constructor(readonly _storage: unknown[] = []) { }

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

  peak() {
    if (this.isEmpty) return 'error';

    return this._storage[this._storage.length - 1]
  }
}