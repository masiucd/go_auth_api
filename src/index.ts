// import * as School from "./School"
// import * as Teacher from "./Teacher"
// import * as Student from "./Student"

import { TodoView } from "./patterns/mvc/views/todo-view"

// import { game } from "./patterns/the_revealing_module_pattern/score"

// type Xs = Student.Student[] | Teacher.Teacher[] | School.School[]

function createElement(elementType: string) {
  return document.createElement(elementType)
}

// const subjectIterate = (xs: string[]) => {
//   return xs.map(item => `<span class="item ${item}">${item}</span>`).join(",")
// }
// const teachersIterate = (xs: Teacher.Teacher[]) => {
//   return xs
//     .map(
//       item =>
//         `<span class="item ${item.firstName}"> FirstName: ${item.firstName} LastName: ${item.lastName}</span>`
//     )
//     .join(",")
// }

// const renderList = (list: Xs): HTMLUListElement => {
//   const listElement = createElement("ul") as HTMLUListElement

//   const xs = [...list]

//   for (let item of xs) {
//     if ("name" in item) {
//       listElement.innerHTML += ` <li> ${item.name} ${item.age}  ${
//         item.school ? item.school.schoolName : ""
//       } </li>`
//     }
//     if ("firstName" in item) {
//       listElement.innerHTML += ` <li> ${item.firstName} ${
//         item.age
//       } ${subjectIterate(item.subject)}   </li> `
//     }
//     if ("schoolName" in item) {
//       listElement.innerHTML += ` <li> ${item.schoolName} ${
//         item.year
//       } ${teachersIterate(item.teachers)} </li> `
//     }
//   }
//   return listElement
// }

// function main(): HTMLDivElement {
//   const element = createElement("div") as HTMLDivElement

//   const bob = new Teacher.Teacher("Bob", "smith", 44)
//   const tina = new Teacher.Teacher("Tina", "Frank", 44)
//   const mike = new Teacher.Teacher("Mike", "Jonsson", 44)
//   const greg = new Teacher.Teacher("Greg", "Jonsson", 44)

//   bob.addSubject("sports")
//   bob.addSubject("history")

//   tina.addSubject("math")
//   tina.addSubject("sports")

//   mike.addSubject("math")
//   mike.addSubject("english")

//   greg.addSubject("math")
//   greg.addSubject("english")

//   const backa = new School.School("Backa school", 1892)
//   const brunnsbo = new School.School("Brunnsbo school", 1975)

//   backa.addTeacher(bob)
//   backa.addTeacher(tina)
//   brunnsbo.addTeacher(mike)
//   brunnsbo.addTeacher(greg)

//   const ron = new Student.Student("Ron", 12)
//   const lina = new Student.Student("Lina", 12)
//   const klara = new Student.Student("Klara", 12)

//   ron.addSchool(backa)
//   lina.addSchool(backa)
//   klara.addSchool(brunnsbo)

//   const studentsList = [ron, lina, klara]
//   const teacherList = [bob, tina, mike, greg]
//   const schoolList = [brunnsbo, backa]

//   const headingStudents = createElement("h3") as HTMLHeadingElement
//   headingStudents.innerText = "Students"

//   const headingTeachers = createElement("h3") as HTMLHeadingElement
//   headingTeachers.innerText = "Teachers"

//   const headingSchool = createElement("h3") as HTMLHeadingElement
//   headingSchool.innerText = "Schools"

//   element.appendChild(headingStudents)
//   element.appendChild(renderList(studentsList))

//   element.appendChild(headingTeachers)
//   element.appendChild(renderList(teacherList))

//   element.appendChild(headingSchool)
//   element.appendChild(renderList(schoolList))

//   // game.startGame()

//   return element
// }

// function main(): HTMLDivElement {
//   const element = createElement("div") as HTMLDivElement
//   const button = document.createElement("button") as HTMLButtonElement
//   const countTracker = document.createElement("h1") as HTMLHeadingElement
//   const incrementButton = document.createElement("button") as HTMLButtonElement
//   const decrementButton = document.createElement("button") as HTMLButtonElement

//   button.innerHTML = ` <span>New game</span> `
//   countTracker.innerHTML = ` <span>${game.score}</span> `
//   incrementButton.innerHTML = ` <span>+</span> `
//   decrementButton.innerHTML = ` <span>-</span> `

//   countTracker.id = "count-tracker"
//   element.appendChild(button)
//   element.appendChild(countTracker)
//   element.appendChild(incrementButton)
//   element.appendChild(decrementButton)

//   incrementButton.addEventListener("click", () => {
//     game.increment()
//   })
//   decrementButton.addEventListener("click", () => {
//     game.decrement()
//   })

//   button.addEventListener("click", () => {
//     game.newGame()
//   })

//   return element
// }
// root.id = "score"

function main(): HTMLDivElement {
  const element = createElement("div") as HTMLDivElement
  const todoView = new TodoView()

  element.innerHTML = `<main>${todoView.render()}</main>`

  return element
}

const root = createElement("main")
root.appendChild(main())
document.body.appendChild(root)
