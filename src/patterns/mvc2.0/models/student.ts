import { nanoid } from "nanoid"
import { Person } from "./Person"

export class Student extends Person {
  constructor(id: number, firstName: string, lastName: string, email: string, age: number) {
    super(id, firstName, lastName, email, age)
  }
  displayInfo() {
    return {
      name: `${this.firstName}-${this.lastName}`,
      email: this.email,
      age: `${this.age}`,
    }
  }
}

export const loadStudents = () => [
  new Student(1, "Frank", "Mellberg", "frank@isObject.com", 21),
  new Student(2, "Rio", "Ferdinand", "rio@isObject.com", 25),
  new Student(3, "Nemanja", "Vidic", "nemanja@isObject.com", 32),
  new Student(4, "Fredrik", "ljungberg", "fredrik@isObject.com", 32),
  new Student(5, "Lotta", "Schelin", "lotta@isObject.com", 21),
  new Student(6, "Stina", "Olofsson", "sina@isObject.com", 21),
]
