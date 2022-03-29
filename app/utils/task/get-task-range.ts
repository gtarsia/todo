import { Range, TaskModel } from 'app/types'

export function getTaskRange(tasks: TaskModel[], index: number): Range {
  const start = index
  let count = 1
  const { indent } = tasks[index]
  for (let i = index + 1; i < tasks.length; i += 1) {
    const task = tasks[i]
    if (task.indent > indent) {
      count += 1
    } else {
      break
    }
  }
  return { start, count }
}
