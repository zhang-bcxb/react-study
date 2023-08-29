import React from 'react'
// 在孙子组件中导入父组件的 Context
import {Context} from './App'

class GrandSon extends React.PureComponent {
  state = {
    sonMsg: '孙子组件',
  }

  render() {
    return <div>
      <h1>我是孙子组件【GrandSon】</h1>
      <Context.Consumer>
        {
          // 作用域插槽，使用一个方法进行接收
          (value) => {
            return <h2>{value}</h2>
          }
        }
      </Context.Consumer>
    </div>
  }
}

export default GrandSon;
