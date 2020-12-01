import { Teacher } from "../models/teacher"

class ListView {
  rootElement: HTMLDivElement
  dataList: Teacher[]
  title: string
  subTitles: string[]
  constructor(
    rootElement: HTMLDivElement,
    dataList: Teacher[],
    title: string,
    subTitles: string[],
  ) {
    this.rootElement = rootElement
    this.dataList = dataList
    this.title = title
    this.subTitles = subTitles
  }

  render(): void {}

  init() {}
}
