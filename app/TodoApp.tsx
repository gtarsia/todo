import { useEffect } from 'react'
import cx from 'classnames'
import { DocumentSelector } from 'app/comps/document-selector'
import { TaskList } from 'app/comps/task-list'
import { useAppStore, hydrateDocuments } from 'app/stores/app'

export function TodoApp() {
  const { documentId } = useAppStore()
  useEffect(() => {
    hydrateDocuments()
  }, [])
  return <div className="flex h-full">
    <div className={cx(
      'w-full sm:w-96 sm:block',
      documentId ? 'hidden' : 'block',
    )}
    >
      <DocumentSelector />
    </div>
    {documentId && <div className="w-full sm:grow">
      <TaskList />
    </div>}
  </div>
}
