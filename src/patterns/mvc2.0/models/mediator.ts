import { Admin, loadAdmin } from "./admin"
import { Student } from "./student"

class AdminMediator {
  collection: Record<string, Student | Admin>
  admin: Admin
  constructor() {
    this.collection = {}
    this.admin = loadAdmin()
  }
  register(human: Student | Admin) {
    this.collection[human.firstName] = human
    human.adminMediator = this
  }

  send(message: string, from: Student, to?: Student, admin?: Admin) {
    if (to && admin) {
      console.log("if")
      to.receive(message, from)
      // admin?.receive(message, from)
    } else {
      console.log("else")
      Object.keys(this.collection).forEach(key => {
        if (this.collection[key] !== from) {
          this.collection[key].receive(message, from)
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
// class CourseMediator {
//   courses: Record<string, Course>
//   constructor() {
//     this.courses = {}
//   }

//   registerCourse(course: Course) {
//     this.courses[course.title] = course
//     course.courseMediator = this
//   }

//   send(message: string, from: Course, to?: Course) {
//     //
//   }
// }

export { AdminMediator }
