import { TaskModel } from 'app/types'
import { documentData } from 'app/data'
import { useAppStore } from 'app/stores/app'
import { useDocumentStore } from './store'

export function updateTasks(tasks: TaskModel[], indexes: Array<number | null>) {
  const { documentId } = useAppStore.getState()
  if (!documentId) {
    return
  }
  useDocumentStore.setState({ tasks, indexes })
  if (tasks.length === 0) {
    return
  }
  documentData.saveTasks(documentId, tasks)
}
