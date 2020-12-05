import { Admin } from "./admin"
import { Student } from "./student"
interface MessageBox {
  message: string
  from: Student | Admin
}
class AdminMediator {
  messageBox: MessageBox[]
  members: Student[] & Admin[]
  constructor() {
    this.messageBox = []
    this.members = []
  }
  register(member: Student | Admin) {
    // @ts-ignore
    this.members.push(member)
    member.adminMediator = this
  }

  get getMessageBox(): MessageBox[] {
    return this.messageBox
  }

  send(message: string, from: Student | Admin) {
    console.log("message", message)
    console.log("from", from)
    const obj: MessageBox = { message, from }
    this.messageBox.push(obj)
  }
}

function init() {
  const loadMediator = () => new AdminMediator()
  return {
    loadMediator,
  }
}

export { AdminMediator, init }
