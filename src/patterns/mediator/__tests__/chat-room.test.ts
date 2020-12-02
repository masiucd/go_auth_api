import * as chat from "../index"

describe("chat-room", () => {
  test("Chatroom should have expected structure ", () => {
    const chatroom = new chat.Chatroom()
    expect(typeof chatroom.register === "function")
    expect(typeof chatroom.send === "function")
    expect(typeof chatroom.participants === "object")

    let participants = Object.keys(chatroom.participants)
    expect(participants.length === 0)

    const harry = new chat.Participant("harry")
    const ron = new chat.Participant("ron")
    const harmione = new chat.Participant("harmione")

    chatroom.register(harry)
    chatroom.register(ron)
    chatroom.register(harmione)

    participants = Object.keys(chatroom.participants)
    expect(participants.length === 3)
  })
})
