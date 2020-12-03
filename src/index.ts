import { App } from "./patterns/mvc2.0/controllers/app"
import { TeacherController } from "./patterns/mvc2.0/controllers/teacher"
import { StudentController } from "./patterns/mvc2.0/controllers/student"
;(() => {
  const createElement = (tag: string, className: string): HTMLElement => {
    const element = document.createElement(tag)
    element.classList.add(className)
    return element
  }
  new App(
    new TeacherController(document.getElementById("teacher") as HTMLDivElement),
    new StudentController(document.getElementById("student") as HTMLDivElement)
  ).render()
})()
