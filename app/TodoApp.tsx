// import { useEffect } from 'react'
// import { hydrateTodo, setDocument } from 'src/store'
import { DocumentSelector } from 'app/comps/document-selector'
import { TaskList } from 'app/comps/task-list'

export function TodoApp() {
  return <div className="flex h-full h-full">
    <div className="w-64">
      <DocumentSelector />
    </div>
    <div className="grow">
      <TaskList />
    </div>
  </div>
}
