import { useEffect } from 'react'
import cx from 'classnames'
import { Task } from 'app/comps/task'
import { useAppStore, resetDocument }  from 'app/stores/app'
import { useDocumentStore, focusFirst } from 'app/stores/document'
import { useFocusStore, toggleFocusMode } from 'app/stores/focus'
import { DragBoxes } from './DragBoxes'
import { TaskModel } from 'app/types'

export function TaskList() {
  const indexes = useDocumentStore(state => state.indexes)
  const tasks = useDocumentStore(state => state.tasks)
  const { focusIndexes, focusMode } = useFocusStore()
  const doc = useAppStore(state => state.document())
  const list = indexes.map((index, j) => {
    if (index == null) {
      return null
    }
    const task = tasks[index]
    const height: number = 33 * index
    const top = `${height}px`
    const focus = !focusMode || focusIndexes[index]
    return <div key={j}>
      <div
        className={cx("task relative", focus ? '' : 'opacity-5')}
        style={{ top }}
      >
        <Task task={task} index={index} />
        <DragBoxes task={task} index={index} />
      </div>
    </div>
  })
  return <div
    className="relative left-0 top-0 w-full h-full"
    onKeyDown={(e) => {
      console.log(e)
      if (e.key === 'F' && e.ctrlKey) {
        toggleFocusMode()
      }
    }}
  >
    <div
      className="absolute w-full text-center sm:hidden"
      style={{
        lineHeight: '45px',
        zIndex: 2,
        background: 'linear-gradient(rgb(241, 245, 249), rgb(241 245 249), rgb(241 245 249 / 0%))',
        height: '64px',
      }}
    >
      <span
        className="material-icons-outlined cursor-pointer text-gray-600 p-3 absolute left-0"
        onClick={resetDocument}
      >
        arrow_back
      </span>
      { doc && doc.name }
    </div>
    <div className={cx(
      'absolute w-full h-full overflow-hidden overflow-y-scroll',
      'p-8 pt-16 sm:pt-8',
    )}>
      {list}
    </div>
  </div>
}
