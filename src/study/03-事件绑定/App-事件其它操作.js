import logo from './logo.svg';
import './App.css';
import React from 'react'

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  fnClick1(a, b, e) {
    // 阻止事件冒泡
    e.stopPropagation()
    // 阻止默认行为
    e.preventDefault()

    console.log("方法本身为普通函数")
    console.log(a, b)
    console.log(e)
  }

  render() {
    return <div>
      <div onClick={this.fnClick1.bind(this, '参数1', '参数2')}>传递参数</div>
    </div>
  }
}

export default App;
