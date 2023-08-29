import React from 'react'

import {useState, useEffect, useRef, useContext} from 'react'

let Context = React.createContext()

function Son(props) {
  // 拿到父组件提供的数据
  let value = useContext(Context)

  return <>
    <h1>子组件【Son】</h1>
    <h2>{value}</h2>
  </>
}

function App() {

  // state 使用
  // 第一项为数据，第二项为修改数据的方法
  let [msg, setMsg] = useState('hello')

  // 相当于 render 函数
  return <>
    <h1>App 组件</h1>
    <h2>{msg}</h2>
    <Context.Provider value='传递数据'>
      <Son></Son>
    </Context.Provider>
  </>
}

export default App;
