import { getCursorPosition } from './get-cursor-position'

export function isCursorOnLastLine(textarea: HTMLTextAreaElement): boolean {
  const newlinePos = textarea.value.lastIndexOf('\n')
  const cursorPos = getCursorPosition(textarea)
  return newlinePos === -1 || newlinePos < cursorPos
}
