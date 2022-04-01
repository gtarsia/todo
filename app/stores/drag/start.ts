import { TaskProps } from 'app/types'
import { setDragProps, setDragActive } from './store'

export function startDrag(props: TaskProps) {
  setDragProps(props)
  setDragActive(true)
}
