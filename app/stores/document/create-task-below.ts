import produce from 'immer'
import { getNewIndexes } from 'app/utils/array'
import { useDocumentStore } from './store'
import { updateTasks } from './update-tasks'

export function createTaskBelow(index: number) {
  const { tasks, indexes } = useDocumentStore.getState()
  const oldTasks = tasks.slice()
  const newTasks = produce(tasks, (draft) => {
    const newTask = { checked: false, text: '', indent: 0 }
    draft.splice(index + 1, 0, newTask)
  })
  const newIndexes = getNewIndexes(indexes, oldTasks, newTasks)
  newIndexes.push(index + 1)
  updateTasks(newTasks, newIndexes)
}
