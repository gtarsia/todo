import { useEffect } from 'react'
import { Task } from 'app/comps/task'
import {
  useDocumentStore, focusFirst,
} from 'app/stores/document'
import { DragBoxes } from './DragBoxes'
import { TaskModel } from 'app/types'

export function TaskList() {
  const indexes = useDocumentStore(state => state.indexes)
  const tasks = useDocumentStore(state => state.tasks)

  // console.log('tasks: ', tasks, 'indexes: ', indexes)

  // const left = `${props.task.indent * 30}px`
  return <div className="m-5 w-full h-full relative">
    {indexes.map((index, j) => {
      if (index == null) {
        return null
      }
      const task = tasks[index]
      const height: number = 33 * index
      const top = `${height}px`
      return <div key={j} className="absolute w-full task" style={{ top }}>
        <Task task={task} index={index} />
        <DragBoxes task={task} index={index} />
      </div>
    })}
  </div>
}
