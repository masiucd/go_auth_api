import { TeacherController } from "./teacher"

export class App {
  teacher: TeacherController
  constructor(teacher: TeacherController) {
    this.teacher = teacher
  }

  render(): void {
    this.teacher.init()
  }
}
