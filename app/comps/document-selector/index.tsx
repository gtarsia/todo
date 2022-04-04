import cx from 'classnames'
import { DocumentList } from 'app/comps/document-list'
import { createDocument as _createDocument } from 'app/stores/app'
import styles from './index.module.css'

export function DocumentSelector() {
  function createDocument() {
    const name = prompt('What\'s the name of the new task?')
    if (name) {
      _createDocument(name)
    }
  }
  return <div className="bg-white p-4 border-r h-full drop-shadow">
    <div className="flex">
      <div className={cx(
        styles.documentListTitle,
        'text-gray-900 mb-6 grow'
      )}>
        Documents
      </div>
      <button className="icon-button"
        onClick={createDocument}
      >
        <span className="material-icons-outlined cursor-pointer text-gray-600">
          note_add
        </span>
      </button>
    </div>
    <DocumentList />
  </div>
}
