// 高阶组件
import React from "react";

// 接收一个组件参数组件
export function TestHookClass(UserCom) {
  // 返回一个匿名类
  return class extends React.PureComponent {
    state = {
      msg: "匿名类组件"
    }

    render() {
      return <>
        <h1>高阶组件</h1>
        {/*传递自定义数据和传递组件的属性*/}
        <UserCom msg={this.state.msg} {...this.props}/>
      </>
    }
  }
}

export function TestHookFn(UserCom) {
  // 返回一个匿名函数组件
  return function (props) {
    return <>
      <UserCom {...props}></UserCom>
    </>
  }
}
