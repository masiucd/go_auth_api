import { Course } from "../../mvc/models/course-model"
import { Teacher } from "../models/teacher"
import { WhatModelType } from "../types"
export class ListView<T> {
  parentElement: HTMLDivElement
  dataList: Array<T>
  title: string
  subTitles: string[]
  type: WhatModelType // student ore teacher
  constructor(
    parentElement: HTMLDivElement,
    dataList: Array<T>,
    title: string,
    subTitles: string[],
    type: WhatModelType,
  ) {
    this.parentElement = parentElement
    this.dataList = dataList
    this.title = title
    this.subTitles = subTitles
    this.type = type
  }

  clickHandler(subscriber: Function) {
    const trs = document.querySelectorAll("tr")
    trs.forEach(tr =>
      tr.addEventListener("click", () => {
        const [type] = tr.id.split("-")
        if (type === "student") {
          subscriber(parseInt(tr.dataset.id!, 10))
        }
        // sessionStorage.setItem("user", String(tr.dataset.id))
      }),
    )
  }

  private render(): void {
    const html = `
    <div class="table-wrapper wrapper-${this.title}">
    <table class="${this.title}">
        <caption>${this.title}</caption>
        <thead>
          ${this.subTitles.map(t => `<th>${t}</th>`).join("")}
        </thead>
        <tbody>
          ${(this.dataList as Array<T>)
            .map((data: any) => {
              const displayInfo = data.displayInfo() as { [key: string]: string }
              return `
                <tr data-id="${data.id}" id="${
                this.type === "student"
                  ? `student-${data.id}`
                  : this.type === "course"
                  ? `course-${data.id}`
                  : `teacher-${data.id}`
              }">
                ${Object.keys(displayInfo)
                  .map(key => `<td data-info="${displayInfo[key]}">${displayInfo[key]}</td>`)
                  .join("")}
                </tr>
          `
            })
            .join("")}
        </tbody>
      </table>
    </div>
    `
    this.parentElement.innerHTML = html
  }

  renderRawHtml(): string {
    const html = `
    <div class="table-wrapper wrapper-${this.title}">
    <table>
        <caption>${this.title}</caption>
        <thead>
          ${this.subTitles.map(t => `<th>${t}</th>`).join("")}
        </thead>
        <tbody>
          ${(this.dataList as Array<any>)
            .map((data: any) => {
              const displayInfo = data.displayInfo() as { [key: string]: string }
              return `
                <tr data-id="${data.id}">
                ${Object.keys(displayInfo)
                  .map(key => `<td>${displayInfo[key]}</td>`)
                  .join("")}
                </tr>
          `
            })
            .join("")}
        </tbody>
      </table>
    </div>
    `
    return html
  }

  mount(element: HTMLElement) {
    element.innerHTML = this.renderRawHtml()
  }

  init(): void {
    this.render()
  }
}
