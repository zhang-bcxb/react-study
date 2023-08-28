import logo from './logo.svg';
import './App.css';
import React from 'react'


/**
 * this 指向问题
 * 【1】给方法调用 bind 函数
 * 【2】写成匿名箭头函数
 * 【3】方法本身写成箭头函数
 */
class App extends React.Component {
  constructor(props) {
    super(props);
  }

  fnClick1() {
    console.log(this) // undefined
    console.log("方法本身为普通函数")
  }

  fnClick2 = () => {
    console.log(this) // App 组件
    console.log("方法本身为箭头函数")
  }

  render() {
    return <div>
      <div onClick={() => {
        console.log(this) // App 组件
        console.log("匿名箭头函数")
      }}>箭头函数
      </div>

      <div onClick={this.fnClick1}>普通函数</div>

      <div onClick={this.fnClick1.bind(this)}>方法本身为普通函数（bind）</div>
      <div onClick={this.fnClick2}>方法本身为箭头函数</div>
    </div>
  }
}

export default App;
