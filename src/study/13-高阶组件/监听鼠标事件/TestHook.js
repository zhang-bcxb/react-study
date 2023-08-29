// 高阶组件
import React from "react";

// 接收一个组件参数组件
export function TestHookClass(UserCom) {
  // 返回一个匿名类
  return class extends React.PureComponent {

    state = {
      x: 0,
      y: 0
    }

    // 挂载完成触发
    componentDidMount() {
      // 注册鼠标箭头事件
      window.addEventListener('mousemove', (e) => {
        // 获取鼠标坐标
        let x = e.clientX
        let y = e.clientY

        // console.log(x, y)

        this.setState({
          x: x,
          y: y,
        })
      })
    }

    render() {
      return <>
        <h1>高阶组件</h1>
        {/*传递自定义数据和传递组件的属性*/}
        <UserCom x={this.state.x} y={this.state.y} {...this.props}/>
      </>
    }
  }
}
