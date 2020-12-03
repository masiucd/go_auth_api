import { Student } from "../models/student"
import { Teacher } from "../models/teacher"
import { ListView } from "./list-view"

export class ModalView<T, S> {
  parentElement: HTMLDivElement
  list: Array<any>
  data: S
  title: string
  listView: ListView<T>
  subTitles: string[]
  constructor(
    parentElement: HTMLDivElement,
    list: any,
    data: S,
    title: string,
    subTitles: string[]
  ) {
    this.parentElement = parentElement
    this.list = list
    this.data = data
    this.title = title
    this.subTitles = subTitles
    this.listView = new ListView(this.parentElement, this.list, this.title, this.subTitles)
  }

  render(): void {
    const modalWrapper = document.querySelector(".modal") as HTMLDListElement
    modalWrapper.classList.add("show-modal")

    const html = `
    <div class="modal-container">
      ${this.listView.renderRawHtml()}
      <button class="close-modal">
        ❌
      </button>
    </div>
    `

    modalWrapper.innerHTML = html
    document.querySelector(".close-modal")?.addEventListener("click", () => {
      modalWrapper.classList.remove("show-modal")
    })
    console.log(this.listView)
  }
}
