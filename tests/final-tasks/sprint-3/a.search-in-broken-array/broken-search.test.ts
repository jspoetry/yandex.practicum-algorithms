import { brokenSearch } from "../../../../src/final-tasks/sprint-3/a.search-in-broken-array/broken-search";
import { cases } from "./cases";

test('#1', () => {
  const input = [ 12,41,122,411,412,1222,3000,12222,122222 ]

  const result = brokenSearch(input, 3000)

  expect(result).toEqual(6)
})