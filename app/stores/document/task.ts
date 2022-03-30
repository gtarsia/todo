import produce from 'immer'
import { useDocumentStore } from './store'
import {
  getLastUncheckedSiblingIndex, getTaskRange, swapRanges,
} from 'app/utils/task'
import { getNewIndexes } from 'app/utils/array'

export function toggleChecked(index: number) {
  const { checked } = useDocumentStore.getState().tasks[index]
  useDocumentStore.setState(produce(state => {
    state.tasks[index].checked = !checked
  }))
  if (!checked) {
    const { tasks } = useDocumentStore.getState()
    const siblingIndex = getLastUncheckedSiblingIndex(tasks, index)
    const taskRange = getTaskRange(tasks, index)
    const siblingRange = getTaskRange(tasks, siblingIndex)
    const oldTasks = tasks.slice()
    useDocumentStore.setState(produce(state => {
      swapRanges(state.tasks, taskRange, siblingRange)
    }))
    useDocumentStore.setState(state => {
      const indexes = getNewIndexes(state.indexes, oldTasks, state.tasks)
      return { indexes }
    })
  }
}

export function increaseIndent(index: number) {
  useDocumentStore.setState(produce(state => {
    state.tasks[index].indent += 1
  }))
}

export function decreaseIndent(index: number) {
  useDocumentStore.setState(produce(state => {
    if (state.tasks[index].indent > 0) {
      state.tasks[index].indent -= 1
    }
  }))
}
