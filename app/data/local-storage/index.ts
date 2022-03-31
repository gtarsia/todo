import { DocumentModel } from 'app/types'
import { AppData } from '../base'
import { documentsKey, selectedDocumentKey } from './keys'

export class AppDataLocalStorage implements AppData {
  async saveDocuments(docs: DocumentModel[]) {
    localStorage.setItem(documentsKey, JSON.stringify(docs))
  }

  async getDocuments(): Promise<DocumentModel[]> {
    const d = localStorage.getItem(documentsKey)
    return !d ? [] : JSON.parse(d) as unknown as DocumentModel[]
  }

  async saveSelectedDocument(documentId: string) {
    localStorage.setItem(selectedDocumentKey, documentId)
  }

  async getSelectedDocument(): Promise<string> {
    return localStorage.getItem(selectedDocumentKey) || ''
  }
}
