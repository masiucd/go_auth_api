import { School } from "./School"

interface IStudent {
  name: string
  age: number
  school: School | null
}

export class Student implements IStudent {
  name: string
  age: number
  school: School | null

  constructor(name: string, age: number) {
    this.name = name
    this.age = age
    this.school = null
  }
  addSchool(school: School): this {
    this.school = school
    return this
  }
}
