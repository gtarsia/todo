import { TaskModel } from 'app/types'

export function getFocusedIndexes(tasks: TaskModel[], index: number): boolean[] {
  const indexes = tasks.map(() => false)
  indexes[index] = true
  const originalIndent = tasks[index].indent
  let lastIndent = originalIndent
  let canHavePreviousSibling = true
  for (let i = index - 1; i > -1; i -= 1) {
    const { indent } = tasks[i]
    if (indent === originalIndent && canHavePreviousSibling) {
      indexes[i] = true
      canHavePreviousSibling = false
    } else if (indent < lastIndent) {
      indexes[i] = true
      lastIndent = indent
      canHavePreviousSibling = false
    }
  }
  let canHaveNextSibling = true
  for (let i = index + 1; i < tasks.length; i += 1) {
    const { indent } = tasks[i]
    if (indent === originalIndent) {
      indexes[i] = true
      break
    } else if (indent > originalIndent) {
      indexes[i] = true
    } else {
      break
    }
  }
  return indexes
}
