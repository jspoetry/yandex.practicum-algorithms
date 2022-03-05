const TOP_RESULTS = 5;

export const searchEngine = (query, indexMap) => {
  const resultMap = new Map()
  const querySet = new Set(query)

  for (const word of querySet) {
    const indexItem = indexMap.get(word);

    if (!indexItem) continue;

    for (const [id, count] of indexItem) {
      if (resultMap.has(id)) {
        resultMap.set(id, count + resultMap.get(id))
      } else {
        resultMap.set(id, count)
      }
    }
  }

  return Array.from(resultMap.entries())
    .sort(([id1, count1], [id2, count2]) => (count1 !== count2 ? count2 > count1 : id2 < id1) ? 1 : -1)
    .slice(0, TOP_RESULTS);
}