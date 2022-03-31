import create from 'zustand'
import { TaskModel } from 'app/types'

interface DocumentStore {
  tasks: TaskModel[];
  indexes: Array<number | null>;
}

export const useDocumentStore = create<DocumentStore>(set => ({
  tasks: [{ checked: false, text: 'write here', indent: 0 }],
  indexes: [0],
}))

useDocumentStore.subscribe((state: any) => state.tasks, (tasks) => {
})
