import { getLastUncheckedSiblingIndex } from './get-last-unchecked-sibling'

function task(indent: number, checked: boolean = false) {
  return { text: '', indent, checked }
}

test('getLastUncheckedSiblingIndex', () => {
  expect(getLastUncheckedSiblingIndex([
    task(2),
    task(3),
    task(2),
    task(2),
    task(2, true),
    task(1),
  ], 0)).toStrictEqual(3)
  expect(getLastUncheckedSiblingIndex([
    task(2),
    task(1),
  ], 0)).toStrictEqual(0)
  expect(getLastUncheckedSiblingIndex([
    task(2),
    task(3),
    task(3, true),
    task(3),
    task(4),
    task(2),
  ], 1)).toStrictEqual(3)
})
