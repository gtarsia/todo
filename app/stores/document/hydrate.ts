import { documentData } from 'app/data'
import { useDocumentStore } from 'app/stores/document'
import { focusFirst } from './focus'

export async function hydrateTasks(documentId: string) {
  let tasks = await documentData.getTasks(documentId)
  if (tasks.length === 0) {
    tasks.push({ checked: false, text: 'Write here...', indent: 0, type: 'task' })
  }
  const indexes = tasks.map((t, i) => i)
  useDocumentStore.setState({ tasks, indexes, focusIndex: 0 })
  setTimeout(() => {
    focusFirst()
  })
}
