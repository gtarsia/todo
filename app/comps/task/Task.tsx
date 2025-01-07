import { memo, DragEvent } from 'react'
import { TaskModel, TaskProps } from 'app/types'
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
  return <div
    className="task flex absolute w-full"
    style={{ left }}
  >
    <TaskCheckbox checked={props.task.checked} index={props.index} />
    <div className="ml-2">{props.task.type === 'task' ? '🚩' : '💬'}</div>
    <div className="ml-0.5 grow -m-2">
      <TaskText task={props.task} index={props.index} />
    </div>
  </div>
})
