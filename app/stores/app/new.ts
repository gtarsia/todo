import { v4 as uuidv4 } from 'uuid'
import { DocumentModel } from 'app/types'

export function newDocument(name: string): DocumentModel {
  const id = uuidv4()
  return { id, name }
}
