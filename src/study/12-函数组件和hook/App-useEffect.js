import React from 'react'

import {useState, useEffect} from 'react'

function App() {

  // state 使用
  // 第一项为数据，第二项为修改数据的方法
  let [msg, setMsg] = useState('hello')

  // 第一个参数：回调函数【必传】
  // 第二个参数：空数组 或者 放某个数据
  // useEffect 监听某个数据，开始就会执行【Vue 不会】
  useEffect(() => {
    console.log('useEffect')
  }, [msg])

  // 相当于 render 函数
  return <>
    <h1>App 组件</h1>
    <h2>{msg}</h2>

    <button onClick={() => {
      setMsg("修改数据")
    }}>修改数据
    </button>
  </>
}

export default App;
