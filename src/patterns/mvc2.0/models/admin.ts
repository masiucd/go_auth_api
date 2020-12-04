import { Course } from "./course"
import { Student } from "./student"

class Admin {
  private static instance: Admin
  id: number
  name: string
  isAdmin: boolean
  constructor() {
    this.id = 1
    this.name = "Mr Alfred"
    this.isAdmin = true
  }
  static getInstance() {
    if (!Admin.instance) {
      Admin.instance = new Admin()
    }
    return Admin.instance
  }
  receive(course: Course, from: Student): string {
    const studentRegistredForCourseMessage = `Student ${from.firstName} has been registered for the course ${course.title}`
    console.log(studentRegistredForCourseMessage)
    return studentRegistredForCourseMessage
  }
}

const loadAdmin = () => new Admin()

export { Admin, loadAdmin }
