export default class Food {
  constructor(map) {
    this.map = map

    // 创建一个食物
    this.food = document.createElement('div')
    this.food.className = 'food'
    // 插入到地图
    this.map.appendChild(this.food)

    // 两个变量记录坐标
    this.x = 0
    this.y = 0
    this.newFood()
  }
  // 生成随机坐标
  newFood() {
    // 计算横向和纵向一共能放多少食物
    const xNum = this.map.clientWidth / 20
    const yNum = this.map.clientHeight / 20

    // 随机生成 0 ~ 40 和 0 ~ 30 之间的随机数
    const x = Math.floor(Math.random() * xNum)
    const y = Math.floor(Math.random() * yNum)

    // 真正的坐标位置，x 和 y * 20
    this.x = x * 20
    this.y = y * 20

    // 给this.food赋值
    this.food.style.left = this.x + 'px'
    this.food.style.top = this.y + 'px'
  }
}