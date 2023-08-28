import React from 'react'

class App extends React.PureComponent {

  // 定义响应式数据
  state = {
    htmlArr: [
      <li key={1}>语文</li>,
      <li key={2}>数学</li>,
      <li key={3}>英语</li>
    ],
    dataArr: [
      '语文',
      '数学',
      '英语'
    ]
  }

  addClick() {
    this.setState({
      dataArr: [...this.state.dataArr, '体育']
    })
  }

  render() {
    return <div>
      <h1>列表渲染
        <button onClick={this.addClick.bind(this)}>添加</button>
      </h1>

      <h2>HTML数组</h2>
      <ul>
        {this.state.htmlArr}
      </ul>
      <h2>数据数组</h2>
      <ul>
        {this.state.dataArr.map((item, index) => {
          return <li key={index}>{item}</li>
        })}
      </ul>
    </div>
  }
}

export default App;
