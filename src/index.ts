import { TodoView } from "./patterns/mvc/views/todo-view"
import { TodoList } from "./patterns/mvc/models/todo-list"

function createElement(elementType: string) {
  return document.createElement(elementType)
}

;(() => {
  const root = document.getElementById("root") as HTMLDivElement
  const todoList = new TodoList()
  const list = todoList.allTodos
  const todoView = new TodoView(list)
  todoView.mount(root)
})()
