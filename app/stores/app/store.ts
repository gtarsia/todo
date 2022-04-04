import create from 'zustand'
import { DocumentModel } from 'app/types'
import { appData } from 'app/data'

export interface AppStore {
  documents: DocumentModel[];
  documentId: string;
  document: () => DocumentModel | undefined;
}

export const useAppStore = create<AppStore>((set, get) => ({
  documents: [],
  documentId: '',
  document: () => {
    const { documents, documentId } = get()
    return documents.filter(doc => doc.id === documentId)[0]
  }
}))

export function setDocuments(documents: DocumentModel[]) {
  useAppStore.setState({ documents })
  appData.saveDocuments(documents)
}
