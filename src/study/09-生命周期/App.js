import React from 'react'

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      msg: "父组件"
    }

    console.log("constructor【初始化数据】")
  }

  // 了解即可，不常用
  static getDerivedStateFromProps(props, state) {
    console.log('getDerivedStateFromProps')
    // console.log(props, state)
    return null
  }

  // 更新阶段调用，一般用来做性能优化
  shouldComponentUpdate(props, state) {
    console.log('shouldComponentUpdate【更新阶段】')

    console.log("修改前：" + this.state.msg)
    console.log("修改后：" + state.msg)

    // 模拟 PureComponent 原理
    for (let item in this.state) {
      if (this.state[item] !== state[item]) {
        // 如果有改变就进行更新
        return true
      }
    }
    return false
  }

  // 渲染内容
  render() {
    console.log("render【渲染内容】")
    return <div>
      <h1>我是父组件【App】</h1>
      <h2>{this.state.msg}</h2>
      <button onClick={() => {
        this.setState({
          msg: '更新数据'
        })
      }}>更新
      </button>
    </div>
  }

  // 组件挂载完成，一般用来做一些页面初始化操作
  // 相当于 vue 的 mounted 钩子函数
  componentDidMount() {
    console.log('componentDidMount【组件挂载完成】')
  }

  // 更新完成，相当于 vue 的 updated 钩子函数
  componentDidUpdate() {
    console.log('componentDidUpdate【更新完成】')
  }

  // 组件即将卸载，通常做一些全局事件的监听的卸载，定时器，计时器的卸载，来优化性能
  componentWillUnmount() {
    console.log('componentWillUnmount【组件即将卸载】')
  }
}

export default App;
