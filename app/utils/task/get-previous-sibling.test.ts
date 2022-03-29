import { getPreviousSiblingIndex } from './get-previous-sibling'

function task(indent: number) {
  return { text: '', indent, checked: false }
}

test('getPreviousSiblingIndex', () => {
  expect(getPreviousSiblingIndex([
    task(2),
    task(3),
    task(2),
  ], 2)).toStrictEqual(0)
  expect(getPreviousSiblingIndex([
    task(2),
    task(1),
  ], 0)).toStrictEqual(0)
  expect(getPreviousSiblingIndex([
    task(3),
    task(2),
    task(3),
    task(3),
  ], 3)).toStrictEqual(2)
})
