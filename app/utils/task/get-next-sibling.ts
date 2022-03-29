import { TaskModel } from 'app/types'

export function getNextSiblingIndex(tasks: TaskModel[], index: number) {
  let found = index
  const { indent } = tasks[index]
  for (let i = index + 1; i < tasks.length; i += 1) {
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
