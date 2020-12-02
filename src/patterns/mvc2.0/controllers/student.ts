import { loadStudents } from "../models/student"
import { Item } from "../views/item-view"
import { ListView } from "../views/list-view"

export class StudentController {
  parentElement: HTMLDivElement
  studentsView: ListView
  constructor(parentElement: HTMLDivElement) {
    this.parentElement = parentElement
    this.studentsView = new ListView(this.parentElement, loadStudents(), "Students", [
      "name",
      "email",
      "age",
    ])
  }

  handleAddStudent() {
    this.studentsView.clickHandler((id: string) => {
      const student = loadStudents().find(student => student.id === id)
      const data = `${student?.firstName} - ${student?.lastName}`
      const newStudentItem = new Item(this.parentElement, data)
      newStudentItem.render()
    })
  }

  init(): void {
    this.studentsView.init()
    this.handleAddStudent()
  }
}
