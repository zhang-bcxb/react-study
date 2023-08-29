import React from 'react'

function Son(props) {
  return <>
    <h1>子组件【Son】</h1>
    <h2>{props.data}</h2>
  </>
}

function App() {

  // 相当于 render 函数
  return <>
    <h1>App 组件</h1>
    <Son data="父组件传递的数据"></Son>
  </>
}

export default App;
