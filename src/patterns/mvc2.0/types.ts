export type Subject = "Math" | "English" | "Swedish" | "History"

export interface TeacherStudentConstruct {
  displayInfo: () => Record<string, string>
}
