import produce from 'immer'
import { useAppStore, setDocuments } from './store'

export function renameDocument(documentId: string, name: string) {
  let { documents } = useAppStore.getState()
  const i = documents.findIndex(doc => doc.id === documentId)
  if (i === -1) {
    return
  }
  documents = produce(documents, draft => {
    draft[i].name = name
  })
  setDocuments(documents)
}
