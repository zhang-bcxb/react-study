import React from 'react'
import './App.css'

import {connect} from 'react-redux'
import {changeMsg} from "./store/toolkit";

function App(props) {

  console.log(props)

  // 相当于 render 函数
  return <>
    <h1>App 组件</h1>
    <h2>{props.msg}</h2>
    <button onClick={() => {
      props.changeMsg()
      console.log(props)
    }}>修改Store
    </button>
  </>
}

// connect 返回一个高阶组件，生成一个新的组件
// 第一个参数：state 的映射，需要把哪些 state 映射到 props 中
// 第二个参数：方法映射，往 props 加入哪些方法
let ReduxApp = connect((state) => {
  // console.log(state)
  // 一定要返回一个对象
  return {
    msg: state.msgReducer.msg
  }
}, (dispatch) => {
  return {
    changeMsg() {
      // 第一种方式
      /*dispatch({
        type: 'msgSlice/changeMsg',
        payload: '修改的数据'
      })*/

      // 第二种方式【推荐】
      dispatch(changeMsg("修改的数据"))
    }
  }
})(App)
export default ReduxApp;
