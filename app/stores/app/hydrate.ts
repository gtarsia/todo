import { useAppStore } from './store'
import { getDocuments } from 'app/data/document'

export function hydrateDocuments() {
  useAppStore.setState(state => {
    const documents = getDocuments()
    return { documents }
  })
}
