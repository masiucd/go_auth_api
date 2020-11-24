import { TodoItem } from "../models/todo-list"
export class TodoView {
  todos: TodoItem[]

  constructor(todos: TodoItem[]) {
    this.todos = todos
  }

  getElement(selector: string) {
    const element = document.querySelector(selector)
    return element
  }

  createElement(
    element: string = "",
    id: string = "",
    className: string = ""
  ): HTMLElement {
    const htmlElement = document.createElement(element) as HTMLElement
    if (id) htmlElement.id = id
    if (className) htmlElement.classList.add(className)
    return htmlElement
  }

  private _getTodoText() {
    const input = document.getElementById("form-input") as HTMLInputElement
    const inputValue = input.value
  }

  private _resetInput() {
    const input = document.getElementById("form-input") as HTMLInputElement
    input.value = input.value = ""
  }

  renderTodos() {
    return this.todos.map(todo => `<li>${todo.task} </li> `).join("")
  }

  mount(parent: HTMLElement) {
    parent.appendChild(this.render())
    this.update()
  }

  private render() {
    const wrapper = this.createElement("div", "wrapper", "wrapper")
    wrapper.innerHTML += `
        <main id="main>
        <h1>Todo list</h1>
        <form>
          <div class="form-group">
            <input type="text" id="form-input" />
          </div>
          <div class="form-button-group">
            <button type="submit">Add todo</button>    
          </div>
        </form>
        <ul id="todo-list">
          ${this.renderTodos()}
        </ul>
      </main>
      `
    return wrapper
  }

  private update() {}
}