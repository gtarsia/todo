import create from 'zustand'
import { useDocumentStore } from 'app/stores/document'
import { getFocusedIndexes } from 'app/utils/task'

interface FocusStore {
  focusMode: boolean;
  focusIndexes: boolean[];
}

export const useFocusStore = create<FocusStore>(set => ({
  focusMode: true,
  focusIndexes: [],
}))

export function updateFocusIndexes() {
  const { focusMode } = useFocusStore.getState()
  const { tasks, focusIndex } = useDocumentStore.getState()
  if (!focusMode) {
    return
  }
  let focusIndexes: boolean[] = [];
  if (focusIndex == null) {
    focusIndexes = tasks.map(() => true)
  } else {
    focusIndexes = getFocusedIndexes(tasks, focusIndex)
  }
  useFocusStore.setState({ focusIndexes })
}

useDocumentStore.subscribe(() => {
  updateFocusIndexes()
})

export function setFocusMode(focusMode: boolean) {
  useFocusStore.setState({ focusMode })
  updateFocusIndexes()
}

