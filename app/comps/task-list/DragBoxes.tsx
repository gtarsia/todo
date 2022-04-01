import { TaskModel } from 'app/types'
import { enterIndentDrag, enterDrag, useDragStore } from 'app/stores/drag'

export function DragBoxes(props: { task: TaskModel, index: number }) {
  const { active } = useDragStore()
  const indents = [0, 1, 2, 3, 4]
  return <div
    className="absolute w-full"
    style={{ height: '24px', display: active ? 'block' : 'none' }}
  >
    {indents.map((indent, i) => <div
      className="w-4 absolute h-full"
      style={{ left: indent*30 + 'px', width: '30px' }}
      onDragEnter={(e) => {
        enterIndentDrag(indent)
        enterDrag(props)
      }}
      key={i}
    >
    </div>)}
  </div>
}
