import produce from 'immer'
import { TaskModel } from 'app/types'
import {
  getLastUncheckedSiblingIndex, getTaskRange, swapRanges,
} from 'app/utils/task'
import { getNewIndexes } from 'app/utils/array'
import { updateTasks } from './update-tasks'
import { useDocumentStore } from './store'
import { focus } from './focus'

function _toggleChecked(index: number) {
  const state = useDocumentStore.getState()
  const tasks = produce(state.tasks, draft => {
    draft[index].checked = !draft[index].checked
  })
  useDocumentStore.setState({ tasks })
}

export function toggleChecked(index: number) {
  _toggleChecked(index)
  const { tasks, indexes } = useDocumentStore.getState()
  const { checked } = tasks[index]
  const oldTasks = tasks.slice()
  const newTasks = tasks.slice()
  let newIndexes = indexes
  if (checked) {
    const siblingIndex = getLastUncheckedSiblingIndex(newTasks, index)
    const taskRange = getTaskRange(newTasks, index)
    const siblingRange = getTaskRange(newTasks, siblingIndex)
    newTasks.splice(siblingRange.start + siblingRange.count, 0,
      ...tasks.slice(taskRange.start, taskRange.start + taskRange.count))
    newTasks.splice(index, taskRange.count)
    newIndexes = getNewIndexes(indexes, oldTasks, newTasks)
  }
  updateTasks(newTasks, newIndexes)
  setTimeout(() => {
    focus(index)
  })
}

export function increaseIndent(index: number) {
  const { tasks, indexes } = useDocumentStore.getState()
  const newTasks = produce(tasks, draft => { draft[index].indent += 1 })
  updateTasks(newTasks, indexes)
}

export function decreaseIndent(index: number) {
  const { tasks, indexes } = useDocumentStore.getState()
  if (tasks[index].indent > 0) {
    const newTasks = produce(tasks, draft => { draft[index].indent -= 1 })
    updateTasks(newTasks, indexes)
  }
}

export function setIndent(index: number, indent: number): TaskModel {
  const { tasks, indexes } = useDocumentStore.getState()
  const newTasks = produce(tasks, draft => { draft[index].indent = indent })
  updateTasks(newTasks, indexes)
  return newTasks[index]
}

export function toggleType(index: number) {
  const state = useDocumentStore.getState()
  const tasks = produce(state.tasks, draft => {
    draft[index].type = draft[index].type === 'task' ? 'discuss' : 'task'
  })
  useDocumentStore.setState({ tasks })
}
