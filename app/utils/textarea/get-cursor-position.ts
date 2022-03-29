
export function getCursorPosition(textarea: HTMLTextAreaElement): number {
  const { selectionDirection, selectionStart, selectionEnd } = textarea
  if (selectionDirection === 'forward') {
    return selectionEnd
  }
  return selectionStart
}
