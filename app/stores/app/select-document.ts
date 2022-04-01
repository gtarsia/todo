import { useAppStore } from './store'
import { appData } from 'app/data'
import { hydrateTasks } from 'app/stores/document'

export function selectDocument(documentId: string) {
  appData.saveSelectedDocument(documentId)
  useAppStore.setState({ documentId })
  hydrateTasks(documentId)
}
