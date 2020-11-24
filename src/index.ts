import { TodoView } from "./patterns/mvc/views/todo-view"
import { TodoList } from "./patterns/mvc/models/todo-list"
import { TodoController } from "./patterns/mvc/controllers/todo-controller"
;(() => {
  const root = document.getElementById("root") as HTMLDivElement
  const todoList = new TodoList()
  const list = todoList.allTodos
  const todoView = new TodoView(list)
  const todoController = new TodoController(todoList, todoView)
  todoController.handleMount(root)
})()
