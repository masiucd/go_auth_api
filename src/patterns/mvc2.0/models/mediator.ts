import { Course } from "./course"
import { Student } from "./student"

class StudentMediator {
  students: Record<string, Student>
  constructor() {
    this.students = {}
  }

  registerStudent(student: Student) {
    this.students[student.firstName] = student
    student.studentMediator = this
  }

  send(message: string, from: Course | Student, to: Course | Student) {
    //
  }
}
class CourseMediator {
  courses: Record<string, Course>
  constructor() {
    this.courses = {}
  }

  registerStudent(course: Course) {
    this.courses[course.title] = course
    course.courseMediator = this
  }

  send(message: string, from: Course | Student, to: Course | Student) {
    //
  }
}

export { StudentMediator, CourseMediator }
