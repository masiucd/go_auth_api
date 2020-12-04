import { Admin, loadAdmin } from "./admin"
import { Course } from "./course"
import { Student } from "./student"

class AdminMediator {
  students: Record<string, Student>
  admin: Admin
  constructor() {
    this.students = {}
    this.admin = loadAdmin()
  }
  registerStudent(student: Student) {
    this.students[student.firstName] = student
    student.adminMediator = this
  }

  send(message: string, from: Student, to?: Student, admin?: Admin) {
    if (to) {
      to.receive(message, from)
    } else {
      Object.keys(this.students).forEach(key => {
        if (this.students[key] !== from) {
          this.students[key].receive(message, from)
        }
      })
    }
  }
}

// class StudentMediator {
//   students: Record<string, Student>
//   constructor() {
//     this.students = {}
//   }

//   registerStudent(student: Student) {
//     this.students[student.firstName] = student
//     student.adminMediator = this
//   }

//   send(message: string, from: Student, to?: Student) {
//     if (to) {
//       to.receive(message, from)
//     } else {
//       Object.keys(this.students).forEach(key => {
//         if (this.students[key] !== from) {
//           this.students[key].receive(message, from)
//         }
//       })
//     }
//   }
// }
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

export { CourseMediator, AdminMediator }
