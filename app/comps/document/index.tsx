import cx from 'classnames'
import { DocumentModel } from 'app/types'
import { selectDocument } from 'app/stores/app'
import styles from './index.module.css'

export function SidebarDocument(props: { doc: DocumentModel, selected: boolean }) {
  return <div
    className={cx(
      styles.document,
      'px-4 py-1 hover:bg-zinc-200',
      'rounded-md cursor-pointer mb-2',
      props.selected ? 'selected' : '',
      props.selected ? 'text-gray-700' : ' text-[#7C7C7A]',
      props.selected ? 'bg-[#F5F5F5]' : '',
    )}
    onClick={() => selectDocument(props.doc.id)}
  >
    {props.doc.name}
  </div>
}
