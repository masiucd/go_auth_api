import { Teacher } from "./Teacher"

interface ISchool {
  name: string
  teachers: Teacher[]
  year: number
}

export class School implements ISchool {
  name: string
  teachers: Teacher[]
  year: number

  constructor(name: string, year: number) {
    this.name = name
    this.year = year
  }

  addTeacher(teacher: Teacher) {
    this.teachers.push(teacher)
    return this.teachers
  }
}
