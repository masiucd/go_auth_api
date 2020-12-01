import { App } from "./patterns/mvc2.0/controllers/app"
import { CourseController } from "./patterns/mvc2.0/controllers/course"
import { TeacherController } from "./patterns/mvc2.0/controllers/teacher"
;(() => {
  const createElement = (tag: string, className: string): HTMLElement => {
    const element = document.createElement(tag)
    element.classList.add(className)
    return element
  }
  new App(
    new TeacherController(document.getElementById("teacher") as HTMLDivElement),
    new CourseController(document.getElementById("course") as HTMLDivElement),
  ).render()
})()
