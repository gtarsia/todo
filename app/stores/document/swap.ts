import produce from 'immer'
import { swapIndexes } from 'app/utils/array'
import { useDocumentStore } from './store'

export function swapPrevious(index: number) {
  if (index === 0) {
    return
  }
  useDocumentStore.setState(produce(state => {
    swapIndexes(state.tasks, index, index - 1)
    const currentIndexI = state.indexes.findIndex((i: number) => i === index)
    const previousIndexI = state.indexes.findIndex((i: number) => i === index - 1)
    swapIndexes(state.indexes, currentIndexI, previousIndexI)
  }))
}

export function swapNext(index: number) {
  const { tasks } = useDocumentStore.getState()
  if (index >= tasks.length - 1) {
    return
  }
  useDocumentStore.setState(produce(state => {
    swapIndexes(state.tasks, index, index + 1)
    const currentIndexI = state.indexes.findIndex((i: number) => i === index)
    const nextIndexI = state.indexes.findIndex((i: number) => i === index + 1)
    swapIndexes(state.indexes, currentIndexI, nextIndexI)
  }))
}
