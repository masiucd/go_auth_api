class Logger {
  private static instance: Logger
  logs: string[] | undefined

  constructor() {
    if (!Logger.instance) {
      this.logs = []
      Logger.instance = this
    }
    return Logger.instance
  }

  addLog(log: string): void {
    if (this.logs) {
      this.logs.push(log)
    }
  }

  get size() {
    if (this.logs) {
      console.log(this.logs.length)
      return this.logs.length
    }
  }
  get allLogs() {
    if (this.logs) {
      console.log(this.logs)
      return this.logs
    }
  }

  pop() {
    if (this.logs) {
      this.logs.pop()
    }
  }
}

const logger = new Logger()
// Object.freeze(logger)
export { logger }
