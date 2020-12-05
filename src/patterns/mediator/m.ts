class Master {
  members: any[]
  constructor() {
    this.members = []
  }

  send(message: any, from: any, to?: any) {
    if (to) {
      to.receive(message, from)
    } else {
      console.log(this.members)
    }
  }

  register(member: any) {
    this.members.push(member)
    member.masterRoom = this
  }
}

class A {
  masterRoom: null | Master
  name: string
  constructor(name: string) {
    this.masterRoom = null
    this.name = name
  }
  receive(message: any, from: any) {
    console.log(message, from.name)
  }
}
class S {
  masterRoom: null | Master
  name: string
  constructor(name: string) {
    this.masterRoom = null
    this.name = name
  }
  send(msg: string, to: any) {
    this.masterRoom?.send(msg, this, to)
  }
  receive(message: any, from: any) {
    console.log(message, from)
  }
}

const mmm = new Master()

const x1 = new S("bob")
const x2 = new S("frank")
const x3 = new S("linda")
const x4 = new S("logan")

const ad = new A("Steven")

mmm.register(x1)
mmm.register(x2)
mmm.register(x3)
mmm.register(x4)
mmm.register(ad)

x1.send("hello admin", ad)

console.log(mmm)
