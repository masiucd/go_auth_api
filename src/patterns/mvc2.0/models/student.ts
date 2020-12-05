import { Admin } from "./admin"
import { AdminMediator, init } from "./mediator"
import { Person } from "./Person"

class Student extends Person {
  adminMediator: null | AdminMediator
  constructor(id: number, firstName: string, lastName: string, email: string, age: number) {
    super(id, firstName, lastName, email, age)
    this.adminMediator = null
  }
  displayInfo() {
    return {
      name: `${this.firstName}-${this.lastName}`,
      email: this.email,
      age: `${this.age}`,
    }
  }
  send(message: string) {
    this.adminMediator?.send(message, this)
    console.log("x", message)
    console.log(this.adminMediator)
  }
  receive(message: string, from: Student): string {
    return `${message} - from ${from}`
  }
}

const loadStudents = () => [
  new Student(1, "Frank", "Mellberg", "frank@io.com", 21),
  new Student(2, "Rio", "Ferdinand", "rio@io.com", 25),
  new Student(3, "Nemanja", "Vidic", "nemanja@io.com", 32),
  new Student(4, "Fredrik", "ljungberg", "fredrik@io.com", 32),
]

const registerAllStudents = (): void => {
  for (let student of loadStudents()) {
    init().loadMediator().register(student)
  }
}

export { Student, loadStudents, registerAllStudents }
