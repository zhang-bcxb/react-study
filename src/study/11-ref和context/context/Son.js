import React from 'react'
// 引入孙子组件
import GrandSon from "./GrandSon";

class Son extends React.PureComponent {
  state = {
    sonMsg: '子组件',
  }

  render() {
    return <div>
      <h1>我是子组件【Son】</h1>
      <GrandSon></GrandSon>
    </div>
  }
}

export default Son;
