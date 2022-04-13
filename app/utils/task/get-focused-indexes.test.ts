import { getFocusedIndexes } from './get-focused-indexes'

function task(indent: number) {
  return { text: '', indent, checked: false }
}

test('getFocusedIndexes', () => {
  expect(getFocusedIndexes([
    task(1), task(1), task(2), task(2), task(3), task(4), task(3),
    task(4), task(3),
  ], 6)).toStrictEqual([
    false,   true,    false,   true,    true,    false,  true,
    true,    true,
  ])
  expect(getFocusedIndexes([
    task(1), task(1), task(2), task(2), task(3), task(3),
    task(4), task(5), task(5), task(4), task(4), task(3)
  ], 2)).toStrictEqual([
    false,   true,    true,    true,    false,   false,
    false,   false,   false,   false,   false,   false,
  ])
})
