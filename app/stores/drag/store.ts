import create from 'zustand'
import { TaskProps } from 'app/types'

interface DragStore {
  props: TaskProps;
  active: boolean;
}

export const useDragStore = create<DragStore>(set => ({
  props: {
    task: { text: '', checked: false, indent: 0, type: 'task' },
    index: -1,
  },
  active: false,
}))

export function setDragProps(props: TaskProps) {
  // console.log('setDragDrops: ', props.task)
  useDragStore.setState({ props })
}

export function setDragActive(active: boolean) {
  useDragStore.setState({ active })
}
