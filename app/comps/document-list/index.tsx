import { useState } from 'react'
import cx from 'classnames'
import { SidebarDocument } from 'app/comps/document'
import styles from './index.module.css'

export function DocumentList() {
  const [docs, setDocs] = useState([
    { name: 'Tasks', id: 'qwe', selected: true },
    { name: 'Office', id: 'qwe', selected: false },
    { name: 'Work', id: 'qwe', selected: false },
  ])
  function createTask() {
    const name = prompt('What\'s the name of the new task?')
    if (name) {
      setDocs([...docs, { name, id: 'qwe', selected: false }])
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
        onClick={createTask}
      >
        <span className="material-icons-outlined cursor-pointer text-gray-600">
          note_add
        </span>
      </button>
    </div>
    {docs.map((doc, i) => <SidebarDocument doc={doc} key={i} /> )}
  </div>
}
