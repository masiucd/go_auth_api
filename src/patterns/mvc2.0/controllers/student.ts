import { loadStudents, Student } from "../models/student"
import { Item } from "../views/item-view"
import { ListView } from "../views/list-view"
import { ModalView } from "../views/modal-view"

export class StudentController {
  parentElement: HTMLDivElement
  studentsView: ListView<Student>
  constructor(parentElement: HTMLDivElement) {
    this.parentElement = parentElement
    this.studentsView = new ListView(this.parentElement, loadStudents(), "Students", [
      "name",
      "email",
      "age",
    ])
  }

  handleAddStudent(): void {
    this.studentsView.clickHandler((id: number) => {
      const student = loadStudents().find(student => student.id === id)
      const data = student!
      new ModalView<any, Student>([], data).render()
      // const newStudentItem = new Item(this.parentElement, data!)
      // newStudentItem.render()
    })
  }

  init(): void {
    this.studentsView.init()
    this.handleAddStudent()
  }
}
