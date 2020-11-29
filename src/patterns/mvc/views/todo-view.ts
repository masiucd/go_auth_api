import { TodoItem } from "../models/todo-model"
export class TodoView {
  app: HTMLDivElement
  wrapper: HTMLDivElement
  title: HTMLHeadElement
  form: HTMLFormElement
  input: HTMLInputElement
  submitButton: HTMLButtonElement
  todoList: HTMLUListElement
  constructor() {
    this.app = this.getElement("#root") as HTMLDivElement
    this.wrapper = this.createElement("div", "wrapper") as HTMLDivElement

    this.title = this.createElement("h1", "main-title") as HTMLHeadElement
    this.title.textContent = "BackLogList List"

    this.form = this.createElement("form", "backlog-form") as HTMLFormElement

    this.input = this.createElement("input", "add-input") as HTMLInputElement
    this.input.type = "text"
    this.input.placeholder = "enter a new backlog to the backlog..."

    this.submitButton = this.createElement(
      "button",
      "add-btn"
    ) as HTMLButtonElement
    this.submitButton.innerText = "submit"

    this.todoList = this.createElement("ul", "backlog-list") as HTMLUListElement

    this.form.append(this.input, this.submitButton)

    this.wrapper.append(this.title, this.form, this.todoList)

    this.app.append(this.wrapper)
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

  mount(parent: HTMLElement) {}

  render(todos: TodoItem[]) {
    if (todos.length === 0) {
      const p = this.createElement("p", "p-message")
      p.textContent = "no todos!"
      this.wrapper.append(p)
    } else {
      todos.forEach(todo => {
        const li = this.createElement("li", "todo-item")
        li.id = `${todo.task}-${todo.id}`
        li.dataset.id = `${todo.id}`

        const deleteButton = this.createElement("button", "delete-btn")
        deleteButton.textContent = `delete ${todo.task.slice(0.3)}...`

        const span = this.createElement("span", "todo-text")
        span.textContent = todo.task

        const checkbox = this.createElement(
          "input",
          "toggle-box"
        ) as HTMLInputElement
        checkbox.type = "checkbox"
        checkbox.checked = todo.completed

        li.append(checkbox, span, deleteButton)

        this.todoList.append(li)
      })
    }
  }
  bindDeleteTodo(fn: Function) {
    const deleteBtn = this.getElement(".delete-btn")
    console.log(deleteBtn)
    deleteBtn?.addEventListener("click", (e: any) => {
      console.log(e.target.parentElement)
      console.log(e.target.parentElement.dataset)
      console.log("clicked")
    })
  }
}
