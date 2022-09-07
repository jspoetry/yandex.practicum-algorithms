import {transformToArrayIfIsNot} from "~/src/utility/transformToArrayIfIsNot";

export const generateIndexMapFrom = (articles) => (
  articles.reduce((indexMap, article, i) => {
    const countMap = transformToArrayIfIsNot(article)
      .reduce(
        (map, word) => (map.set(word, (map.get(word) || 0) + 1), map),
        new Map()
      )

    for (const word of countMap.keys()) {
      const id = i + 1
      const wordTuple = [id, countMap.get(word)]
      if (indexMap.has(word)) {
        indexMap.get(word).push(wordTuple)
      } else {
        indexMap.set(word, [wordTuple])
      }
    }

    return indexMap;
  }, new Map())
)