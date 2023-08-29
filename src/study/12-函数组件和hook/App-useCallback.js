import React from 'react'

import {useState, useEffect, useMemo, useCallback} from 'react'

// useEffect, useMemo, useCallback 第二个参数的作用都是一样的
function App() {

  // state 使用
  // 第一项为数据，第二项为修改数据的方法
  let [msg, setMsg] = useState('hello')

  // 缓存一个方法，这样每次更新的时候，方法就不会重新创建
  // 第一个参数：回调函数【必传】
  // 第二个参数：空数组 或者 放某个数据，用于重新创建方法的契机
  let changeMsg = useCallback(() => {
    setMsg('修改数据')
  }, [])

  // 相当于 render 函数
  return <>
    <h1>App 组件</h1>
    <h2>{msg}</h2>
    <button onClick={changeMsg}>修改数据</button>
  </>
}

export default App;
