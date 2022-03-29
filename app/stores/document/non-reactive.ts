import { useDocumentStore } from './store'

export function nonReactiveToggleChecked(index: number) {
  const { tasks } = useDocumentStore.getState()
  tasks[index].checked = !tasks[index].checked
}

export function nonReactiveSetTextareaRef(index: number, el: HTMLTextAreaElement) {
  const { tasks } = useDocumentStore.getState()
  tasks[index].ref = el
}

export function nonReactiveSetTaskText(index: number, text: string) {
  const { tasks } = useDocumentStore.getState()
  tasks[index].text = text
}
