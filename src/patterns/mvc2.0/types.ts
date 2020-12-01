export type Subject = "Math" | "English" | "Swedish" | "History"

export interface TeacherStudentConstruct {
  displayInfo: () => DisplayInfo
}

export interface DisplayInfo {
  [key: string]: string
}
