import { TodoItem, TodoList } from "../models/todo-list"
import { TodoView } from "../views/todo-view"

export class TodoController {
  model: TodoList
  view: TodoView

  constructor(model: TodoList, view: TodoView) {
    this.model = model
    this.view = view
  }

  handleAddTodo = (todo: TodoItem) => {
    this.model.addTodo(todo)
  }

  handleEditTodo = (id: number, task: string, completed: boolean) => {
    this.model.editTodo(id, task, completed)
  }

  handleDeleteTodo = (id: number) => {
    this.model.removeTodo(id)
  }
}
