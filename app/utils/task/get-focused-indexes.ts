import { TaskModel } from 'app/types'

export function getFocusedIndexes(tasks: TaskModel[], index: number): boolean[] {
  const indexes = tasks.map(() => false)
  indexes[index] = true
  const originalIndent = tasks[index].indent
  let lastIndent = originalIndent
  for (let i = index - 1; i > -1; i -= 1) {
    const { indent } = tasks[i]
    if (indent < lastIndent) {
      indexes[i] = true
      lastIndent = indent
    }
  }
  for (let i = index + 1; i < tasks.length; i += 1) {
    const { indent } = tasks[i]
    if (indent === originalIndent) {
      break
    } else if (indent > originalIndent) {
      indexes[i] = true
    } else {
      break
    }
  }
  return indexes
}
