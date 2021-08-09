// 引入食物和蛇
import Food from "./food.js"
import Snake from "./snake.js"

export default class Game {
  constructor(ele, score) {
    this.map = document.querySelector(ele)

    // 获取积分榜
    this.score = document.querySelector(score)

    // 获取等级
    this.level = 4

    // 创建食物
    this.food = new Food(this.map)

    // 创建一条蛇
    this.snake = new Snake(this.map)

    // 准备一个变量接受定时器返回值
    this.timer = 0

    //  准备一个变量计数
    this.count = 0

    this.change()
  }

  // 1、开始游戏
  start() {
    this.timer = setInterval(() => {
      this.snake.move()
      // 判断是否吃到食物
      if (this.snake.isEat(this.food)) {
        this.updateScore()
        // 蛇加一节
        this.snake.creHead()
        // 食物换位置
        this.food.newFood()
      }
      // 判断是否撞上 
      if (this.snake.isDie()) {
        clearInterval(this.timer)
        setTimeout(() => {
          this.restart()
          alert('Game Over!')
        }, 500)
      }
    }, 500 / this.level)


  }

  // 2、暂停游戏
  stop() {
    clearInterval(this.timer)
  }

  // 3、重新开始
  restart() {
    window.location.reload()
  }

  // 4、修改方向
  change() {
    document.addEventListener('keydown', (e) => {
      e = e || window.event
      const code = e.keyCode || e.which

      switch (code) {
        case 37: this.snake.direction = 'left'; break
        case 38: this.snake.direction = 'top'; break
        case 39: this.snake.direction = 'right'; break
        case 40: this.snake.direction = 'bottom'; break
      }
    })
  }

  // 5、积分
  updateScore() {
    this.count++
    this.score.value = this.count * 10 + this.level * 10

    if (this.count % 15 === 0) {
      // this.level++
      this.stop()
      this.start()
    }
  }
}