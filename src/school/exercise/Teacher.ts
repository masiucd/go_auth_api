import { Person } from "./Person"
import { Subject } from "./Types"

export class Teacher extends Person {
  subjects: Subject[]

  constructor(
    id: string,
    firstName: string,
    lastName: string,
    subjects: Subject[],
  ) {
    super(id, firstName, lastName)
    this.subjects = subjects
  }
}
