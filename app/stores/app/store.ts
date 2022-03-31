import create, { Mutate, GetState, SetState, StoreApi } from 'zustand'
import { subscribeWithSelector } from 'zustand/middleware'
import { DocumentModel } from 'app/types'
import { saveDocuments } from 'app/data/document'

export interface AppStore {
  documents: DocumentModel[];
  documentId: string;
}

const init: AppStore = ({
  documents: [],
  documentId: '',
})

export const useAppStore = create<
  AppStore,
  SetState<AppStore>,
  GetState<AppStore>,
  Mutate<StoreApi<AppStore>, [["zustand/subscribeWithSelector", never]]>
>(subscribeWithSelector(() => init))

useAppStore.subscribe((state) => state.documents, (docs: DocumentModel[]) => {
  saveDocuments(docs)
})
