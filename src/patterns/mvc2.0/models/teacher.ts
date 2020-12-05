import { Person } from "./Person"
import { DisplayInfo, Subject, TeacherStudentConstruct } from "../types"
import { nanoid } from "nanoid"

export class Teacher extends Person implements TeacherStudentConstruct {
  subjects: Subject[]
  constructor(id: number, firstName: string, lastName: string, email: string, age: number) {
    super(id, firstName, lastName, email, age)
    this.subjects = []
  }

  displayInfo(): DisplayInfo {
    return {
      name: `${this.firstName}-${this.lastName}`,
      email: this.email,
      age: `${this.age}`,
    }
  }

  set addSubject(subject: Subject) {
    this.subjects.push(subject)
  }
}

export const loadTeachers = () => [
  new Teacher(1, "Frank", "Smith", "frank@io.com", 43),
  new Teacher(2, "Logan", "Jonsson", "logan@io.com", 47),
  new Teacher(3, "Mia", "Greger", "mia@io.com", 41),
  new Teacher(4, "Boris", "Rooney", "frank@io.com", 53),
]
