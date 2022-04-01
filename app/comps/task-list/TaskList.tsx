import { useEffect } from 'react'
import { Task } from 'app/comps/task'
import {
  useDocumentStore, focusFirst,
} from 'app/stores/document'
import { TaskModel } from 'app/types'

export function TaskList() {
  const indexes = useDocumentStore(state => state.indexes)
  const tasks = useDocumentStore(state => state.tasks)
  return <div className="p-5"><div>
    <div className="relative">
      {indexes.map((i, j) => i != null &&
        <Task task={tasks[i]} index={i} key={j} />)}
    </div>
  </div></div>
}
