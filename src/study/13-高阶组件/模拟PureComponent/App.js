import React from 'react'
import {useState} from 'react'
//  引入自定义的高阶组件
import {TestHookMemo} from './MemoHook'

function Son(props) {
  return <>
    <h1>子组件</h1>
  </>
}

// 生成组件
let MemoSon = TestHookMemo(Son)

function App() {

  let [num, setNum] = useState(0)

  // 相当于 render 函数
  return <>
    <h1>App 组件</h1>
    <h2>父组件数据更新：{num}</h2>
    <MemoSon></MemoSon>

    <button onClick={() => {
      setNum(99)
    }}>更新父组件数据</button>
  </>
}

export default App;
