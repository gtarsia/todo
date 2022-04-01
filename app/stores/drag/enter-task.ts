import { TaskProps } from 'app/types'
import { swap } from 'app/stores/document'
import { useDragStore, setDragProps } from './store'

export function enterDrag(props: TaskProps) {
  const state = useDragStore.getState()
  if (state.props.index === props.index) {
    return
  }
  if (state.props.task.indent !== props.task.indent) {
    return
  }
  const newIndex = swap(state.props.index, props.index)
  setDragProps({ ...state.props, index: newIndex })
}
