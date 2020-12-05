import { AdminMediator } from "./mediator"
import { Student } from "./student"
class Admin {
  private static instance: Admin
  id: number
  firstName: string
  slug: string
  isAdmin: boolean
  private messageBox: string[]
  adminMediator: null | AdminMediator

  constructor() {
    this.id = 99
    this.firstName = "Alfred"
    this.slug = "I am the boss 💰!!!"
    this.isAdmin = true
    this.messageBox = []
    this.adminMediator = null
  }
  static getInstance() {
    if (!Admin.instance) {
      Admin.instance = new Admin()
    }
    return Admin.instance
  }
  receive(message: string, from: Student): string {
    const studentRegistredForCourseMessage = `Student ${from.firstName} ${message}`
    console.log(studentRegistredForCourseMessage)
    this.messageBox.push(message)
    return studentRegistredForCourseMessage
  }

  send(message: string) {
    this.adminMediator?.send(message, this)
    console.log("x", message)
    console.log(this.adminMediator)
  }

  get messages(): string {
    if (this.messageBox.length === 0) return "message box empty!"
    let str = ``
    for (const m of this.messageBox) {
      str += ` --- ${m} ---`
    }
    return str
  }
}

const loadAdmin = () => new Admin()

export { Admin, loadAdmin }
