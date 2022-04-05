import { TaskModel } from 'app/types'
import { documentData } from 'app/data'
import { useAppStore } from 'app/stores/app'
import { useDocumentStore } from './store'

export function updateTasks(tasks: TaskModel[], indexes: Array<number | null>) {
  let { focusIndex, tasks: oldTasks } = useDocumentStore.getState()
  if (focusIndex !== undefined) {
    const oldTask = oldTasks[focusIndex]
    const found = tasks.findIndex(t => t === oldTask)
    if (found > -1) {
      focusIndex = found
    }
  }
  const { documentId } = useAppStore.getState()
  if (!documentId) {
    return
  }
  useDocumentStore.setState({ tasks, indexes, focusIndex })
  if (tasks.length === 0) {
    return
  }
  documentData.saveTasks(documentId, tasks)
}
