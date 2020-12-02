import { Course } from "../models/course"
import { Student } from "../models/student"
import { Teacher } from "../models/teacher"

export class Item {
  parentElement: HTMLDivElement
  data: Student | Teacher
  constructor(parentElement: HTMLDivElement, data: Student) {
    this.parentElement = parentElement
    this.data = data
  }

  createElement(tag: string, className: string): HTMLElement {
    const element = document.createElement(tag) as HTMLElement
    element.classList.add(className)
    return element
  }

  render() {
    const html = `
      <p id="apa">${this.data.firstName}</p>
    `
    document.getElementById("apa")?.addEventListener("click", () => {
      console.log(this, this.data, "student has been clicked")
    })
    // this.parentElement.insertAdjacentHTML("beforeend", html)
    console.log(document.getElementById("modal"))
    this.parentElement.insertAdjacentHTML("beforeend", html)
    this.parentElement.insertAdjacentHTML("beforebegin", html)
    const wrapper = this.createElement("div", "apa")
    console.log(wrapper)
    this.parentElement.appendChild(wrapper)
  }
}
