export default class Snake {
  constructor(map) {
    this.map = map

    // 蛇
    this.snake = []

    // 移动方向
    this.direction = 'right'

    // 初始化的时候把蛇生成好
    this.creSnake()
  }

  // 1、计算蛇头出现在哪一个坐标
  pos() {
    // 计算位置
    // 判断一下，原先有个蛇头，根据方向判断
    // 原先没有蛇头，直接在 0 0 位置
    const head = this.snake[0]
    // 没有头 --> 在 0 0 
    if (!head) {
      return { left: 0, top: 0 }
    }

    // 有头,根据方向计算
    const obj = {
      left: head.offsetLeft,
      top: head.offsetTop
    }
    switch (this.direction) {
      case 'top': obj.top -= 20; break
      case 'left': obj.left -= 20; break
      case 'right': obj.left += 20; break
      case 'bottom': obj.top += 20; break
    }

    return obj
  }

  // 2、给蛇加一个头
  creHead() {
    // 先拿到蛇头的坐标
    const pos = this.pos()

    // 判断原先是否有头
    const head = this.snake[0]
    if (head) {
      head.className = 'body'
    }

    const div = document.createElement('div')
    div.className = 'head'
    div.style.left = pos.left + 'px'
    div.style.top = pos.top + 'px'
    this.snake.unshift(div)
    this.map.appendChild(div)
  }

  // 3、初始化一条蛇
  creSnake() {
    // 默认初始化三节
    for (let i = 0; i < 3; i++) {
      this.creHead()
    }
  }

  // 4、蛇移动起来
  move() {
    // pop() -- 删除数组的最后一个值
    const body = this.snake.pop()
    // 删除最后一节
    body.remove()
    // 添加一个头
    this.creHead()
  }

  // 5、判断是否死亡
  isDie() {
    const head = this.snake[0]
    const x = head.offsetLeft
    const y = head.offsetTop

    // 判断
    if (x < 0 || y < 0 || x >= this.map.clientWidth || y >= this.map.clientHeight) {
      return true
    } else {
      // 判断是否重叠
      const tmp = this.snake.slice(1)
      let flag = false
      tmp.forEach(item => {
        if (x === item.offsetLeft && y === item.offsetTop) {
          flag = true
        }
      })
      return flag
    }
  }

  // 6、判断吃到食物
  isEat(food) {
    const x = this.snake[0].offsetLeft
    const y = this.snake[0].offsetTop

    if (x === food.x && y === food.y) {
      return true
    } else {
      return false
    }
  }
}