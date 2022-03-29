import produce, { current } from 'immer'
import { getNewIndexes } from 'app/utils/array'
import { useDocumentStore } from './store'
import { focusPrevious } from './focus'

export function deleteTask(index: number) {
  useDocumentStore.setState(produce(state => {
    const oldTasks = state.tasks.slice()
    state.tasks.splice(index, 1)
    state.indexes = getNewIndexes(state.indexes,
                                  oldTasks,
                                  state.tasks)
  }))
  focusPrevious(index)
}
