export class Chatroom {
  participants: Record<string, Participant>
  constructor() {
    this.participants = {}
  }

  register(participant: Participant) {
    this.participants[participant.name] = participant
    participant.chatroom = this
  }

  send(message: string, from: Participant, to?: Participant) {
    if (to) {
      to.receive(message, from)
    } else {
      Object.keys(this.participants).forEach(key => {
        if (this.participants[key] !== from) {
          this.participants[key].receive(message, from)
        }
      })
    }
  }
}

export class Participant {
  name: string
  chatroom: null | Chatroom
  constructor(name: string) {
    this.name = name
    this.chatroom = null
  }
  send(message: string, to?: Participant) {
    this.chatroom?.send(message, this, to)
  }
  receive(message: string, from: Participant) {
    console.log(`${message} - From ${from.name}`)
  }
}

// const bob = new Participant("bob")
// const greg = new Participant("greg")
// const mia = new Participant("mia")

// const chat = new Chatroom()

// chat.register(bob)
// chat.register(greg)
// chat.register(mia)

// bob.send("hello greg", greg)
// bob.send("hello everyone")
