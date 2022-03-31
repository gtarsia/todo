import { useAppStore } from './store'
import { appData } from 'app/data'

export function selectDocument(documentId: string) {
  appData.saveSelectedDocument(documentId)
  useAppStore.setState({ documentId })
}
