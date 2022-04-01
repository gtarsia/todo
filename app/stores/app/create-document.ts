import produce from 'immer'
import { useAppStore, AppStore } from './store'
import { newDocument } from './new'

export function createDocument(name: string) {
  useAppStore.setState(produce((state: AppStore) => {
    state.documents.push(newDocument(name))
  }))
}
