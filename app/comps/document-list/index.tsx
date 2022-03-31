import { useEffect } from 'react'
import cx from 'classnames'
import { SidebarDocument } from 'app/comps/document'
import {
  useAppStore,
  createDocument as _createDocument,
  hydrateDocuments,
} from 'app/stores/app'
import styles from './index.module.css'

export function DocumentList() {
  useEffect(() => {
    hydrateDocuments()
  }, [])
  const { documents, documentId } = useAppStore()
  function createDocument() {
    const name = prompt('What\'s the name of the new task?')
    if (name) {
      _createDocument(name)
    }
  }
  return <div>
    <div className="flex">
      <div className={cx(
        styles.documentListTitle,
        'text-gray-900 mb-6 grow'
      )}>
        Documents
      </div>
      <button
        className={cx(
          styles.documentListAddButton,
          'hover:bg-gray-200/50 -mt-2 h-10 p-2 rounded-full',
        )}
        onClick={createDocument}
      >
        <span className="material-icons-outlined cursor-pointer text-gray-600">
          note_add
        </span>
      </button>
    </div>
    {documents.map((doc, i) => <SidebarDocument
      doc={doc}
      selected={documentId === doc.id}
      key={i}
    /> )}
  </div>
}
