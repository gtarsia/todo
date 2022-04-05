import produce, { current } from 'immer'
import { getNewIndexes } from 'app/utils/array'
import { useDocumentStore } from './store'
import { focusFirst, focusPrevious } from './focus'
import { updateTasks } from './update-tasks'

export function deleteTask(index: number) {
  const { tasks, indexes } = useDocumentStore.getState()
  if (tasks.length < 2) {
    return
  }
  if (index === 0) {
    focusFirst()
  } else {
    focusPrevious(index)
  }
  const oldTasks = tasks.slice()
  const newTasks = tasks.slice()
  newTasks.splice(index, 1)
  const newIndexes = getNewIndexes(indexes, oldTasks, newTasks)
  updateTasks(newTasks, newIndexes)
}
