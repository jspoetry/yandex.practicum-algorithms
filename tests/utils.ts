import {parseArgument} from "../src/utility/parseArgument";

/**
 * @param {string} strArr
 */
export const splitAndParseString = (strArr) => strArr.split('\n').map(parseArgument)