export interface BacklogItem {
  id: number
  task: string
  completed: boolean
}

export class BacklogModel {
  backlogs: BacklogItem[] = []
  constructor() {
    this.backlogs = [
      { id: 1, task: "go out with the dog", completed: false },
      { id: 2, task: "done homework", completed: true },
      { id: 3, task: "go out for a run", completed: true },
      { id: 4, task: "cook some food", completed: false },
    ]
  }

  bindBacklogListChanged(fn: any) {
    console.log("fn in model")
  }

  addBacklog(taskTitle: string) {
    const backlog: BacklogItem = {
      id: this.backlogs.length + 1,
      task: taskTitle,
      completed: false,
    }
    this.backlogs.push(backlog)
    return this.backlogs
  }

  editBacklog(
    backlogId: number,
    task: string = "",
    completed: boolean = false
  ) {
    this.backlogs = this.backlogs.map(todo =>
      todo.id === backlogId ? { ...todo, task, completed } : todo
    )
    return this.backlogs
  }

  toggleBacklog(backlogId: number) {
    this.backlogs = this.backlogs.map(todo =>
      todo.id === backlogId ? { ...todo, completed: !todo.completed } : todo
    )
    return this.backlogs
  }
  removeBacklog(backlogId: number) {
    this.backlogs = this.backlogs.filter(todo => todo.id !== backlogId)
    return this.backlogs
  }

  get allBacklogs() {
    return this.backlogs
  }
  get size() {
    return this.backlogs.length
  }
  findBacklog(backlogId: number) {
    return this.backlogs.find(todo => todo.id === backlogId)
  }
}
