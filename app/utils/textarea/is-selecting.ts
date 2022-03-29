
export function isSelecting(textarea: HTMLTextAreaElement): boolean {
  const { selectionStart, selectionEnd } = textarea
  return selectionStart !== selectionEnd
}

