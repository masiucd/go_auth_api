import { Teacher } from "./Teacher"

interface ISchool {
  schoolName: string
  teachers: Teacher[]
  year: number
}

export class School implements ISchool {
  schoolName: string
  teachers: Teacher[] = []
  year: number

  constructor(schoolName: string, year: number) {
    this.schoolName = schoolName
    this.year = year
  }

  addTeacher(teacher: Teacher) {
    this.teachers.push(teacher)
    return this
  }
}
