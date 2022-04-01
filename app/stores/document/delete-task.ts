import produce, { current } from 'immer'
import { getNewIndexes } from 'app/utils/array'
import { useDocumentStore } from './store'
import { focusPrevious } from './focus'
import { updateTasks } from './update-tasks'

export function deleteTask(index: number) {
  const { tasks, indexes } = useDocumentStore.getState()
  if (tasks.length < 2) {
    return
  }
  const oldTasks = tasks.slice()
  const newTasks = tasks.slice().splice(index, 1)
  const newIndexes = getNewIndexes(indexes, oldTasks, newTasks)
  updateTasks(newTasks, newIndexes)
  focusPrevious(index)
}
