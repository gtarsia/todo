import produce from 'immer'
import { DocumentModel } from 'app/types'
import { useAppStore, AppStore, setDocuments } from './store'
import { newDocument } from './new'

export function createDocument(name: string) {
  const { documents } = useAppStore.getState()
  const newDocuments = produce(documents, (draft: DocumentModel[]) => {
    draft.push(newDocument(name))
  })
  setDocuments(newDocuments)
}
