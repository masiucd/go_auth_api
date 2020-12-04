import { TeacherController } from "./teacher"
import { CourseController } from "./course"
import { StudentController } from "./student"
import { AdminController } from "./admin"

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
  }
}
