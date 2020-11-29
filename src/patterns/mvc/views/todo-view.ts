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

  getElement(selector: string, list: boolean = false) {
    if (list) {
      const elements = document.querySelectorAll(selector)
      return elements
    } else {
      const element = document.querySelector(selector)

      return element
    }
  }

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
    console.log(todos)
  }
  bindDeleteTodo(fn: Function) {
    const deleteBtns = this.getElement(
      ".delete-btn",
      true
    ) as NodeListOf<HTMLButtonElement>

    Array.from(deleteBtns).forEach(item => {
      item.addEventListener("click", (e: any) => {
        const parsedId = parseInt(e.target.parentElement.dataset.id, 10)
        fn(parsedId)
        console.log(parsedId)
      })
    })
  }
}
