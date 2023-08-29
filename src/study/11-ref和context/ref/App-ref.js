import React from 'react'
import Son from './Son'

// 用于获取 Dom
let h1Dom = React.createRef()
let sonDom = React.createRef()

class App extends React.Component {

  state = {
    msg: "父组件"
  }

  // 组件挂载完成，一般用来做一些页面初始化操作
  // 相当于 vue 的 mounted 钩子函数
  componentDidMount() {
    console.log('componentDidMount【组件挂载完成】')
    // 这种使用方式已经废弃
    // console.log(this.refs.h1Dom)

    console.log(h1Dom.current)
    console.log(sonDom.current)
  }

  // 渲染内容
  render() {
    // 空标签相当于 Vue 中的 template 标签
    return <>
      <h1 ref={h1Dom}>我是父组件【App】</h1>
      <Son ref={sonDom}></Son>
    </>
  }
}

export default App;
