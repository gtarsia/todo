import { appData } from 'app/data'
import { hydrateTasks } from 'app/stores/document'
import { useAppStore } from './store'

export async function hydrateDocuments() {
  const [documents, documentId] = await Promise.all([
    appData.getDocuments(),
    appData.getSelectedDocument(),
  ])
  useAppStore.setState({ documents, documentId })
  hydrateTasks(documentId)
}
