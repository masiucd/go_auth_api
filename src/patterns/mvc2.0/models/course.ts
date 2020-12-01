import { nanoid } from "nanoid"
import { DisplayInfo } from "../types"

export class Course {
  id: string
  title: string
  description: string
  duration: string
  constructor(id: string, title: string, description: string, duration: string) {
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
  new Course(nanoid(), "math", "math is wonderful", "6h"),
  new Course(nanoid(), "history", "history is good for you", "3h"),
  new Course(nanoid(), "swedish", "without swedish you will face some serious problems", "2h"),
  new Course(nanoid(), "english", "the global language, learn it NOW!!!", "5h"),
]
