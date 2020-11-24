import { Teacher } from "../oop/Teacher"

const school = (() => {
  let schoolName: string = ""
  let teachers = [] as Teacher[]
  let year: number

  const addTeacher = (teacher: Teacher) => {
    teachers.push(teacher)
  }
  const setYear = (newYear: number) => {
    year = newYear
    return year
  }
  const setSchoolName = (newSchoolName: string) => {
    schoolName = newSchoolName
    return schoolName
  }
  const getTeachers = () => {
    return teachers
  }
  const getName = () => {
    return schoolName
  }

  return {
    addTeacher,
    setYear,
    setSchoolName,
    getTeachers,
    getName,
  }
})()

const t1 = new Teacher("bob", "smith", 41)
t1.addSubject("math")
t1.addSubject("english")
const t2 = new Teacher("mia", "smith", 52)
t2.addSubject("history")
t2.addSubject("sports")

// school.setSchoolName("Backa")
// school.addTeacher(t1)
// school.addTeacher(t2)
// console.log(school.getName())
// console.log(school.getTeachers())
