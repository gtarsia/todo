import cx from 'classnames'
import { DocumentModel } from 'app/types'
import styles from './index.module.css'

export function SidebarDocument(props: { doc: DocumentModel }) {
  return <div
    className={cx(
      styles.document,
      'px-4 py-1 hover:bg-zinc-200',
      'rounded-md cursor-pointer mb-2',
      props.doc.selected ? 'selected' : '',
      props.doc.selected ? 'text-gray-700' : ' text-[#7C7C7A]',
      props.doc.selected ? 'bg-[#F5F5F5]' : '',
    )}
  >
    {props.doc.name}
  </div>
}
