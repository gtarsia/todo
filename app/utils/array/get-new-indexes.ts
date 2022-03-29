
export function getNewIndexes(
  oldIndexes: Array<number | null>,
  oldArray: any[],
  newArray: any[],
) {
  const map = new Map()
  newArray.forEach((el, i) => {
    map.set(el, i)
  })
  return oldIndexes.map((n: number | null) => {
    if (n == null) {
      return n
    }
    const task = oldArray[n]
    const found = map.get(task)
    return found == null ? null : found
  })
}
