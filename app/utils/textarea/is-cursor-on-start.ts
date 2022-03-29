import { getCursorPosition } from './get-cursor-position'

export function isCursorOnStart(textarea: HTMLTextAreaElement): boolean {
  return getCursorPosition(textarea) === 0
}

