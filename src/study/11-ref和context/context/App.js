import React from 'react'
import Son from './Son'

// 祖孙节点数据传递
// Context 是一个组件，首字母必须大写
// 暴露 Context，让孙子组件使用，保证孙子组件和父组件是同一个 Context
export const Context = React.createContext()

class App extends React.Component {

  state = {
    msg: "父组件",
    passMsg: "传递消息"
  }

  // 渲染内容
  render() {
    // 空标签相当于 Vue 中的 template 标签
    return <>
      <h1>我是父组件【App】</h1>

      {/*只能有 value 这一个 props，多个数据就进行传对象或者再创建一个Context进行传递数据*/}
      <Context.Provider value={this.state.passMsg}>
        <Son></Son>
      </Context.Provider>
    </>
  }
}

export default App;
