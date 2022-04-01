import omit from 'lodash/omit'
import { TaskModel } from 'app/types'
import { DocumentData } from '../base'
import { tasksKey } from './keys'

export class DocumentDataLocalStorage implements DocumentData {
  async getTasks(documentId: string): Promise<TaskModel[]> {
    const d = localStorage.getItem(tasksKey(documentId))
    return !d ? [] : JSON.parse(d) as unknown as TaskModel[]
  }

  async saveTasks(documentId: string, tasks: TaskModel[]) {
    tasks = tasks.map(t => omit(t, 'ref'))
    localStorage.setItem(tasksKey(documentId), JSON.stringify(tasks))
  }
}
