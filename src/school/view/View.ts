import { Student } from "../exercise/Student"
import { Course } from "../exercise/Course"
import { Teacher } from "../exercise/Teacher"

export class View {
  main: HTMLDivElement
  wrapper: HTMLDivElement
  title: HTMLHeadElement

  modalButton: HTMLButtonElement

  students: Student[]
  courses: Course[]
  teachers: Teacher[]
  studentList: HTMLUListElement
  teachersList: HTMLUListElement
  coursesList: HTMLUListElement

  constructor(students: Student[], courses: Course[], teachers: Teacher[]) {
    this.students = students
    this.courses = courses
    this.teachers = teachers

    this.main = this.getElement("#root") as HTMLDivElement
    this.wrapper = this.createElement("div", "wrapper") as HTMLDivElement

    this.title = this.createElement("h1", "main-title") as HTMLHeadElement
    this.title.textContent = "WesCoast"

    this.modalButton = this.createElement("button", "modal-btn") as HTMLButtonElement
    this.modalButton.textContent = "show data"

    this.coursesList = this.createElement("ul", "courses-list") as HTMLUListElement
    this.studentList = this.createElement("ul", "students-list") as HTMLUListElement
    this.teachersList = this.createElement("ul", "teachaers-list") as HTMLUListElement
    this.coursesList.classList.add("hide")
    this.teachersList.classList.add("hide")
    this.studentList.classList.add("hide")

    this.wrapper.append(
      this.title,
      this.modalButton,
      this.coursesList,
      this.studentList,
      this.teachersList,
    )

    this.main.append(this.wrapper)
  }

  createElement(tag: string, className: string = "") {
    const element = document.createElement(tag)
    if (className) element.classList.add(className)

    return element
  }

  getElement(selector: string) {
    const element = document.querySelector(selector)

    return element
  }

  private renderStudents(): string {
    return this.students
      .map(
        student =>
          `
        <li>${student.firstName}-${student.lastName}</li>
        <p>${student.firstName} currently study:</p>
        ${student.courses.map(course => `<li>${course.subject}</li>`).join("")}
      `,
      )
      .join("")
  }
  private renderTeachers(): string {
    return this.teachers
      .map(
        teacher =>
          `
        <li>${teacher.firstName}-${teacher.lastName}</li>
      `,
      )
      .join("")
  }
  private renderCourses(): string {
    return this.courses
      .map(
        course =>
          `
        <li class="course">${course.subject}</li>
        <p>Students that read ${course.subject}</p>
        ${course.students
          .map(student => `<li>${student.firstName}- ${student.lastName} </li>`)
          .join("")}
      `,
      )
      .join("")
  }

  render() {
    this.studentList.innerHTML = `
      <li> <strong> Student List </strong> </li>
      ${this.renderStudents()}
    `

    this.teachersList.innerHTML = `
      <li> <strong>Teachers List</strong> </li>
      ${this.renderTeachers()}
    `
    this.coursesList.innerHTML = `
      <li> <strong>Courses List</strong> </li>
      ${this.renderCourses()}
    `
    this.modalButton.addEventListener("click", () => {
      this.studentList.classList.toggle("show")
      this.coursesList.classList.toggle("show")
      this.teachersList.classList.toggle("show")
    })
  }
}
