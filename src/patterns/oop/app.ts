class ScoreDictionary {
  score: number

  constructor() {
    this.score = 0
  }

  increment() {
    this.score++
  }
  decrement() {
    this.score--
  }
}

class User extends ScoreDictionary {
  name: string
  constructor(name: string) {
    super()
    this.name = name
  }
}

const u1 = new User("Mike")
console.log(u1)
u1.increment()
console.log(u1)
