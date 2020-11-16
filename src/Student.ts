import { School } from "./School"

interface IStudent {
  name: string
  age: number
  school: School
}

export class Student implements IStudent {
  name: string
  age: number
  school: School

  constructor(name: string, age: number) {
    this.name = name
    this.age = age
  }
  addSchool(school: School): this {
    this.school = school
    return this
  }
}
