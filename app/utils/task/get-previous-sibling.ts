import { TaskModel } from 'app/types'

export function getPreviousSiblingIndex(tasks: TaskModel[], index: number) {
  let found = index
  const { indent } = tasks[index]
  for (let i = index - 1; i >= 0; i -= 1) {
    const task = tasks[i]
    if (task.indent < indent) {
      break
    }
    if (task.indent === indent) {
      found = i
      break
    }
  }
  return found
}
