import { getNewIndexes } from './get-new-indexes'

test('getNewIndexes', () => {
  expect(getNewIndexes(
    [0, 1, 2],
    ['a', 'b', 'c'],
    ['a', 'c'],
  )).toStrictEqual([0, null, 1])
  expect(getNewIndexes(
    [0, 2, 1],
    ['a', 'b', 'c'],
    ['a', 'c'],
  )).toStrictEqual([0, 1, null])
  expect(getNewIndexes(
    [0, 2, 1],
    ['a', 'b', 'c'],
    ['a', 'c', 'b'],
  )).toStrictEqual([0, 1, 2])
})
