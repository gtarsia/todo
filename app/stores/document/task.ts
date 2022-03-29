import produce from 'immer'
import { useDocumentStore } from './store'

export function toggleChecked(index: number) {
  useDocumentStore.setState(produce(state => {
    state.tasks[index].checked = !state.tasks[index].checked
  }))
}
