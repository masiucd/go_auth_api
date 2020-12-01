import { ListView } from "../views/list-view"
import { loadCourses } from "../models/course"

export class CourseController {
  parentElement: HTMLDivElement
  coursesView: ListView
  constructor(parentElement: HTMLDivElement) {
    this.parentElement = parentElement
    this.coursesView = new ListView(this.parentElement, loadCourses(), "Courses", [
      "title",
      "duration",
    ])
  }

  init(): void {
    this.coursesView.init()
  }
}
