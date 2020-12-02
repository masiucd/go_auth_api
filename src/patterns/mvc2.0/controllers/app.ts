import { TeacherController } from "./teacher"
import { CourseController } from "./course"
import { StudentController } from "./student"

export class App {
  teacher: TeacherController
  courses: CourseController
  students: StudentController
  constructor(teacher: TeacherController, courses: CourseController, students: StudentController) {
    this.teacher = teacher
    this.courses = courses
    this.students = students
  }

  render(): void {
    this.teacher.init()
    this.courses.init()
    this.students.init()
  }
}
