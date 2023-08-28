import logo from './logo.svg';
import './App.css';
import React from 'react'

// JSX 和 React 是相互独立的
function App() {

  function FnReact() {
    // 第一个参数：创建的元素
    // 第二个参数：元素的属性
    // 第三个参数：组件内容
    return React.createElement('div', [], 'hello React')
  }

  function FnJSX() {
    return <div>hello JSX</div>
  }

  let objReact = FnReact()
  let objJSX = FnJSX()

  return (
      <div>
        objReact：
        <FnReact></FnReact>
        {FnReact()}
        {objReact}
        <br/>
        objJSX：
        <FnJSX></FnJSX>
        {FnJSX()}
        {objJSX}
      </div>
  );
}

export default App;
