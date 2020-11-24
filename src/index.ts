import { TodoView } from "./patterns/mvc/views/todo-view"

function createElement(elementType: string) {
  return document.createElement(elementType)
}

;(() => {
  const todoView = new TodoView()
  todoView.render()
})()
