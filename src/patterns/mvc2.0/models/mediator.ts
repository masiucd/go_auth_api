import { Admin, loadAdmin } from "./admin"
import { Student } from "./student"

class AdminMediator {
  collection: Record<string, Student | Admin>
  admin: Admin
  messageBox: string[]
  constructor() {
    this.collection = {}
    this.admin = loadAdmin()
    this.messageBox = []
  }
  register(human: Student | Admin) {
    this.collection[human.firstName] = human
    human.adminMediator = this
  }

  send(message: string, from: Student | Admin) {
    console.log("message", message)
    console.log("from", from)
    this.messageBox.push(message)
  }
}

export { AdminMediator }
