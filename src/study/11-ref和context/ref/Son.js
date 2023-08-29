import React from 'react'

class Son extends React.PureComponent {
  state = {
    sonMsg: '你好，我是子组件',
  }

  render() {
    return <div>
      <h1>我是子组件【Son】</h1>
    </div>
  }
}

export default Son;
