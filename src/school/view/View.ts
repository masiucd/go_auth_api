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
  backLogList: HTMLUListElement
  students: Student[]
  courses: Course[]
  teachers: Teacher[]

  constructor(students: Student[], courses: Course[], teachers: Teacher[]) {
    this.students = students
    this.courses = courses
    this.teachers = teachers

    this.main = this.getElement("#root") as HTMLDivElement
    this.wrapper = this.createElement("div", "wrapper") as HTMLDivElement

    this.title = this.createElement("h1", "main-title") as HTMLHeadElement
    this.title.textContent = "BackLogList List"

    this.form = this.createElement("form", "backlog-form") as HTMLFormElement

    this.input = this.createElement("input", "add-input") as HTMLInputElement
    this.input.type = "text"
    this.input.placeholder = "enter a new backlog to the backlog..."

    this.submitButton = this.createElement(
      "button",
      "add-btn",
    ) as HTMLButtonElement
    this.submitButton.innerText = "submit"

    this.backLogList = this.createElement(
      "ul",
      "backlog-list",
    ) as HTMLUListElement

    this.form.append(this.input, this.submitButton)

    this.wrapper.append(this.title, this.form, this.backLogList)

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

  render() {}
}
