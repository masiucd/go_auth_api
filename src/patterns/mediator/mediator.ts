// interface MessageBox {
//   message: string
//   from: Person | Admin
// }
// class Mediator {
//   messageBox: MessageBox[]
//   members: Person[] | Admin[]
//   members: Student[] | Admin[]
//   constructor() {
//     this.messageBox = []
//     this.members = []
//   }

//   register(member: Person | Admin) {
//     // @ts-ignore
//     this.members.push(member)
//     member.mediator = this
//   }

//   send(message: string, from: Person | Admin) {
//     const obj = { message, from }
//     this.messageBox.push(obj)
//     console.log(message)
//   }

//   get getMessageBox() {
//     return this.messageBox
//   }
// }

// interface Person {
//   name: string
//   age: number
//   mediator: null | Mediator
// }

// class Student implements Person {
//   name: string
//   age: number
//   mediator: null | Mediator
//   constructor(name: string, age: number) {
//     this.name = name
//     this.age = age
//     this.mediator = null
//   }
//   send(message: string) {
//     this.mediator?.send(message, this)
//   }
//   receive(message: string, from: Admin | Student) {
//     console.log(`${message} ${from.name}`)
//     if (this.mediator && this.mediator?.messageBox.length > 0) {
//       console.log(this.mediator.messageBox)
//     }
//     return `${message} ${from.name}`
//   }
// }

// class Admin implements Person {
//   name: string
//   age: number
//   mediator: null | Mediator
//   constructor(name: string, age: number) {
//     this.name = name
//     this.age = age
//     this.mediator = null
//   }
//   get getMessagesFromMediator() {
//     return this.mediator?.messageBox
//   }
// }

// const mm = new Mediator()

// const frank = new Student("frank", 22)
// const bob = new Student("bob", 29)
// const mike = new Student("mike", 21)

// const logan = new Admin("Logan", 52)

// mm.register(frank)
// mm.register(bob)
// mm.register(frank)
// mm.register(logan)

// frank.send("hello")
// console.log(mm.getMessageBox)
// console.log(logan.mediator?.messageBox)
// console.log(
//   logan.getMessagesFromMediator?.forEach(x => {
//     console.log(x.message, "from " + x.from.name)
//   }),
// )
