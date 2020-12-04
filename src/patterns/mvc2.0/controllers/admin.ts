import { AdminView } from "../views/admin-view"

export class AdminController {
  parentElement: HTMLDivElement
  adminView: AdminView
  constructor(parentElement: HTMLDivElement) {
    this.parentElement = parentElement
    this.adminView = new AdminView(this.parentElement)
  }

  init(): void {
    this.adminView.render()
  }
}
