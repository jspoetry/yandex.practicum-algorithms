export class Deck {
  /**
   * @type {number[]}
   * @private
   */
  queue;
  /**
   * @type {number}
   * @private
   */
  front;
  /**
   * @type {number}
   * @private
   */
  back;
  /**
   * @type {number}
   * @private
   */
  maxSize;
  /**
   * @type {number}
   * @private
   */
  size;

  /**
   * @param {number} size
   */
  constructor(size) {
    this.queue = new Array(size);
    this.maxSize = size;
    this.front = 0;
    this.back = 0;
    this.size = 0;
  }

  /**
   * @returns {boolean}
   */
  get isEmpty() {
    return this.size === 0;
  }

  /**
   * @returns {boolean}
   */
  get isFull() {
    return this.size === this.maxSize
  }

  /**
   * Behavior is like Array.prototype.at. On empty deck return 0
   * @param {number} index
   * @returns {number}
   * @private
   */
  _handleIndexOverflow(index) {
    if (this.isEmpty) return 0;
    if (index >= this.maxSize) return 0;
    if (index < 0) return this.maxSize - 1;

    return index;
  }

  /**
   * @param {number} index
   * @returns {number}
   * @private
   */
  _removeValueBy(index) {
    const value = this.queue[index]

    delete this.queue[index];

    this.size--

    return value;
  }

  /**
   * @param {number} value
   * @return {void|'error'}
   */
  push_back(value) {
    if (this.isFull) return 'error';

    this.back = this._handleIndexOverflow(this.back + 1)
    this.queue[this.back] = value;
    this.size++;
  }

  /**
   * @param {number} value
   * @return {void|'error'}
   */
  push_front(value) {
    if (this.isFull) return 'error';

    this.front = this._handleIndexOverflow(this.front - 1)
    this.queue[this.front] = value;
    this.size++;
  }

  /**
   * @return {number|'error'}
   */
  pop_front() {
    if (this.isEmpty) return 'error';

    const value = this._removeValueBy(this.front);

    this.front = this._handleIndexOverflow(this.front + 1)

    if (this.isEmpty) this.back = 0;

    return value;
  }

  /**
   * @return {number|'error'}
   */
  pop_back() {
    if (this.isEmpty) return 'error';

    const value = this._removeValueBy(this.back)

    this.back = this._handleIndexOverflow(this.back - 1)

    if (this.isEmpty) this.front = 0;

    return value;
  }
}