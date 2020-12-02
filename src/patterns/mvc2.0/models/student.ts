import { nanoid } from "nanoid"
import { Person } from "./Person"

export class Student extends Person {
  constructor(id: string, firstName: string, lastName: string, email: string, age: number) {
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
  new Student(nanoid(), "Frank", "Mellberg", "frank@isObject.com", 21),
  new Student(nanoid(), "Rio", "Ferdinand", "rio@isObject.com", 25),
  new Student(nanoid(), "Nemanja", "Vidic", "nemanja@isObject.com", 32),
  new Student(nanoid(), "Fredrik", "ljungberg", "fredrik@isObject.com", 32),
  new Student(nanoid(), "Lotta", "Schelin", "lotta@isObject.com", 21),
  new Student(nanoid(), "Stina", "Olofsson", "sina@isObject.com", 21),
]
