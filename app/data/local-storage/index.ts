import { DocumentModel } from 'app/types'
import { documentsKey } from './keys'

export function saveDocuments(docs: DocumentModel[]) {
  localStorage.setItem(documentsKey, JSON.stringify(docs))
}

export function getDocuments(): DocumentModel[] {
  const d = localStorage.getItem(documentsKey)
  return !d ? [] : JSON.parse(d) as unknown as DocumentModel[]
}
