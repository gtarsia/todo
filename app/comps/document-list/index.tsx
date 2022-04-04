import { SidebarDocument } from 'app/comps/document'
import { useAppStore } from 'app/stores/app'

export function DocumentList() {
  const { documents, documentId } = useAppStore()
  return <div>
    {documents.map((doc, i) => <SidebarDocument
      doc={doc}
      selected={documentId === doc.id}
      key={i}
    /> )}
  </div>
}
