import { School } from "../oop/School"

// interface IStudent {
//   name: string
//   age: number
//   school: School | null
// }

// export class Student implements IStudent {
//   name: string
//   age: number
//   school: School | null

//   constructor(name: string, age: number) {
//     this.name = name
//     this.age = age
//     this.school = null
//   }
//   addSchool(school: School): this {
//     this.school = school
//     return this
//   }
// }

const student = (() => {
  let name: string
  let age: number
  let school: School | null

  const setName = (newName: string): string => {
    name = newName
    return name
  }
  const setAge = (newAge: number): number => {
    age = newAge
    return age
  }
  const setSchool = (newSchool: School): School => {
    school = newSchool
    return school
  }

  const getProperties = () => {
    return {
      name,
      age,
      school,
    }
  }

  return { setName, setAge, setSchool, getProperties }
})()

const s1 = new School("foo-school", 1902)

// student.setName("Frank")
// student.setAge(12)
// student.setSchool(s1)

// console.log(student.getProperties())
