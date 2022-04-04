import { useAppStore, setDocuments } from 'app/stores/app'

export function deleteDocument(documentId: string) {
  let { documents } = useAppStore.getState()
  documents = documents.filter(doc => doc.id !== documentId)
  setDocuments(documents)
}
