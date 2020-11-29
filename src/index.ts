import { logger } from "./patterns/singleton/Logger"
;(() => {
  const root = document.getElementById("root")

  function A() {
    console.log("This is the A function")
    logger.addLog("foo")
    logger.addLog("bar")
    logger.allLogs
    logger.size
  }

  function B() {
    console.log("This is the B function")
    logger.allLogs
  }

  A()
  B()
})()
