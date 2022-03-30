// import { useEffect } from 'react'
// import { hydrateTodo, setDocument } from 'src/store'
// import { DocumentSelector } from './DocumentSelector'
import { TaskList } from 'app/comps/task-list'

export function TodoApp() {
  return <div className="flex h-full pt-4 h-full">
    <div className="w-52">
    </div>
    <div className="grow">
      <TaskList />
    </div>
  </div>
}
