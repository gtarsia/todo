import produce, { current } from 'immer'
import { getNewIndexes } from 'app/utils/array'
import { useDocumentStore } from './store'
import { focusPrevious } from './focus'

export function deleteTask(index: number) {
  const { tasks } = useDocumentStore.getState()
  if (tasks.length < 2) {
    return
  }
  const oldTasks = tasks.slice()
  useDocumentStore.setState(produce(state => {
    state.tasks.splice(index, 1)
    state.indexes = getNewIndexes(state.indexes,
                                  oldTasks,
                                  state.tasks)
  }))
  focusPrevious(index)
}
