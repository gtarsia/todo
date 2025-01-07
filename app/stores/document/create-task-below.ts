import produce from 'immer'
import { getNewIndexes } from 'app/utils/array'
import { useDocumentStore } from './store'
import { updateTasks } from './update-tasks'
import { focus } from './focus'
import { TaskModel } from 'app/types'
import { WritableDraft } from 'immer/dist/internal'

export function createTaskBelow(index: number) {
  const { tasks, indexes } = useDocumentStore.getState()
  const oldTasks = tasks.slice()
  const { indent } = tasks[index]
  let newIndex = index + 1
  for (let i = newIndex; newIndex < tasks.length; i += 1) {
    let task = tasks[i]
    if (task.indent > indent) {
      newIndex = i + 1
    } else {
      break
    }
  }
  const newTasks = produce(tasks, (draft) => {
    const newTask: WritableDraft<TaskModel> = { checked: false, text: '', indent, type: tasks[index]?.type || 'task' }
    draft.splice(newIndex, 0, newTask)
  })
  const newIndexes = getNewIndexes(indexes, oldTasks, newTasks)
  newIndexes.push(newIndex)
  updateTasks(newTasks, newIndexes)
  setTimeout(() => {
    focus(newIndex)
  })
}
