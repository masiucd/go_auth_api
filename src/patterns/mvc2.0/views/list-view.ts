import { Teacher } from "../models/teacher"

export class ListView {
  parentElement: HTMLDivElement
  dataList: Teacher[]
  title: string
  subTitles: string[]
  constructor(
    parentElement: HTMLDivElement,
    dataList: Teacher[],
    title: string,
    subTitles: string[],
  ) {
    this.parentElement = parentElement
    this.dataList = dataList
    this.title = title
    this.subTitles = subTitles
  }

  private render(): void {
    const html = `
    <div class="table-wrapper wrapper-${this.title}">
    <table>
        <caption>${this.title}</caption>
        <thead>
          ${this.subTitles.map(t => `<th>${t}</th>`).join("")}
        </thead>
        <tbody>
          ${this.dataList
            .map(data => {
              const displayInfo = data.displayInfo() as { [key: string]: string }
              return `
                <tr>
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
    this.parentElement.insertAdjacentHTML("beforebegin", html)
  }

  init(): void {
    this.render()
  }
}
