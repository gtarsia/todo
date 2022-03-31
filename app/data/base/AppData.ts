import { DocumentModel } from 'app/types'

export interface AppData {
  saveDocuments: (docs: DocumentModel[]) => Promise<any>;
  getDocuments: () => Promise<DocumentModel[]>;
  saveSelectedDocument: (documentId: string) => Promise<any>;
  getSelectedDocument: () => Promise<string>;
}
