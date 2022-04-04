import { useAppStore } from './store'
import { resetTasks } from 'app/stores/document'

export function resetDocument() {
  useAppStore.setState({ documentId: '' })
  resetTasks()
}
