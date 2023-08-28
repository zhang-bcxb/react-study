import React from 'react'

class Son extends React.PureComponent {
  state = {
    sonMsg: '你好，我是子组件'
  }

  render() {
    return <div>
      <h1>我是子组件【Son】</h1>
      <h2>{this.props.fdata}</h2>
      <button onClick={() => {
        this.props.changeMsg("子组件调用父组件方法")
      }}>修改
      </button>
    </div>
  }
}

export default Son;
