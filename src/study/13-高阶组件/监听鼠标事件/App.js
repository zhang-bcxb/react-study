import React from 'react'
import {useState} from 'react'
//  引入自定义的高阶组件
import {TestHookClass} from './TestHook'

function Son(props) {
  return <>
    <h2>x：{props.x}</h2>
    <h2>y：{props.y}</h2>
  </>
}

// 生成组件
let HookSon = TestHookClass(Son)

function App() {

  // 相当于 render 函数
  return <>
    <h1>App 组件</h1>
    <HookSon></HookSon>
  </>
}

export default App;
