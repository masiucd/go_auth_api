import { CourseMediator } from "./mediator"
import { DisplayInfo } from "../types"
class Course {
  id: number
  title: string
  description: string
  duration: string
  courseMediator: null | CourseMediator
  constructor(id: number, title: string, description: string, duration: string) {
    this.id = id
    this.title = title
    this.description = description
    this.duration = duration
    this.courseMediator = null
  }

  displayInfo(): DisplayInfo {
    return {
      title: this.title,
      duration: this.duration,
    }
  }
  send() {}
  receive() {}
}

const courseMediator = new CourseMediator()

const loadCourses = (): Course[] => [
  new Course(1, "math", "math is wonderful", "6h"),
  new Course(2, "history", "history is good for you", "3h"),
  new Course(3, "swedish", "without swedish you will face some serious problems", "2h"),
  new Course(4, "english", "the global language, learn it NOW!!!", "5h"),
]

const registerCourses = () => {
  for (let course of loadCourses()) {
    courseMediator.registerCourse(course)
  }
}

export { Course, loadCourses, registerCourses }
