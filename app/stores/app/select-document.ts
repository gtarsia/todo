import { useAppStore } from './store'

export function selectDocument(documentId: string) {
  useAppStore.setState({ documentId })
}
