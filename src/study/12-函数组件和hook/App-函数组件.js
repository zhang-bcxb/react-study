import React from 'react'

function App() {

  // 相当于一个组件，注意第一个字母要大写
  function Son() {
    return  <div>Son 组件</div>
  }

  // 相当于 render 函数
  return <>
    <div>App 组件</div>
    {Son()}
    <Son></Son>
  </>
}

export default App;
