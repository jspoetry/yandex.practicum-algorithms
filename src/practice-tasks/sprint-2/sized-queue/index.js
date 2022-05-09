import {receiveInput} from "../../../utility/receiveInput";

class SizedQueue {
  _queue;
  _max;
  _head = 0;
  _tail = 0;
  _size = 0;

  constructor(maxSize) {
    this._queue = Array(maxSize).fill('None');
    this._max = maxSize;
  }

  get isEmpty() {
    return this._size === 0;
  }

  push(value) {
    if (this._size === this._max) return 'error';

    this._queue[this._tail] = value;
    this._tail = (this._tail + 1) % this._max;
    this._size++;
  }

  pop() {
    if (this.isEmpty) return 'None';

    const value = this._queue[this._head];
    this._queue[this._head] = 'None';
    this._head = (this._head + 1) % this._max;
    this._size--;

    return value
  }

  size() {
    return this._size;
  }

  peek() {
    return this._queue[this._head]
  }
}

receiveInput((input) => {
  const [countOperation, queueSize, ...operations] = input
  const queue = new SizedQueue(queueSize)

  for (let i = 0; i < countOperation; i++) {
    let result;
    const operation = operations[i]

    if (Array.isArray(operation)) {
      result = queue[operation[0]](operation[1])
    } else {
      result = queue[operation]()
    }

    if (result !== undefined) console.log(result)
  }
})
