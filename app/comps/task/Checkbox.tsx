import { DragEvent } from 'react'
import cx from 'classnames'
import { toggleChecked } from 'app/stores/document'
import { startDrag, enterDrag, endDrag } from 'app/stores/drag'

export function TaskCheckbox(props: { checked: boolean, index: number }) {
  const uncheckedCls = 'bg-opacity-0 border-2 border-amber-500'
  const checkedCls = 'bg-amber-400 text-white'
  const cls = props.checked ? checkedCls : uncheckedCls
  const onDragStart = (e: DragEvent<HTMLDivElement>) => {
    const img = document.createElement('img')
    img.src = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7'
    e.dataTransfer.setDragImage(img, 0, 0)
    e.dataTransfer.effectAllowed = 'move'
    setTimeout(() => {
      startDrag(props.index)
    })
  }
  return <div role="checkbox"
    aria-checked={props.checked}
    aria-labelledby="task"
    className={cx(
      'checkbox rounded-lg',
      props.checked ? checkedCls : uncheckedCls
    )}
    onClick={() => toggleChecked(props.index)}
    draggable="true"
    onDragStart={onDragStart}
    onDragEnd={endDrag}
  >
    {props.checked && <svg viewBox="-5 0 35 25"
width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd"><path fill="#FFFFFF" d="M21 6.285l-11.16 12.733-6.84-6.018 1.319-1.49 5.341 4.686 9.865-11.196 1.475 1.285z"/></svg>}
  </div>
}
