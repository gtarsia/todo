
export interface TaskModel {
  checked: boolean;
  text: string;
  indent: number;
  ref?: HTMLTextAreaElement;
}

export interface Range {
  start: number;
  count: number;
}

export interface DocumentModel {
  id: string;
  name: string;
}
