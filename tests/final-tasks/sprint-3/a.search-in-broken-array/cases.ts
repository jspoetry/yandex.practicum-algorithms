import {splitAndParseString} from "~/src/utils";

/**
 * @type {{input: (number | number[]), output: number[]}[]}
 */
export const cases = [
  {
    input: splitAndParseString('9\n5\n19 21 100 101 1 4 5 7 12\n'),
    output: '6'
  },
  {
    input: splitAndParseString('2\n1\n5 1\n'),
    output: '1'
  },
  {

  }
]
