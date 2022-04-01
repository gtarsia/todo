import { useDocumentStore } from './store'
import { updateTasks } from './update-tasks'

export function nonReactiveSetTextareaRef(index: number, el: HTMLTextAreaElement) {
  const { tasks } = useDocumentStore.getState()
  tasks[index].ref = el
}

export function nonReactiveSetTaskText(index: number, text: string) {
  const { tasks, indexes } = useDocumentStore.getState()
  tasks[index].text = text
  updateTasks(tasks, indexes)
}
