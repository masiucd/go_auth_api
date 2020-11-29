import { Student } from "../exercise/Student"
import { Course } from "../exercise/Course"
import { Teacher } from "../exercise/Teacher"

export class View {
  main: HTMLDivElement
  wrapper: HTMLDivElement
  title: HTMLHeadElement
  form: HTMLFormElement
  input: HTMLInputElement
  submitButton: HTMLButtonElement

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

    this.coursesList = this.createElement(
      "ul",
      "courses-list",
    ) as HTMLUListElement
    this.studentList = this.createElement(
      "ul",
      "students-list",
    ) as HTMLUListElement
    this.teachersList = this.createElement(
      "ul",
      "teachaers-list",
    ) as HTMLUListElement

    this.form = this.createElement("form", "backlog-form") as HTMLFormElement

    this.input = this.createElement("input", "add-input") as HTMLInputElement
    this.input.type = "text"
    this.input.placeholder = "enter a new backlog to the backlog..."

    this.submitButton = this.createElement(
      "button",
      "add-btn",
    ) as HTMLButtonElement
    this.submitButton.innerText = "submit"

    this.form.append(this.input, this.submitButton)

    this.wrapper.append(
      this.title,
      this.form,
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
        <li>${course.subject}</li>
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
  }
}
