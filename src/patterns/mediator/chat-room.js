var Member = /** @class */ (function () {
    function Member(name) {
        this.name = name;
        this.chatroom = {};
    }
    Member.prototype.send = function (message, toMember) {
        // message we want to send and where it is coming from , the current member
        // and where we sending this message to
        this.chatroom.send(message, this, toMember);
    };
    Member.prototype.printChatRoom = function () {
        return this.chatroom;
    };
    Member.prototype.receive = function (message, fromMember) {
        // member sending to another member
        // message
        var messageData = fromMember.name + " to " + this.name + ": " + message;
        console.log(messageData);
        return messageData;
    };
    return Member;
}());
// Mediator
var ChatRoom = /** @class */ (function () {
    function ChatRoom() {
        this.members = {};
    }
    ChatRoom.prototype.addMember = function (member) {
        this.members[member.name] = member;
        member.chatroom = this;
    };
    ChatRoom.prototype.send = function (message, fromMember, toMember) {
        toMember.receive(message, fromMember);
    };
    return ChatRoom;
}());
var chatRoom = new ChatRoom();
var mike = new Member("Mike");
var frank = new Member("Frank");
var tim = new Member("Tim");
chatRoom.addMember(mike);
chatRoom.addMember(frank);
// chatRoom.addMember(tim)
mike.send("hello there", frank);
console.log(mike.printChatRoom());
