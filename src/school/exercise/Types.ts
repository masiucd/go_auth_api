import { Course } from "./Course"
import { Student } from "./Student"
import { Teacher } from "./Teacher"

export type Subject = "english" | "math" | "history" | "swedish"
export type ListType = Student[] | Teacher[] | Course[]
