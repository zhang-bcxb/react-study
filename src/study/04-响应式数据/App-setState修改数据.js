import React from 'react'

/**
 * setState 修改数据关键点：
 *    通过浅合并来修改数据
 *    调用setState方法会触发更新，修改state并不会触发更新
 */
class App extends React.Component {

  // 定义响应式数据
  state = {
    msg: "你好，我是编程细胞",
    count: 0,
    // 对象和数组都是浅拷贝，修改的时候注意属性要写全
    obj: {
      a: 1,
      b: 2,
      c: 3
    }
  }

  // 更新响应式数据
  addCount() {
    // setState方法的修改是异步的
    this.setState({
      count: ++this.state.count,
      obj: {
        ...this.state.obj,
        c: 999
      }
    }, () => {
      console.log(this.state)
    })
  }

  render() {
    return <div>
      <h1>{this.state.msg}</h1>
      <h1>{this.state.count}</h1>
      <h1>{this.state.obj.a}</h1>
      <h1>{this.state.obj.c}</h1>
      <button onClick={this.addCount.bind(this)}>修改</button>
    </div>
  }
}

export default App;
