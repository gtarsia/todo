import { useDocumentStore } from './store'

export function focus(index: number) {
  const { tasks } = useDocumentStore.getState()
  tasks[index]?.ref?.focus()
}

export function focusPrevious(index: number) {
  focus(index - 1)
}

export function focusNext(index: number) {
  focus(index + 1)
}

export function focusFirst() {
  focus(0)
}
