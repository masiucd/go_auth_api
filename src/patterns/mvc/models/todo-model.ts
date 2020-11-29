export interface TodoItem {
  id: number
  task: string
  completed: boolean
}

export class TodoModel {
  todos: TodoItem[] = []

  constructor() {
    this.todos = [
      { id: 1, task: "go out with the dog", completed: false },
      { id: 2, task: "done homework", completed: true },
      { id: 3, task: "go out for a run", completed: true },
      { id: 4, task: "cook some food", completed: false },
    ]
  }

  addTodo(task: string): void {
    const newTodo: TodoItem = {
      id: this.todos.length > 0 ? this.todos.length++ : 1,
      task,
      completed: false,
    }
    this.todos.push(newTodo)
  }

  deleteTodo(todoId: number): void {
    this.todos = this.todos.filter(todo => todo.id !== todoId)
  }

  get size() {
    return this.todos.length
  }

  toggleTodo(id: number) {
    this.todos = this.todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    )
  }

  getTodo(todoId: number) {
    return this.todos.find(todo => todo.id === todoId)
  }

  getAllTodos() {
    return this.todos
  }

  updateTodo(id: number, task: string = "", completed: boolean) {
    const findTittleToEdit = this.getTodo(id)!
    let newTitle = task.length === 0 ? findTittleToEdit?.task : task
    let newCompleted = !completed ? findTittleToEdit?.completed : completed
    if (findTittleToEdit) {
      this.todos = this.todos.map(todo =>
        todo.id === id
          ? { ...todo, task: newTitle, completed: newCompleted }
          : todo
      )
    }
  }
}
