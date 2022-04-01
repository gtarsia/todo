import { TaskModel } from 'app/types'

export interface DocumentData {
  getTasks: (documentId: string) => Promise<TaskModel[]>;
  saveTasks: (documentId: string, tasks: TaskModel[]) => Promise<any>;
}
