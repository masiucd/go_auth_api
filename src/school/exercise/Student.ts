import { Course } from "./Course"
import { Person } from "./Person"

export class Student extends Person {
  courses: Course[]

  constructor(id: string, firstName: string, lastName: string, courses: Course[]) {
    super(id, firstName, lastName)
    this.courses = courses
  }
}
