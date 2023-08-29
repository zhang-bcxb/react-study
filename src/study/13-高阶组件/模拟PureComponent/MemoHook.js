// 高阶组件
import React from "react";

// 接收一个组件参数组件
export function TestHookMemo(UserCom) {
  // 返回一个匿名类
  return class extends React.Component {

    // 更新阶段调用，一般用来做性能优化
    shouldComponentUpdate(props, state) {
      console.log('shouldComponentUpdate【更新阶段】')

      // 检查 props 数据
      for (let item in this.props) {
        if (this.props[item] !== props[item]) {
          // 如果有改变就进行更新
          return true
        }
      }

      // 检查 state 数据
      for (let item in this.state) {
        if (this.state[item] !== state[item]) {
          // 如果有改变就进行更新
          return true
        }
      }

      return false
    }


    render() {
      return <>
        <h1>高阶组件</h1>
        <UserCom  {...this.props}/>
      </>
    }
  }
}
