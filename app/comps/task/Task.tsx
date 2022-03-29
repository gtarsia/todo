import { memo } from 'react'
import { TaskModel } from 'app/types'
import { TaskText } from 'app/comps/task-text'
import { TaskCheckbox } from './Checkbox'

export const Task = memo(function Task(props: { task: TaskModel, index: number }) {
  const height: number = 30 * props.index
  const margin = 20
  const top = `${height + margin}px`
  const left = `${props.task.indent * 30 + 20}px`
  return <div className="task flex absolute w-full" style={{ top, left }}>
    <TaskCheckbox checked={props.task.checked} />
    <div className="ml-1 grow -m-2">
      <TaskText task={props.task} index={props.index} />
    </div>
  </div>
})
