import {HashTable} from "./hash-table";

export const solution = (input) => {
  const [operationCount, ...operations] = input;
  const hashTable = new HashTable()

  let resultString = '';

  for (let i = 0; i < operationCount; i++) {
    const [name, ...args] = operations[i]

    const result = hashTable[name](...args);

    if (result !== undefined) {
      resultString += `${result}\n`
    }
  }

  console.log(resultString);
}