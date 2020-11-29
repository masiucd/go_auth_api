import { TodoItem, TodoModel } from "../models/todo-model"
import { TodoView } from "../views/todo-view"

export class TodoController {
  todoView: TodoView
  todoModel: TodoModel
  constructor(todoView: TodoView, todoModel: TodoModel) {
    this.todoView = todoView
    this.todoModel = todoModel

    this.handleRender(this.todoModel.todos)

    this.todoView.bindDeleteTodo(this.handleRemoveTodo)
  }

  handleRender = (todos: TodoItem[]) => {
    this.todoView.render(todos)
  }

  handleRemoveTodo = (id: number) => {
    this.todoModel.deleteTodo(id)
  }
}
