import create from 'zustand'
import { TaskModel } from 'app/types'

interface DocumentStore {
  tasks: TaskModel[];
  indexes: Array<number | null>;
  id: string;
}

export const useDocumentStore = create<DocumentStore>(set => ({
  tasks: [{ checked: true, text: 'this is a task', indent: 0 }],
  indexes: [0],
  id: '',
}))
