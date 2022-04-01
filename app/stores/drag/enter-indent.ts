import { useDragStore, setDragProps } from './store'
import { setIndent } from 'app/stores/document'

export function enterIndentDrag(indent: number) {
  const state = useDragStore.getState()
  const task = setIndent(state.props.index, indent)
  setDragProps({ ...state.props, task })
}
