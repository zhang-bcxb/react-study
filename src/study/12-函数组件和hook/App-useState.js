import React from 'react'

import {useState} from "react";

function App() {

  // state 使用
  // 第一项为数据，第二项为修改数据的方法
  let [msg, setMsg] = useState('hello')

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
