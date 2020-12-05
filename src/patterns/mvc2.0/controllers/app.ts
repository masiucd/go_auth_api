import { TeacherController } from "./teacher"
import { StudentController } from "./student"
import { AdminController } from "./admin"
import { init } from "../models/mediator"

export class App {
  teacher: TeacherController
  students: StudentController
  admin: AdminController
  constructor(teacher: TeacherController, students: StudentController, admin: AdminController) {
    this.teacher = teacher
    this.students = students
    this.admin = admin
  }

  render(): void {
    this.teacher.init()
    this.admin.init()
    this.students.init()
    console.log(init().loadMediator())
  }
}
