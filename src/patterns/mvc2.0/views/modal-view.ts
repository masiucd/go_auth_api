import { Admin, loadAdmin } from "../models/admin"
import { Student } from "../models/student"
import { Teacher } from "../models/teacher"
import { ListView } from "./list-view"

export class ModalView<T> {
  parentElement: HTMLDivElement
  list: Array<any>
  data: Student | Teacher
  title: string
  listView: ListView<T>
  subTitles: string[]
  confirmationText: string
  admin: Admin

  constructor(
    parentElement: HTMLDivElement,
    list: any,
    data: Student | Teacher,
    title: string,
    subTitles: string[],
  ) {
    this.parentElement = parentElement
    this.list = list
    this.data = data
    this.title = title
    this.subTitles = subTitles
    this.listView = new ListView(
      this.parentElement,
      this.list,
      this.title,
      this.subTitles,
      "student",
    )
    this.confirmationText = ""
    this.admin = loadAdmin()
  }

  updateText(text: string) {
    this.confirmationText = text
  }

  render(): void {
    const modalWrapper = document.querySelector(".modal") as HTMLDListElement
    modalWrapper.classList.add("show-modal")

    const html = `
    <div class="modal-container">
      ${this.listView.renderRawHtml()}
      ${this.confirmationText}
      <button class="close-modal">
        ❌
      </button>
    </div>
    `

    modalWrapper.innerHTML = html
    document.querySelector(".close-modal")?.addEventListener("click", () => {
      modalWrapper.classList.remove("show-modal")
      modalWrapper.innerHTML = ""
    })

    document.querySelectorAll(".modal tbody tr").forEach((tr: any) => {
      tr.addEventListener("click", (event: any) => {
        if ("send" in this.data) {
          const confirmationText = `You have now been registered to the ${event.target.innerText} Course`
          this.data.send(confirmationText) // sending from this student, to itself and to admin
          this.updateText(confirmationText)
          this.updateHtml()
        }
      })
    })
  }
  updateHtml() {
    this.render()
  }
}
