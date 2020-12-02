export type Subject = "Math" | "English" | "Swedish" | "History"

export type SubscriberFn = (id: number) => void
export interface TeacherStudentConstruct {
  displayInfo: () => DisplayInfo
}

export interface DisplayInfo {
  [key: string]: string
}
