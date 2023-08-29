import React from 'react'

import {useState, useEffect, useRef, useContext} from 'react'

function App() {

  // state 使用
  // 第一项为数据，第二项为修改数据的方法
  let [msg, setMsg] = useState('hello')

  let h1Dom = useRef()

  // 模拟挂载完成阶段
  // 第二个参数传空数组即可，模拟挂载完成阶段
  useEffect(() => {
    console.log(h1Dom.current)
  }, [])

  // 相当于 render 函数
  return <>
    <h1 ref={h1Dom}>App 组件</h1>
    <h2>{msg}</h2>
  </>
}

export default App;
