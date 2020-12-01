export class Course {
  id: string
  title: string
  description: string
  duration: string
  constructor(id: string, title: string, description: string, duration: string) {
    this.id = id
    this.title = title
    this.description = description
    this.duration = duration
  }
}
