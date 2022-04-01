import { AppData, DocumentData } from './base'
import { AppDataLocalStorage, DocumentDataLocalStorage } from './local-storage'

export const appData: AppData = new AppDataLocalStorage()
export const documentData: DocumentData = new DocumentDataLocalStorage()

