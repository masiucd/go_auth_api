import { AdminMediator } from "./mediator"
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
  send(message: string, to?: Student) {
    this.adminMediator?.send(message, this, to)
  }
  receive(message: string, from: Student): string {
    return `${message} - from ${from}`
  }
}

const adminMediator = new AdminMediator()

console.log("adminMediator", adminMediator)

const loadStudents = () => [
  new Student(1, "Frank", "Mellberg", "frank@io.com", 21),
  new Student(2, "Rio", "Ferdinand", "rio@io.com", 25),
  new Student(3, "Nemanja", "Vidic", "nemanja@io.com", 32),
  new Student(4, "Fredrik", "ljungberg", "fredrik@io.com", 32),
]

console.log(loadStudents()[0].send("hello"))
const registerAllStudents = (): void => {
  for (let student of loadStudents()) {
    adminMediator.registerStudent(student)
  }
}

export { Student, loadStudents, adminMediator, registerAllStudents }
