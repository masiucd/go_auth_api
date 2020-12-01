type F<T> = {
  [key: string]: T
}

class Member {
  name: string
  chatroom: Record<string, any>
  constructor(name: string) {
    this.name = name
    this.chatroom = {}
  }

  send(message: string, toMember: Member) {
    // message we want to send and where it is coming from , the current member
    // and where we sending this message to
    this.chatroom.send(message, this, toMember)
  }

  receive(message: string, fromMember: Member): string {
    // member sending to another member
    // message
    const messageData = `${fromMember.name} to ${this.name}: ${message}`
    console.log(messageData)
    return messageData
  }
}

// Mediator
class ChatRoom {
  members: Record<string, Member>
  constructor() {
    this.members = {}
  }
  addMember(member: Member) {
    this.members[member.name] = member
    member.chatroom = this
  }
  send(message: string, fromMember: Member, toMember: Member) {
    toMember.receive(message, fromMember)
  }
}

const chatRoom = new ChatRoom()
const mike = new Member("Mike")
const frank = new Member("Frank")
const tim = new Member("Tim")

chatRoom.addMember(mike)
chatRoom.addMember(frank)
chatRoom.addMember(tim)

mike.send("hello there Frank", frank)
tim.send("hello there Mike", mike)
