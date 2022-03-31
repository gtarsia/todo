import { useAppStore } from './store'
import { appData } from 'app/data'

export async function hydrateDocuments() {
  const [documents, documentId] = await Promise.all([
    appData.getDocuments(),
    appData.getSelectedDocument(),
  ])
  useAppStore.setState({ documents, documentId })
}
