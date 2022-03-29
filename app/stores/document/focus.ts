import { useDocumentStore } from './store'

export function focusPrevious(index: number) {
  const { tasks } = useDocumentStore.getState()
  tasks[index - 1]?.ref?.focus()
}

export function focusNext(index: number) {
  const { tasks } = useDocumentStore.getState()
  const task = tasks[index + 1]
  task?.ref?.focus()
}

export function focusFirst() {
  const { tasks } = useDocumentStore.getState()
  tasks[0]?.ref?.focus()
}
