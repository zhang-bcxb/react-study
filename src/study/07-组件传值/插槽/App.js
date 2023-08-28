import React from 'react'
// 引入子组件
import Son from "./Son";

class App extends React.PureComponent {

  // 定义响应式数据
  state = {}

  render() {
    return <div>
      <h1>我是父组件【App】</h1>
      <Son dom={<h2>React 具名插槽</h2>}
           scopeSolt={(scope) => { return <h3>子组件传递的数据：{scope}</h3>}}>
        <h2>React 默认插槽：父组件直接传递元素</h2>
      </Son>
    </div>
  }
}

export default App;
