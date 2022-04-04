import { TaskModel } from 'app/types'

export function getFocusedIndexes(tasks: TaskModel[], index: number): boolean[] {
  const indexes = tasks.map(() => false)
  indexes[index] = true
  let lastIndent = tasks[index].indent
  for (let i = index - 1; i > -1; i -= 1) {
    const { indent } = tasks[i]
    if (indent < lastIndent) {
      indexes[i] = true
      lastIndent = indent
    }
  }
  const { indent: mainIndent } = tasks[index]
  for (let i = index + 1; i < tasks.length; i += 1) {
    const { indent } = tasks[i]
    if (indent > mainIndent) {
      indexes[i] = true
    } else {
      break
    }
  }
  return indexes
}
