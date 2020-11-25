import { TodoView } from "./patterns/mvc/views/todo-view"
import { TodoList } from "./patterns/mvc/models/todo-list"
import { TodoController } from "./patterns/mvc/controllers/todo-controller"
import { BacklogController } from "./patterns/mvc/controllers/backlog-controller"
import { BacklogModel } from "./patterns/mvc/models/backlog-model"
import { BacklogView } from "./patterns/mvc/views/backlog-view"
;(() => {
  // const root = document.getElementById("root") as HTMLDivElement
  // const todoList = new TodoList()
  // const list = todoList.allTodos
  // const todoView = new TodoView(list)
  // const todoController = new TodoController(todoList, todoView)
  // todoController.handleMount(root)

  const app = new BacklogController(new BacklogModel(), new BacklogView())
})()
