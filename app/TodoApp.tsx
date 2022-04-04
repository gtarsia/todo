import cx from 'classnames'
import { DocumentSelector } from 'app/comps/document-selector'
import { TaskList } from 'app/comps/task-list'
import { useAppStore } from 'app/stores/app'

export function TodoApp() {
  const { documentId } = useAppStore()
  return <div className="flex h-full">
    <div className={cx(
      'w-full sm:w-64 sm:block',
      documentId ? 'hidden' : 'block',
    )}
    >
      <DocumentSelector />
    </div>
    {documentId && <div className={cx(
      'sm:grow w-full',
    )}>
      <TaskList />
    </div>}
  </div>
}
