import { useCallback, useEffect, useRef } from 'react'
import debounce from 'lodash/debounce'
import { TaskModel } from 'app/types'
import {
  getCursorPosition, isCursorOnStart, isSelecting,
  isCursorOnFirstLine, isCursorOnLastLine,
} from 'app/utils/textarea'
import { createTaskBelow } from 'app/stores/document'
import {
  nonReactiveSetTaskText, nonReactiveSetTextareaRef, focusNext, focusPrevious,
  deleteTask, swapPrevious, swapNext, toggleChecked,
  increaseIndent, decreaseIndent,
} from 'app/stores/document'

export function TaskText(props: { task: TaskModel, index: number }) {
  const textareaRef = useRef<HTMLTextAreaElement>(null)
  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.value = props.task.text
    }
  }, [props.task])
  useEffect(() => {
    if (!textareaRef?.current) {
      return
    }
    const textarea: HTMLTextAreaElement = textareaRef.current
    nonReactiveSetTextareaRef(props.index, textarea)
    function handleKeypress(e: KeyboardEvent) {
      if (e.key === 'Enter') {
        if (e.ctrlKey) {
          toggleChecked(props.index)
          e.preventDefault()
        } else if (!e.shiftKey) {
          createTaskBelow(props.index)
          e.preventDefault()
        }
      }
    }
    function handleKeydown(e: KeyboardEvent) {
      if (e.key === 'ArrowUp') {
        if (e.ctrlKey) {
          swapPrevious(props.index)
        } else if (isCursorOnFirstLine(textarea)) {
          focusPrevious(props.index)
          e.preventDefault()
        }
      }
      if (e.key === 'ArrowDown') {
        if (e.ctrlKey) {
          swapNext(props.index)
        } else if (isCursorOnLastLine(textarea)) {
          focusNext(props.index)
          e.preventDefault()
        }
      }
      if (e.key === 'Backspace') {
        if (isCursorOnStart(textarea) && !isSelecting(textarea)) {
          deleteTask(props.index)
          e.preventDefault()
        }
      }
      if (e.key === 'Tab') {
        if (e.shiftKey) {
          decreaseIndent(props.index)
        } else {
          increaseIndent(props.index)
        }
        e.preventDefault()
      }
    }
    // function handlePaste(e: ClipboardEvent) {
    //   const text = e?.clipboardData?.getData('text')
    //   if (text) {
    //     const lines = toLines(text)
    //     const [first, ...rest] = lines
    //     if (first) {
    //       setText(text + first)
    //       // props.onChange(text + first)
    //     }
    //     if (rest.length > 0) {
    //       // props.onCreateLines(rest)
    //     }
    //   }
    //   e.preventDefault()
    // }
    textarea.addEventListener('keypress', handleKeypress)
    textarea.addEventListener('keydown', handleKeydown)
    // textarea.addEventListener('paste', handlePaste)
    return () => {
      textarea.removeEventListener('keypress', handleKeypress)
      textarea.removeEventListener('keydown', handleKeydown)
      // textarea.removeEventListener('paste', handlePaste)
    }
  }, [props.index])
  const setText = useCallback(debounce((text: string) => {
    props.task.text = text
  }, 100), [])
  const defaultCls = `resize-none w-full text-lg
    outline-none bg-white bg-opacity-0
    px-2 pb-1 relative top-1 rounded-lg
    antialiased text-gray-800 h-8`
  return <textarea
    className={defaultCls}
    ref={textareaRef}
    onChange={(e) => {
      setText(e.target.value)
    }}
  />
}