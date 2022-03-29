import { getTaskRange } from './get-task-range'

function task(indent: number) {
  return { text: '', indent, checked: false }
}

test('getTaskRange', () => {
  expect(getTaskRange([
    task(2),
    task(2),
    task(2),
  ], 0)).toStrictEqual({ start: 0, count: 1 })
  expect(getTaskRange([
    task(1),
    task(2),
  ], 0)).toStrictEqual({ start: 0, count: 2 })
  expect(getTaskRange([
    task(2),
    task(1),
    task(2),
    task(3),
    task(0),
  ], 1)).toStrictEqual({ start: 1, count: 3 })
  expect(getTaskRange([
    task(1),
    task(2),
    task(3),
  ], 2)).toStrictEqual({ start: 2, count: 1 })
})
