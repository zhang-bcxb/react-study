import React from 'react'
// 引入子组件
import Son from "./Son";

class App extends React.PureComponent {

  // 定义响应式数据
  state = {
    msg: '父组件往子组件传值'
  }

  // 父组件往子组件传递一个方法
  // 子组件会调用该方法，向父组件进行传值
  changeMsg(data) {
    console.log(data)
    this.setState({
      msg: data
    })
  }

  render() {
    return <div>
      <h1>我是父组件【App】</h1>
      <Son fdata={this.state.msg} changeMsg={this.changeMsg.bind(this)}></Son>
    </div>
  }
}

export default App;
