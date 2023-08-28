import React from 'react'
// 引入样式
import './App.css'
// 引入子组件
import Son from "./Son";

class App extends React.PureComponent {

  // 定义响应式数据
  state = {}

  render() {
    return <div>
      <h1 className='father' style={{
        color: 'yellow',
        fontSize: '80px'
      }}>我是父组件【App】</h1>
      <h1 className='son'>我是父组件【App】</h1>
      <Son></Son>
    </div>
  }
}

export default App;
