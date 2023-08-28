import React from 'react'

// 只针对 Son 组件生效
// 样式文件命名：组件名称.module.css
import sonStyle from './Son.module.css'

// 引入 classnames 库，本质帮助我们生成一个字符串
// import classnames from 'classnames'
//
// let son = classnames({
//   sonOne: true,
//   sonTwo: false,
//   sonThree: true
// })
// // 返回一个拼接好的字符串：sonOne sonThree
// console.log(son)

// 如果要变成模块化，要引入 classnames/bind 文件夹
import classnames from 'classnames/bind'
// 返回一个绑定 sonStyle 属性的方法
let bindClassnames = classnames.bind(sonStyle)

// let son = bindClassnames({
//   'son-one': true,
//   'son-two': false,
//   'son-three': true
// })
// // 返回一个拼接好的字符串：Son_son-one__R71G+ Son_son-three__PVvxw
// console.log(son)

class Son extends React.PureComponent {
  state = {
    sonMsg: '你好，我是子组件',
    isChange: false
  }

  switchClass() {
    this.setState({
      isChange: !this.state.isChange
    })
  }

  render() {
    // console.log(sonStyle)
    return <div>
      {/*可以使用 App.css 中的类名（子组件使用父组件中的类名）*/}
      <h1 className='father'>我是子组件【Son】</h1>
      <h1 className={sonStyle['son-one']}>我是子组件【Son】</h1>
      <h1 className={this.state.isChange ? sonStyle['son-one'] : sonStyle['son-two']}>我是子组件【Son】</h1>
      <button onClick={this.switchClass.bind(this)}>切换</button>

      <h1 className={bindClassnames({
        'son-one': this.state.isChange,
        'son-two': !this.state.isChange,
        'son-three': true
      })}>classnames 的简单使用</h1>
    </div>
  }
}

export default Son;
