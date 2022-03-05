// nearest prime to 100000
const MAX_SIZE = 99991;

export class HashTable {
  static NONE = 'None';

  constructor(maxSize = MAX_SIZE) {
    this.maxSize = maxSize;
    this.buckets = Array(maxSize);
  }

  _getBucketIndex(key) {
    return key % this.maxSize;
  }

  put(key, value) {
    const bucketIndex = this._getBucketIndex(key)
    const bucket = this.buckets[bucketIndex] ? this.buckets[bucketIndex] : (this.buckets[bucketIndex] = [])

    if (bucket.length === 0) {
      bucket.push([key, value]);
      return;
    }

    for (let i = 0; i < bucket.length; i++) {
      const pair = bucket[i];
      if (pair[0] === key) {
        if (pair[1] !== value) {
          bucket[i] = [key, value]
        }
        return;
      }
    }

    bucket.push([key, value])
  }

  get(key) {
    const bucketIndex = this._getBucketIndex(key)
    const bucket = this.buckets[bucketIndex] ? this.buckets[bucketIndex] : (this.buckets[bucketIndex] = [])

    if (bucket.length === 0) return HashTable.NONE;

    for (const [pairKey, pairValue] of bucket) {
      if (pairKey === key) return pairValue;
    }

    return HashTable.NONE
  }

  delete(key) {
    const bucketIndex = this._getBucketIndex(key)
    const bucket = this.buckets[bucketIndex] ? this.buckets[bucketIndex] : (this.buckets[bucketIndex] = [])

    if (!bucket.length) return HashTable.NONE;

    for (let i = 0; i < bucket.length; i++) {
      const pair = bucket[i]

      if (pair[0] === key) {
        if (bucket.length === 1 || i === bucket.length - 1) {
          return bucket.pop()[1]
        }


        [bucket[i], bucket[bucket.length - 1]] = [bucket[bucket.length - 1], bucket[i]]
        return bucket.pop()[1]
      }
    }

   return HashTable.NONE
  }
}