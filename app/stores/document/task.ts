import produce from 'immer'
import { useDocumentStore } from './store'

export function toggleChecked(index: number) {
  useDocumentStore.setState(produce(state => {
    state.tasks[index].checked = !state.tasks[index].checked
  }))
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
