import React from 'react'
// npm i proptypes -S
import proptypes from 'proptypes'

class Son extends React.PureComponent {
  state = {
    sonMsg: '子组件：你好'
  }

  render() {
    return <div>
      <h1>{this.props.data}</h1>
      <h1>{this.state.sonMsg}</h1>
      <h1>我是子组件【Son】</h1>
    </div>
  }
}

// 类型验证
// Son.propTypes = {
//   data: function (props) {
//     if (typeof props.data !== 'string') {
//       throw new Error("data 必须是一个字符串")
//     }
//   }
// }

// proptypes 第三方库的使用
Son.propTypes = {
  data: proptypes.string
}

// 默认值
Son.defaultProps = {
  data: '父组件数据默认值'
}

export default Son;
