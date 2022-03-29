
export function swapIndexes(array: any[], i1: number, i2: number) {
  const temp = array[i1]
  array[i1] = array[i2]
  array[i2] = temp
}
