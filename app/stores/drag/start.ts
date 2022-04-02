import { TaskProps } from 'app/types'
import { useDocumentStore } from 'app/stores/document'
import { setDragProps, setDragActive } from './store'

export function startDrag(index: number) {
  const { tasks } = useDocumentStore.getState()
  setDragProps({ task: tasks[index], index })
  setDragActive(true)
}
