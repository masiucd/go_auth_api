type Subject = "math" | "sports" | "history" | "english"

interface ITeacher {
  firstName: string
  lastName: string
  subject: Subject[]
  age: number
}

export class Teacher implements ITeacher {
  firstName: string
  lastName: string
  subject: Subject[]
  age: number

  constructor(firstName: string, lastName: string, age: number) {
    this.firstName = firstName
    this.lastName = lastName
    this.subject = []
    this.age = age
  }

  birthDayRun(): this {
    this.age++
    return this
  }
  addSubject(subject: Subject): this {
    this.subject.push(subject)
    return this
  }
}
