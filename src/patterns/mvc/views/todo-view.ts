export class TodoView {
  app: HTMLDivElement

  constructor() {
    this.app = this.getElement("#root") as HTMLDivElement
  }

  getElement(selector: string) {
    const element = document.querySelector(selector)
    return element
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
            <button type="submit">Edit todo</button>
            <button type="submit">Delete todo todo</button>
          </div>
        </form>
        <ul id="todo-list"></ul>
      </main>
      `
  }
}
