export class TodoView {
  app: HTMLDivElement
  title: HTMLHeadElement
  form: HTMLFormElement
  input: HTMLInputElement
  submitButton: HTMLButtonElement
  list: HTMLUListElement

  constructor() {
    this.app = this.getElement("root") as HTMLDivElement

    this.title = this.createElement(
      "h1",
      "title",
      "main-title"
    ) as HTMLHeadElement
    this.title.textContent = "Todo List"

    this.form = this.createElement(
      "form",
      "todo-form",
      "todo-form"
    ) as HTMLFormElement

    this.input = this.createElement(
      "input",
      "input",
      "add-todo-input"
    ) as HTMLInputElement
    this.input.type = "text"
    this.input.placeholder = "add-todo"
    this.input.name = "todo"

    this.submitButton = this.createElement(
      "button",
      "submit-btn",
      "submit-btn"
    ) as HTMLButtonElement

    this.list = this.createElement("ul", "list", "list") as HTMLUListElement

    this.form.append(this.input, this.submitButton)

    this.app.append(this.title, this.form, this.list)
  }

  createElement(tag: string, className: string = "", id: string = "") {
    const element = document.createElement(tag) as HTMLElement
    if (className) element.classList.add(className)
    if (id) element.id = id
    return element
  }

  getElement(selector: string) {
    const element = document.querySelector(selector)
    return element
  }

  render() {
    //
  }
}
