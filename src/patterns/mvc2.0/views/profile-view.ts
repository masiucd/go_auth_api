import { Student } from "../models/student"

export class ProfileView {
  parentElement: HTMLDivElement
  student: Student
  constructor(student: Student, parentElement: HTMLDivElement) {
    this.parentElement = parentElement
    this.student = student
  }

  clickHandler(subscriber: Function): void {
    // console.log(subscriber())
  }

  render(): void {}

  // clickHandler(subscriber: Function) {
  //   const trs = document.querySelectorAll("tr")
  //   trs.forEach(tr =>
  //     tr.addEventListener("click", () => {
  //       subscriber(parseInt(tr.dataset.id!, 10))
  //       sessionStorage.setItem("user", String(tr.dataset.id))
  //     }),
  //   )
  // }
}
