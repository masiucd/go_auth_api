import { Admin, loadAdmin } from "../models/admin"

export class AdminView {
  parentElement: HTMLDivElement
  admin: Admin
  constructor(parentElement: HTMLDivElement) {
    this.parentElement = parentElement
    this.admin = loadAdmin()
  }

  render(): void {
    //
  }
}
