import React from 'react'

class Son extends React.PureComponent {
  state = {
    sonMsg: '你好，我是子组件'
  }

  render() {
    return <div>
      {this.props.dom}
      <h1>我是子组件【Son】</h1>
      {this.props.children}

      <h2>作用域插槽：子组件调用父组件方法</h2>
      {this.props.scopeSolt(this.state.sonMsg)}
    </div>
  }
}


export default Son;
