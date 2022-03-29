import { getCursorPosition } from './get-cursor-position'

export function isCursorOnFirstLine(textarea: HTMLTextAreaElement): boolean {
  const newlinePos = textarea.value.indexOf('\n')
  const cursorPos = getCursorPosition(textarea)
  return newlinePos === -1 || newlinePos >= cursorPos
}

