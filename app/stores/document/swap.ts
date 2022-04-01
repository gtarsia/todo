import produce, { current } from 'immer'
import { getNewIndexes } from 'app/utils/array'
import {
  getTaskRange, getNextSiblingIndex, swapRanges, getPreviousSiblingIndex,
} from 'app/utils/task'
import { useDocumentStore } from './store'
import { updateTasks } from './update-tasks'

export function swapPrevious(index: number) {
  const { tasks, indexes } = useDocumentStore.getState()
  if (index === 0) {
    return
  }
  const oldTasks = tasks.slice()
  const newTasks = tasks.slice()
  const taskRange = getTaskRange(newTasks, index)
  const siblingIndex = getPreviousSiblingIndex(newTasks, index)
  const siblingRange = getTaskRange(newTasks, siblingIndex)
  swapRanges(newTasks, taskRange, siblingRange)
  const newIndexes = getNewIndexes(indexes, oldTasks, newTasks)
  updateTasks(newTasks, newIndexes)
}

export function swapNext(index: number) {
  const { tasks, indexes } = useDocumentStore.getState()
  if (index >= tasks.length - 1) {
    return
  }
  const oldTasks = tasks.slice()
  const newTasks = tasks.slice()
  const taskRange = getTaskRange(newTasks, index)
  const siblingIndex = getNextSiblingIndex(newTasks, index)
  const siblingRange = getTaskRange(newTasks, siblingIndex)
  swapRanges(newTasks, taskRange, siblingRange)
  const newIndexes = getNewIndexes(indexes, oldTasks, newTasks)
  updateTasks(newTasks, newIndexes)
}
