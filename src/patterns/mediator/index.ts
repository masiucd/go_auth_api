interface IMessage {
  inspection: boolean
  message: string
  email: string
}

interface IColleague {
  canHandle: (message: IMessage) => any
  handle: (message: IMessage) => any
}

class Mediator {
  colleagues: Colleague[]
  constructor() {
    this.colleagues = []
  }

  register(colleague: Colleague) {
    this.colleagues.push(colleague)
  }

  isValidColleague(colleague: Colleague) {
    return typeof colleague.canHandle === "function" && typeof colleague.handle === "function"
  }

  send(message: any) {
    for (let colleague of this.colleagues) {
      if (colleague.canHandle(message)) {
        return colleague.handle(message)
      }
    }
  }
}

class Colleague implements IColleague {
  canHandle(message: IMessage): any {}
  handle(message: IMessage): any {}
}

class InspectionColleague extends Colleague {
  canHandle(message: IMessage) {
    const { inspection } = message
    return inspection === undefined ? false : true
  }
  handle(message: IMessage) {
    console.log("send to inspection" + message.message)
  }
}

class CustomerConfirmationColleague extends Colleague {
  canHandle(message: IMessage) {
    const { email } = message
    return email === undefined ? false : true
  }
  handle(message: IMessage) {
    console.log(`Customer confirmation ${message.message}`)
  }
}

function init() {
  //singleton
  const mediator = new Mediator()
  const inspection = new InspectionColleague()
  const customer = new CustomerConfirmationColleague()

  mediator.register(inspection)
  mediator.register(customer)

  mediator.send({ inspection: true, message: "to inspection" })
  mediator.send({ email: "foo@io.com", message: "we have received your confirmation" })
}
// init()
