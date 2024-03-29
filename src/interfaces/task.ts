export interface task {
  id: string
  task: string
  state: 'not stated' | 'in progress' | 'done' | 'archived'
}