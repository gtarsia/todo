import produce from 'immer'
import { v4 as uuidv4 } from 'uuid'
import { useAppStore, AppStore } from './store'

export function createDocument(name: string) {
  const id = uuidv4()
  const doc = { id, name }
  useAppStore.setState(produce((state: AppStore) => {
    state.documents.push(doc)
  }))
}
