import { loadStudents, Student, registerAllStudents, adminMediator } from "../models/student"
import { ListView } from "../views/list-view"
import { ModalView as CoursesModalView } from "../views/modal-view"
import { loadCourses } from "../models/course"
import { ProfileView } from "../views/profile-view"

export class StudentController {
  parentElement: HTMLDivElement
  studentsView: ListView<Student>
  profileView: ProfileView
  constructor(parentElement: HTMLDivElement) {
    this.parentElement = parentElement
    this.studentsView = new ListView(this.parentElement, loadStudents(), "Students", [
      "name",
      "email",
      "age",
    ])
    this.profileView = new ProfileView()
  }

  handleClickStudent(): void {
    this.studentsView.clickHandler((id: number) => {
      const student = loadStudents().find(student => student.id === id)
      const data = student! as Student
      console.log("data", data)
      const courses = loadCourses()
      const modal = document.querySelector(".modal-list") as HTMLDivElement
      new CoursesModalView<any[], Student>(modal, courses, data, "courses", [
        "title",
        "duration",
      ]).render()
    })
  }

  handleShowProfile(): void {
    //
  }

  init(): void {
    this.studentsView.init()
    this.handleClickStudent()
    registerAllStudents()
    console.log("adminMediator", adminMediator) //!for testing!
  }
}
