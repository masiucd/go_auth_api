export const game = (() => {
  let score = 0
  let scoreContainer = document.createElement("div") as HTMLDivElement

  const updateScore = (newScore: number) => {
    score = newScore
    const countTracker = document.getElementById(
      "count-tracker"
    ) as HTMLHeadingElement
    countTracker.innerHTML = ` <span>${score}</span> `
  }

  const increment = () => {
    updateScore(score + 1)
  }
  const decrement = () => {
    updateScore(score - 1)
  }

  const getScore = () => {
    console.log(score)
    return score
  }

  const newGame = () => updateScore(0)

  const startGame = () => {
    newGame()
  }

  return {
    score,
    increment,
    updateScore,
    getScore,
    startGame,
    decrement,
    newGame,
  }
})()
