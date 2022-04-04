import cx from 'classnames'
import { DocumentModel } from 'app/types'
import {
  selectDocument,
  deleteDocument as _deleteDocument,
  renameDocument as _renameDocument,
  swapUp, swapDown,
} from 'app/stores/app'
import styles from './index.module.css'

export function SidebarDocument(props: { doc: DocumentModel, selected: boolean }) {

  function deleteDocument() {
    if (confirm(`Do you confirm deleting document ${props.doc.name}?`)) {
      _deleteDocument(props.doc.id)
    }
  }
  function renameDocument() {
    const ans = prompt('Enter new name for the document', props.doc.name)
    if (ans) {
      _renameDocument(props.doc.id, ans)
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
    <button className="icon-button ml-0.5" onClick={() => swapUp(props.doc.id)}>
      <span className="material-icons-outlined leading-6">
        arrow_upward
      </span>
    </button>
    <button className="icon-button ml-0.5" onClick={() => swapDown(props.doc.id)}>
      <span className="material-icons-outlined leading-6">
        arrow_downward
      </span>
    </button>
    <button className="icon-button ml-0.5" onClick={renameDocument}>
      <span className="material-icons-outlined leading-6">
        edit
      </span>
    </button>
    <button className="icon-button ml-0.5 ml-0.5" onClick={deleteDocument}>
      <span className="material-icons-outlined leading-6">
        delete
      </span>
    </button>
  </div>
}
