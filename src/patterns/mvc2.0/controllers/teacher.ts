import { ListView } from "../views/list-view"
import { loadTeachers, Teacher } from "../models/teacher"

export class TeacherController {
  parentElement: HTMLDivElement
  teachersView: ListView<Teacher>
  constructor(parentElement: HTMLDivElement) {
    this.parentElement = parentElement
    this.teachersView = new ListView(
      this.parentElement,
      loadTeachers(),
      "Teachers",
      ["name", "email", "age"],
      "teacher",
    )
  }

  init(): void {
    this.teachersView.init()
  }
}
