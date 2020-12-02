import { nanoid } from "nanoid"
import { DisplayInfo } from "../types"

export class Course {
  id: number
  title: string
  description: string
  duration: string
  constructor(id: number, title: string, description: string, duration: string) {
    this.id = id
    this.title = title
    this.description = description
    this.duration = duration
  }
  displayInfo(): DisplayInfo {
    return {
      title: this.title,
      duration: this.duration,
    }
  }
}

export const loadCourses = () => [
  new Course(1, "math", "math is wonderful", "6h"),
  new Course(2, "history", "history is good for you", "3h"),
  new Course(3, "swedish", "without swedish you will face some serious problems", "2h"),
  new Course(4, "english", "the global language, learn it NOW!!!", "5h"),
]
