import { BacklogItem, BacklogModel } from "../models/backlog-model"
import { BacklogView } from "../views/backlog-view"

export class BacklogController {
  model: BacklogModel
  view: BacklogView
  constructor(model: BacklogModel, view: BacklogView) {
    this.model = model
    this.view = view

    this.backlogListChanged(this.model.backlogs)

    this.view.bindAddBacklog(this.handleAddBacklog)
    this.view.bindDeleteBacklog(this.handleDelete)
    this.view.bindEditBacklog(this.handleEditBacklog)
    this.view.bindToggleBacklog(this.handleToggleBacklog)
  }

  backlogListChanged = (list: BacklogItem[]) => {
    this.view.renderBacklogItems(list)
  }

  handleAddBacklog = (item: BacklogItem) => {
    this.model.addBacklog(item)
  }
  handleEditBacklog = (backlogId: number, task: string, completed: boolean) => {
    this.model.editBacklog(backlogId, task, completed)
  }
  handleToggleBacklog = (id: number) => {
    this.handleToggleBacklog(id)
  }
  handleDelete = (id: number) => {
    this.handleDelete(id)
  }
}
