import { TeacherController } from "./teacher"
import { CourseController } from "./course"

export class App {
  teacher: TeacherController
  courses: CourseController
  constructor(teacher: TeacherController, courses: CourseController) {
    this.teacher = teacher
    this.courses = courses
  }

  render(): void {
    this.teacher.init()
    this.courses.init()
  }
}
