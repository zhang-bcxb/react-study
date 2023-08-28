import React from 'react'

/**
 * PureComponent 优化版的 Component
 *    解决普通 Component 的性能问题
 *    PureComponent 会根据 state 是否改变来决定是否更新
 *    setState，设置相同的值，也会触发组件更新，PureComponent 可以解决该问题
 */
class App extends React.PureComponent {

  // 定义响应式数据
  state = {
    msg: "你好，我是编程细胞",
    count: 0,
    // 对象和数组都是浅拷贝，修改的时候注意属性要写全
    obj: {
      a: 1,
      b: 2,
      c: 3
    },
    // 引用类型（数组 & 对象）判断他是否改变的原理是看他的内存地址，而不是内容
    arr: [1, 2, 3, 4]
  }

  // 添加数组
  addArr() {
    this.setState({
      arr: [...this.state.arr, this.state.arr.length + 1]
    }, () => {
      console.log(this.state)
    })
  }

  render() {
    return <div>
      <h1>{this.state.arr}</h1>
      <button onClick={this.addArr.bind(this)}>添加数组</button>
    </div>
  }
}

export default App;
