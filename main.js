import Game from "./game.js";

// 业务逻辑
const g = new Game('.map', '.score')

const startBtn = document.querySelector('.start')
startBtn.addEventListener('click', () => {
  g.start()
})

const stopBtn = document.querySelector('.stop')
stopBtn.addEventListener('click', () => [
  g.stop()
])

const restartBtn = document.querySelector('.restart')
restartBtn.addEventListener('click', () => [
  g.restart()
])

const selLevel = document.querySelector('.level')
selLevel.addEventListener('click', () => {
  g.level = selLevel.value
})