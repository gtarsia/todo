import produce from 'immer'
import { getNewIndexes } from 'app/utils/array'
import { useDocumentStore } from './store'

export function createTaskBelow(index: number) {
  useDocumentStore.setState(state => {
    const oldTasks = state.tasks.slice()
    const tasks = produce(oldTasks, (draft) => {
      const newTask = { checked: true, text: '', indent: 0 }
      draft.splice(index + 1, 0, newTask)
    })
    const indexes = getNewIndexes(state.indexes, oldTasks, tasks)
    indexes.push(index + 1)
    return { tasks, indexes }
  })
}
