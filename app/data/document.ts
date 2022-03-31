import { DocumentModel } from 'app/types'
import {
  getDocuments as _getDocuments,
  saveDocuments as _saveDocuments,
} from './local-storage'

export function saveDocuments(docs: DocumentModel[]) {
  _saveDocuments(docs)
}

export function getDocuments(): DocumentModel[] {
  return _getDocuments()
}
