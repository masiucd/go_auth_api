import { TodoItem } from "../models/todo-list"
export class TodoView {
  app: HTMLDivElement
  todos: TodoItem[]

  constructor(todos: TodoItem[]) {
    this.app = this.getElement("#root") as HTMLDivElement
    this.todos = todos
  }

  getElement(selector: string) {
    const element = document.querySelector(selector)
    return element
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
    const output = this.todos
      .map(
        todo =>
          `<li id="todo-item>
          ${todo.task}
          ${todo.completed ? "completed" : "not-completed"}
          <label for="chckbox">
            <input type="checkbox" name="completed" id="completed" />
          </label>
          <button id="delete-btn>
            Delete todo
          </button>
        </li>`
      )
      .join("")
    return output
  }

  render() {
    this.app.innerHTML += `
        <main>
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
  }
}
