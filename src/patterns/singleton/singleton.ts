const singletonWrapper = (() => {
  let instance = 0

  const init = () => {
    let randomNumber = Math.floor(Math.random() * 100)
    return randomNumber
  }
  return {
    getInstance() {
      if (!instance) {
        instance = init()
      }
      return instance
    },
  }
})()

const a = singletonWrapper.getInstance()
const b = singletonWrapper.getInstance()
console.log(a, b)
