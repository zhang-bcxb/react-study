import React from 'react'

class App extends React.PureComponent {

  // 定义响应式数据
  state = {
    isShow: false
  }

  // 方法处理
  fnShow() {
    if (this.state.isShow) {
      return '显示'
    } else {
      return '隐藏'
    }
  }

  render() {
    return <div>
      <h1>条件渲染</h1>
      <h1>{this.state.isShow ? '显示' : '隐藏'}</h1>
      <br/>
      <h1>{this.state.isShow && "显示"}</h1>
      <h1>{this.state.isShow || "隐藏"}</h1>
      <br/>
      <h1>{this.fnShow()}</h1>
      <button onClick={() => {
        this.setState({
          isShow: !this.state.isShow
        })
      }}>点击</button>
    </div>
  }
}

export default App;
