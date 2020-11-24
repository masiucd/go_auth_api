export interface TodoItem {
  id: number
  task: string
  completed: boolean
}

export class TodoList {
  todos: TodoItem[] = []
  constructor() {
    this.todos = [
      { id: 1, task: "go out with the dog", completed: false },
      { id: 2, task: "done homework", completed: true },
      { id: 3, task: "go out for a run", completed: true },
      { id: 4, task: "cook some food", completed: false },
    ]
  }

  addTodo(todo: TodoItem) {
    this.todos.push(todo)
    return this.todos
  }

  editTodo(todoId: number, task: string = "", completed: boolean = false) {
    this.todos = this.todos.map(todo =>
      todo.id === todoId ? { ...todo, task, completed } : todo
    )
    return this.todos
  }

  toggleTodo(todoId: number) {
    this.todos = this.todos.map(todo =>
      todo.id === todoId ? { ...todo, completed: !todo.completed } : todo
    )
    return this.todos
  }
  removeTodo(todoId: number) {
    this.todos = this.todos.filter(todo => todo.id !== todoId)
    return this.todos
  }

  get allTodos() {
    return this.todos
  }
  get size() {
    return this.todos.length
  }
  findTodo(todoId: number) {
    return this.todos.find(todo => todo.id === todoId)
  }
}
