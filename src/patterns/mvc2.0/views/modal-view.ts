import { Student } from "../models/student"
import { Teacher } from "../models/teacher"

export class ModalView<T, S> {
  list: T[]
  data: S
  constructor(list: T[], data: S) {
    this.list = list
    this.data = data
  }

  render(): void {}
}
