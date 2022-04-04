import create from 'zustand'
import { useDocumentStore } from 'app/stores/document'
import { getFocusedIndexes } from 'app/utils/task'

interface FocusStore {
  focusMode: boolean;
  focusIndexes: boolean[];
  focusIndex?: number;
}

export const useFocusStore = create<FocusStore>(set => ({
  focusMode: true,
  focusIndexes: [],
  focusIndex: undefined,
}))

export function updateFocusIndexes() {
  const { focusMode, focusIndex } = useFocusStore.getState()
  const { tasks } = useDocumentStore.getState()
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

export function setFocusedIndex(focusIndex: number) {
  useFocusStore.setState({ focusIndex })
  updateFocusIndexes()
}

