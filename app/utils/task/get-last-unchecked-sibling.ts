import { TaskModel } from 'app/types'

export function getLastUncheckedSiblingIndex(tasks: TaskModel[], index: number) {
  let found = index
  const { indent } = tasks[index]
  for (let i = index; i < tasks.length; i += 1) {
    const task = tasks[i]
    if (task.indent < indent) {
      break
    }
    if (task.indent === indent && !task.checked) {
      found = i
    }
  }
  return found
}
