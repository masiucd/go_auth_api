import { AdminMediator, init as mediatorInit } from "./mediator"

class Admin {
  private static instance: Admin
  id: number
  firstName: string
  slug: string
  isAdmin: boolean

  adminMediator: null | AdminMediator

  constructor() {
    this.id = 99
    this.firstName = "Alfred"
    this.slug = "I am the boss 💰!!!"
    this.isAdmin = true
    this.adminMediator = null
  }
  static getInstance() {
    if (!Admin.instance) {
      Admin.instance = new Admin()
    }
    return Admin.instance
  }

  get getMessages() {
    return this.adminMediator?.messageBox
  }
}

function init() {
  const loadAdmin = () => new Admin()
  mediatorInit().loadMediator().register(loadAdmin())
  return {
    admin: loadAdmin(),
  }
}

export { Admin, init }
