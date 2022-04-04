import { useDocumentStore } from './store'

export function resetTasks() {
  useDocumentStore.setState({
    tasks: [],
    indexes: [],
  })
}
