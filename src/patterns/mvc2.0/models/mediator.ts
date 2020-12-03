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

  send(message: string, from: Student, to?: Student) {
    //
  }
}
class CourseMediator {
  courses: Record<string, Course>
  constructor() {
    this.courses = {}
  }

  registerCourse(course: Course) {
    this.courses[course.title] = course
    course.courseMediator = this
  }

  send(message: string, from: Course, to?: Course) {
    //
  }
}

export { StudentMediator, CourseMediator }
