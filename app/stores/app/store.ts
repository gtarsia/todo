import create, { Mutate, GetState, SetState, StoreApi } from 'zustand'
import { subscribeWithSelector } from 'zustand/middleware'
import { DocumentModel } from 'app/types'
import { appData } from 'app/data'

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
  appData.saveDocuments(docs)
})
