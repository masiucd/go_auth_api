import { Course } from "./course"
import { Student } from "./student"

class Admin {
  private static instance: Admin
  id: number
  name: string
  slug: string
  isAdmin: boolean
  constructor() {
    this.id = 1
    this.name = "Alfred"
    this.slug = "I am the boss 💰!!!"
    this.isAdmin = true
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
    return studentRegistredForCourseMessage
  }
}

const loadAdmin = () => new Admin()

export { Admin, loadAdmin }
