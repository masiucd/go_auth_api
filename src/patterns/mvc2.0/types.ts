export type Subject = "Math" | "English" | "Swedish" | "History"

export interface TeacherStudentConstruct {
  displayInfo: () => DisplayInfo
}

interface DisplayInfo {
  [key: string]: string
}
