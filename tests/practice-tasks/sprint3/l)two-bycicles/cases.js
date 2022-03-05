import {splitAndParseString} from "../../../utils";

/**
 * @type {{input: (number | number[]), output: number[]}[]}
 */
export const cases = [
  {
    input: splitAndParseString('6\n1 2 4 4 6 8\n3'),
    output: '3 5'
  },
  {
    input: splitAndParseString('6\n1 2 4 4 4 4\n3'),
    output: '3 -1'
  },
  {
    input: splitAndParseString('6\n1 2 4 4 4 4\n10'),
    output: '-1 -1'
  }
]