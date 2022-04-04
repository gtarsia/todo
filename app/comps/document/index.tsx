import cx from 'classnames'
import { DocumentModel } from 'app/types'
import {
  selectDocument,
  deleteDocument as _deleteDocument,
  swapUp, swapDown,
} from 'app/stores/app'
import styles from './index.module.css'

export function SidebarDocument(props: { doc: DocumentModel, selected: boolean }) {

  function deleteDocument() {
    if (confirm(`Do you confirm deleting document ${props.doc.name}?`)) {
      _deleteDocument(props.doc.id)
    }
  }
  return <div className="flex">
    <div
      className={cx(
        styles.document,
        'grow px-4 py-1 mb-2 hover:bg-zinc-200',
        'rounded-md cursor-pointer',
        props.selected ? 'selected' : '',
        props.selected ? 'text-gray-700' : ' text-[#7C7C7A]',
        props.selected ? 'bg-[#F5F5F5]' : '',
      )}
      onClick={() => selectDocument(props.doc.id)}
    >
      {props.doc.name}
    </div>
    <button onClick={() => swapUp(props.doc.id)}>
      <span className="material-icons-outlined cursor-pointer text-gray-600 leading-8 mr-2">
        arrow_upward
      </span>
    </button>
    <button onClick={() => swapDown(props.doc.id)}>
      <span className="material-icons-outlined cursor-pointer text-gray-600 leading-8 mr-2">
        arrow_downward
      </span>
    </button>
    <button onClick={deleteDocument}>
      <span className="material-icons-outlined cursor-pointer text-gray-600 leading-8">
        delete
      </span>
    </button>
  </div>
}
