import { nanoid } from "nanoid"
import { Teacher } from "./Teacher"
import { Student } from "./Student"
import { Subject } from "./Types"

export class Course {
  id: string
  subject: Subject
  students: Student[]
  teacher: Teacher
  constructor(
    id: string,
    subject: Subject,
    students: Student[],
    teacher: Teacher,
  ) {
    this.id = id
    this.subject = subject
    this.students = students
    this.teacher = teacher

    // this.teacher.courses.push(this)
    // this.students.forEach(student => {
    //   student.courses.push(this)
    // })
  }

  addStudent(student: Student, subject: Subject) {
    this.students.push(student)
    student.subjects.push(subject)
  }

  removeStudent(studentID: string): void {
    this.students = this.students.filter(student => student.id !== studentID)
  }
  getStudent(studentID: string): Student | undefined {
    const student = this.students.find(student => student.id === studentID)
    return student && student
  }
}
