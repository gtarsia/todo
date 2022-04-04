import { DocumentModel } from 'app/types'
import { useAppStore, setDocuments } from 'app/stores/app'

function swap(i: number, j: number) {
  let { documents } = useAppStore.getState()
  documents = documents.slice()
  const tmp = documents[i]
  documents[i] = documents[j]
  documents[j] = tmp
  setDocuments(documents)
}

export function swapUp(documentId: string) {
  const { documents } = useAppStore.getState()
  const i = documents.findIndex(doc => doc.id === documentId)
  if (i === 0) {
    return
  }
  swap(i, i - 1)
}

export function swapDown(documentId: string) {
  const { documents } = useAppStore.getState()
  const i = documents.findIndex(doc => doc.id === documentId)
  if (i >= documents.length - 1) {
    return
  }
  swap(i, i + 1)
}
