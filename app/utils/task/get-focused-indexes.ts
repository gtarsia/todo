import { TaskModel } from 'app/types'

export function getFocusedIndexes(tasks: TaskModel[], index: number): boolean[] {
  const indexes = tasks.map(() => false)
  indexes[index] = true
  const originalIndent = tasks[index].indent
  let canHaveNextSibling = true
  for (let i = index + 1; i < tasks.length; i += 1) {
    const { indent } = tasks[i]
    if (indent > originalIndent) {
      indexes[i] = true
    } else {
      break
    }
  }
  return indexes
}
