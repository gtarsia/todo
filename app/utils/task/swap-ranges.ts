import { Range, TaskModel } from 'app/types'

// Swap tasks between both ranges
export function swapRanges(tasks: TaskModel[], r1: Range, r2: Range) {
  const left = r1.start < r2.start ? r1 : r2
  const right = r1.start < r2.start ? r2 : r1
  const first = tasks.slice(left.start, left.start + left.count)
  const second = tasks.splice(right.start, right.count, ...first)
  tasks.splice(left.start, left.count, ...second)
}
