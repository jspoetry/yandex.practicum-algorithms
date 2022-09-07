import {searchEngine} from "./search-engine";
import {transformToArrayIfIsNot} from "~/src/utility/transformToArrayIfIsNot";
import {generateIndexMapFrom} from "./generate-index-map-from";

export const solution = (input) => {
  const [count, ...rest] = input

  const articles = rest.slice(0, count)
  const queries = rest.slice(count + 1)

  // n * nl
  const indexMap = generateIndexMapFrom(articles)

  // m * ml * l * logl
  for (const query of queries) {
    const docs = searchEngine(transformToArrayIfIsNot(query), indexMap);
    console.log(docs.map(doc => doc[0]).join(' '));
  }
}