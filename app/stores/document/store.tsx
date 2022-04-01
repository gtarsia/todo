import create from 'zustand'
import { TaskModel } from 'app/types'

interface DocumentStore {
  tasks: TaskModel[];
  indexes: Array<number | null>;
}

export const useDocumentStore = create<DocumentStore>(set => ({
  tasks: [],
  indexes: [],
}))
