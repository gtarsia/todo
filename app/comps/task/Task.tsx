import { memo, DragEvent } from 'react'
import { TaskModel, TaskProps } from 'app/types'
import { startDrag, enterDrag, endDrag } from 'app/stores/drag'
import { TaskText } from 'app/comps/task-text'
import { TaskCheckbox } from './Checkbox'

function parse(d: string): TaskProps {
  return JSON.parse(d) as TaskProps
}

function stringify(props: TaskProps): string {
  props = { ...props, task: { ...props.task, ref: undefined } }
  return JSON.stringify(props)
}

export const Task = memo(function Task(props: TaskProps) {
  const left = `${props.task.indent * 30}px`
  const onDragStart = (e: DragEvent<HTMLDivElement>) => {
    const img = document.createElement('img')
    img.src = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7'
    e.dataTransfer.setDragImage(img, 0, 0)
    e.dataTransfer.effectAllowed = 'move'
    setTimeout(() => {
      startDrag(props)
    })
  }
  return <div
    className="task flex absolute w-full"
    style={{ left }}
    draggable="true"
    onDragStart={onDragStart}
    onDragEnd={endDrag}
  >
    <TaskCheckbox checked={props.task.checked} index={props.index} />
    <div className="ml-1 grow -m-2">
      <TaskText task={props.task} index={props.index} />
    </div>
  </div>
})
