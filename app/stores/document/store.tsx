import create from 'zustand'
import { TaskModel } from 'app/types'

interface DocumentStore {
  tasks: TaskModel[];
  indexes: Array<number | null>;
  focusIndex?: number;
}

export const useDocumentStore = create<DocumentStore>(set => ({
  tasks: [],
  indexes: [],
  focusIndex: undefined,
}))

export function setFocusIndex(focusIndex: number) {
  useDocumentStore.setState({ focusIndex })
}
