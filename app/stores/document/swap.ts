import produce, { current } from 'immer'
import { getNewIndexes } from 'app/utils/array'
import {
  getTaskRange, getNextSiblingIndex, swapRanges, getPreviousSiblingIndex,
} from 'app/utils/task'
import { useDocumentStore } from './store'

export function swapPrevious(index: number) {
  const { tasks } = useDocumentStore.getState()
  if (index === 0) {
    return
  }
  const oldTasks = tasks.slice()
  useDocumentStore.setState(produce(state => {
    const taskRange = getTaskRange(state.tasks, index)
    const siblingIndex = getPreviousSiblingIndex(state.tasks, index)
    const siblingRange = getTaskRange(state.tasks, siblingIndex)
    swapRanges(state.tasks, taskRange, siblingRange)
  }))
  useDocumentStore.setState(state => {
    const indexes = getNewIndexes(state.indexes, oldTasks, state.tasks)
    return { indexes }
  })
}

export function swapNext(index: number) {
  const { tasks } = useDocumentStore.getState()
  if (index >= tasks.length - 1) {
    return
  }
  const oldTasks = tasks.slice()
  useDocumentStore.setState(produce(state => {
    const taskRange = getTaskRange(state.tasks, index)
    const siblingIndex = getNextSiblingIndex(state.tasks, index)
    const siblingRange = getTaskRange(state.tasks, siblingIndex)
    swapRanges(state.tasks, taskRange, siblingRange)
  }))
  useDocumentStore.setState(state => {
    const indexes = getNewIndexes(state.indexes, oldTasks, state.tasks)
    return { indexes }
  })
}
