import React from 'react'
// 引入子组件
import Son from "./Son";

class App extends React.PureComponent {

  // 定义响应式数据
  state = {}

  render() {
    return <div>
      <h1>我是父组件【App】</h1>
      {/*<Son data='父组件传递数据给子组件'></Son>*/}
      {/*<Son data={123}></Son>*/}
      <Son></Son>
    </div>
  }
}

export default App;
