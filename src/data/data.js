let userArr = ['张三', '李四', '王五', '马六']

// 订单增删改查文件
class Order {
  constructor(i, obj = {}) {
    this.id = "0000" + i
    this.date = obj.date || "2023-08-" + Math.floor(Math.random() * 30 + 1)
    this.no = "YF000" + Math.floor(Math.random() * 99999)
    this.name = obj.name || "订单" + i
    //0-进行中 1-已完成 2-已延期
    this.status = obj.status || Math.floor(Math.random() * 3)
    this.user = userArr[Math.floor(Math.random() * 4)]
    this.price = Math.floor(Math.random() * 9999999)
  }

  // 使用 static 关键字，表示共享类方法
  static find(obj = {}) {
    if (obj.id) {
      return storage.find(s => s.id === obj.id)
    } else if (obj.date || obj.name || obj.status) {
      let tempArr = storage.filter(s => s.date.includes(obj.date))
          .filter(s => s.name.includes(obj.name))
      if (obj.status) {
        tempArr = tempArr.filter(s => s.status == obj.status)
      }
      return tempArr
    }
    return storage
  }


  delete() {
    console.log(this)
    console.log(storage.indexOf(this))
    return storage.splice(storage.indexOf(this), 1)
  }

  save() {
    console.log(this)
    storage.indexOf(this) === -1 && storage.unshift(this)
    return true
  }

  update(obj) {
    console.log(this)
    let index = storage.indexOf(this)
    if (index !== -1) {
      storage[index].date = obj.date
      storage[index].name = obj.name
      storage[index].status = obj.status
    }
    return true
  }
}

let storage = []
for (let i = 1; i <= 10; i++) {
  storage.push(new Order(i))
}

// console.log(storage)

export default Order
