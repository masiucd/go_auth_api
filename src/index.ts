import { App } from "./patterns/mvc2.0/controllers/app"
import { TeacherController } from "./patterns/mvc2.0/controllers/teacher"
import { StudentController } from "./patterns/mvc2.0/controllers/student"
import { AdminController } from "./patterns/mvc2.0/controllers/admin"
;(() => {
  new App(
    new TeacherController(document.getElementById("teacher") as HTMLDivElement),
    new StudentController(document.getElementById("student") as HTMLDivElement),
    new AdminController(document.getElementById("admin") as HTMLDivElement),
  ).render()
})()
